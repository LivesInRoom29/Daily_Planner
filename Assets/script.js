$(document).ready(function() {

    //Variables:
    const curDayEl = $('#currentDay');
    const todaysDate = moment();


    // To display the date in the header - using moment.js
    curDayEl.text(todaysDate.format('dddd, MMMM DD YYYY'));



});