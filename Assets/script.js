$(document).ready(function() {

    //Variables:
    // To set the date in header
    const curDayEl = $('#currentDay');
    const todaysDate = moment();
    // The container that holds the calendar
    const container = $('div.container');

&    let planner = JSON.parse(localStorage.getItem('plannerKEY')) || [
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

    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));

    // To populate the rows of the calendar
    createRows(9, 18);

    // Upon page load, this function will fill the planner with saved plans, from 9pm (9:00) - 5pm (18:00)
    getSavedPlans(9,18);

    // Should these functions go at the top?
    // Takes an hour from 24 hour time to make it AM or PM
    function setHour(hr) {
        let time = 0;

        if (hr < 12) {
            time = hr + "AM";
        } else if (hr === 12) {
            time = hr + "PM";
        } else {
            time = (hr - 12) + "PM";
        }

        return time;
    };

    function getSavedPlans(start, end) {
        const range = [9, 10, 11, 12, 13, 14, 15, 16, 17];

        //Loop through the array to add text to the planner where it exists
        range.forEach(function(element) {
            const textblock = $(`.text${element}`);
            const index = element - 9;
            textblock.append(planner[index].text);
        });
    };

    function createRows(start, end) {
        // Iterate through the hours (from start to end - end non-inclusive) to populate the rows of the calendar
        for (i = start; i < end; i++) {
            const rowEl = $('<div>');
            const hourEl = $('<div>');
            const calTextArea = $('<textarea>');
            const saveBtn = $('<button>');

            rowEl.addClass('row time-block');
            hourEl.addClass('col-2 col-md-1 hour');

            //To set the hour in first column - use moment.js for this?
            hourEl.text(setHour(i));

            calTextArea.addClass(`col-8 col-sm-10 text${i}`);
            calTextArea.attr({
                name: 'hourplan',
                'data-time': i
            });
            saveBtn.addClass('col-2 col-md-1 saveBtn ' + i);
            saveBtn.attr({
                type: 'button',
                'data-time': i
            });
            saveBtn.html('<i class="far fa-save"></i>');

            container.append(rowEl);
            rowEl.append(hourEl, calTextArea, saveBtn);
        }
    };

    function saveText(timeblock) {
        const thisTextArea = $(`.text${timeblock}`);
        const text = thisTextArea.val();
        const index = timeblock - 9
        // Find correct time, edit the text in the object
        planner[index].text = text;
        // Save to memory
        localStorage.setItem('plannerKEY', JSON.stringify(planner));
    };

    // Add event listener for save button - listen for all .saveBtn
    container.on("click", "button", function(event) {
       // event.preventDefault(); DO I NEED THIS?
        const thisBtn = $(this);
        const classes = thisBtn.attr('class').split(' ');
        const lastClass = classes[classes.length - 1];

        const textArea = $(`.text${lastClass}`);
        const textValue = textArea.val();
        console.log(textValue);

        console.log(event);
        console.log(thisBtn);
        console.log(thisBtn.attr('class'));
        console.log($(this).parent());
        saveText(lastClass);
    });


});