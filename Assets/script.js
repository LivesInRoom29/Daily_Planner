$(document).ready(function() {

    //Variables:
    // To set the date in header
    const curDayEl = $('#currentDay');
    const todaysDate = moment();
    console.log(moment().hour()); //To remove later

    // The container that holds the calendar
    const container = $('div.container');
    const textarea9 = $('#9'); // Do i need these?

    // Array for the saved planner items; either get it from local storage if it exists, otherwise initialize to array of objects with no text:
    let planner = JSON.parse(localStorage.getItem('plannerKEY')) || [
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
    console.log(planner);
    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));


    // function getSavedPlans(start, end) {
    //     // Sort the array first
    //     let plannerList = JSON.parse(localStorage.getItem('plannerKEY')).sort(function (a, b) {
    //         return a.timeblock - b.timeblock;
    //     });

    //     console.log(plannerList[0]);
    //     console.log(plannerList[1].timeblock);
    //     console.log(plannerList[2].text);

    //     const range = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //     //Loop through the array to add text to the planner where it exists
    //     range.forEach(function(element) {
    //         const textblock = $('#'+element);
    //         const index = element - 9;
    //         if (plannerList[index].text) {
    //             textblock.append(plannerList[index].text);
    //         }
    //     });
    // };

    // getSavedPlans(9,18);

    function saveText(timeblock) {
        const thisTextArea = $('#'+timeblock);
        const text = thisTextArea.val();
        const index = timeblock - 9
        // Find correct time, edit the text in the object
        planner[index].text = text;
        // Save to memory
        localStorage.setItem('plannerKEY', JSON.stringify(planner));
    };

    // Add event listener for save button - listen for all .saveBtn
    $("button.saveBtn").on("click", function(event) {
        // event.preventDefault(); DO I NEED THIS?
        const thisBtn = this;
        saveText(thisBtn.getAttribute('data-time'));
     });
});