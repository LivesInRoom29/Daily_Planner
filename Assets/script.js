$(document).ready(function() {
    // To set the date in header
    const curDayEl = $('#currentDay');
    const todaysDate = moment();
    // An array that contains all of the <textarea> elements
    const rows = $('textarea');
    // Array for the saved planner items.
    let planner = [];

    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));

    function setPlanner() {
        // Either get saved planner items from local storage if it exists, otherwise initialize to array of objects with no text:
        planner = JSON.parse(localStorage.getItem('plannerKEY')) || [
            {time: "9", text: ""},
            {time: "10", text: ""},
            {time: "11", text: ""},
            {time: "12", text: ""},
            {time: "13", text: ""},
            {time: "14", text: ""},
            {time: "15", text: ""},
            {time: "16", text: ""},
            {time: "17", text: ""},
        ];
    };

    function colorCodeRows(currentHour) {
        // For each element in the rows array,
        rows.each(function(element) {
            // Makes the element a jQuery object
            row = $(this);
            // Set the class to not include past, present, or future
            row.attr('class', 'col-8 col-sm-10');
            // Add a class based on if the id of the row is before, after, or the same as the current hour
            if (row.attr('id') < currentHour) {
                row.addClass('past');
            } else if (row.attr('id') > currentHour) {
                row.addClass('future');
            } else {
                row.addClass('present');
            }
        })
    };

    function getSavedPlans(start, end) {
        const range = [9, 10, 11, 12, 13, 14, 15, 16, 17];
        //Loop through the array to add text to the planner where it exists
        range.forEach(function(element) {
            const textblock = $(`#${element}`);
            const index = element - 9;
            textblock.html(planner[index].text);
        });
    };

    function saveText(timeblock) {
        // use the time to select for the correct textarea
        const thisTextArea = $(`#${timeblock}`);
        // Get the text typed into the textarea
        const text = thisTextArea.val();
        // time is from 9-17, so need to change to index 0-8
        const index = timeblock - 9
        // Find correct time in the planner array, edit the text in the correct object
        planner[index].text = text;
        // Save to memory
        localStorage.setItem('plannerKEY', JSON.stringify(planner));
    };

    // Clears local storage, resets the planner array and clears the calendar of plans
    function clearCalendar() {
        localStorage.clear();
        setPlanner();
        getSavedPlans(9,18);
    };

    // Upon page load:
    // Set the planner array using local storage if it exists.
    setPlanner();
    // Fill the planner with saved plans, from 9pm (9:00) - 5pm (17:00)
    getSavedPlans(9,18);
    // Use moment.js to get the current Hour and pass it in to the function to color-code the rows
    colorCodeRows(moment().hour());

    // Every minute, check the current time to see if it's a new hour (minutes == 00); if so, run the function to color-code the rows
    setInterval(function() {
        if (moment().minute() === 0) {
            colorCodeRows(moment().hour());
        }
    }, 60000);

    // Event listener for save button - listen for all .saveBtn
    $("button.saveBtn").on("click", function(event) {
        // event.preventDefault(); DO I NEED THIS?
        const thisBtn = $(this);
        saveText(thisBtn.attr('data-time'));
    });

    // Event listener for the Clear Calendar btn; user must confirm that they are OK with losing the data.
    $("button.clear").on("click", function() {
        const clear = confirm("Are you sure you want to clear the calendar? You will lose all information that is currently stored in memory.")
        if(clear) {
            clearCalendar();
        };
    });
});