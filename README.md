# Daily_Planner
HW5 for UNH Coding Bootcamp: This is a calendar application created using jQuery.

## Description

Utilizing HTML, JavaScript, jQuery, and Moment.js, this application provides a way for someone to plan what they will be doing throughout the work day. I was given  starter code with some HTML and almost all the CSS for this project.

The current date appears in the header of the page, along with a "Clear Calendar" button. The main part of the page contains the planner, separated by hour from 9am through 5pm. The user can type into the middle section of the planner and use the save button to store the text in local storage. Once the information is stored, it will be used to populate the page when reloaded. 

Each line of the calendar is color-coded, based on the time of the day. The current hour is coral, the hours that have past are grey and that future hours are green.

If the user clicks on the "Clear Calendar" button, a pop-up appears to confirm that they want to clear the memory associated with the calendar. If they confirm, the local storage is cleared and the text area of the calendar is also cleared.

[Link to Daily Planner App](https://livesinroom29.github.io/Daily_Planner/)
![plannerScreenShot](https://user-images.githubusercontent.com/61219066/88470911-61f22500-ced0-11ea-8bd9-a5e13c6a4a6d.jpg)


## Learning Outcomes

* JavaScript and jQuery
  * Used both JavaScript and jQuery to select elements on the DOM and allow the user to save information to local storage to be displayed on the page after reload.
  * Utilized setInterval() to automatically set the colors of the rows at the start of each hour.
* Moment.js
  * Used Moment.js to display the date and to color-code the sections of the planner.


## Credits

* Starter HTML and CSS provided by Trilogy Education Services.

* Thanks to the UNH Bootcamp instructor, TAs, tutors for providing the class with lots of practice using JavaScript and jQuery and for answering all of our questions and helping to walk us through issues as needed.
