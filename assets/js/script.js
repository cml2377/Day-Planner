$(document).ready(function () {

    //First, we display current day, date, and time in the jumbotron.
    var currentDayEl = $("#currentDay");

    currentDayEl.moment().format("dddd, MMM Do YYYY, h:mm a");

    //Then, we calculate the time of day with moment, and then change the classes of the rows accordingly.

    //$(".past").addClass(".present").removeClass(".past");

    //When user clicks on an empty input box, it should allow user to populate it with a string. 

    //When the user clicks on the save icon, it should save their string to local storage.




});