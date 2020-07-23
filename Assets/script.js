$(document).ready(function() {

    //Variables:
    // To set the date in header
    const curDayEl = $('#currentDay');
    const todaysDate = moment();
    console.log(moment().day()); //To remove later
    // The container that holds the calendar
    const container = $('div.container');


    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));

    // Iterate through the hours to populate the rows of the calendar
    for (i = 9; i < 18; i++) {
        // container.html($('<div class="row time-block"></div>'));
        const rowEl = $('<div>');
        const hourEl = $('<div>');
        const calTextArea = $('<textarea>');
        const saveBtn = $('<button>');

        rowEl.addClass('row time-block');
        hourEl.addClass('col-2 col-md-1 hour');

        //To set the hour in first column - use moment.js for this?
        hourEl.text(setHour(i));

        calTextArea.addClass('col-8 col-sm-10');
        calTextArea.attr('name', 'hourplan');
        saveBtn.addClass('col-2 col-md-1 saveBtn');
        saveBtn.attr('type', 'button');
        saveBtn.html('<i class="far fa-save"></i>');

        container.append(rowEl);
        rowEl.append(hourEl, calTextArea, saveBtn);
    }

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
    }

});