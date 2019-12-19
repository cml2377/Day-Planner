$(document).ready(function () {

    //First, we display current day, date, and time in the jumbotron.
    var currentDayEl = $("#currentDay");

    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var update = function () {
        currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
    setInterval(update, 1000);

    //Then, we calculate the time of day with moment, and then change the classes of the rows accordingly.
    var nineAM = $("#9Row");
    var tenAM = $("#10Row");
    var elevenAM = $("#11Row");
    var noon = $("#12Row");
    var onePM = $("#13Row");
    var twoPM = $("#14Row");
    var threePM = $("#15Row");
    var fourPM = $("#16Row");
    var fivePM = $("#17Row");

    //if time is #AM-- 
    moment()


    //if block is < #; then change class to past            
    //if block == #; then change class to present
    //if block > #, then change class to future

    $(".future").addClass(".present").removeClass(".future");
    $(".present").addClass(".past").removeClass(".present");

    //When user clicks on an empty input box, it should allow user to populate it with a string. 

    //When the user clicks on the save icon, it should save their string to local storage.




});