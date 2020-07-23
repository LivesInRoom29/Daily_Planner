$(document).ready(function() {

    //Variables:
    // To set the date in header
    const curDayEl = $('#currentDay');
    const todaysDate = moment();
    // The container that holds the calendar
    const container = $('div.container');

    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));

    // To populate the rows of the calendar
    createRows(9, 18);



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

            calTextArea.addClass('col-8 col-sm-10');
            calTextArea.attr({
                name: 'hourplan',
                'data-time': i
            });
            saveBtn.addClass('col-2 col-md-1 saveBtn');
            saveBtn.attr({
                type: 'button',
                'data-time': i
            });
            saveBtn.html('<i class="far fa-save"></i>');

            container.append(rowEl);
            rowEl.append(hourEl, calTextArea, saveBtn);
        }
    };

    // Add event listener for save button - listen for all .saveBtn
    container.on("click", "button", function(event) {
       // event.preventDefault(); DO I NEED THIS?
        const thisBtn = this;
        console.log(event);
        console.log(thisBtn);
        console.log(thisBtn.getAttribute('data-time'));
        console.log($(this).parent());
    });


});