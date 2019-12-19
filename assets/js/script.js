$(document).ready(function () {

    //First, we display current day, date, and time in the jumbotron.
    var currentDayEl = $("#currentDay");

    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    var update = function () {
        currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        var now = moment().hour(); //returns 0 through 23, aka military time 

        var inputBlockEl = $(".inputBlock");
        //if block is < #; then change class to past            
        //if block == #; then change class to present
        //if block > #, then change class to future

        //Then, we calculate the time of day with moment, and then change the classes of the rows accordingly.

        inputBlockEl.each(function (i, element) {
            element = $(element);
            if (now > element.attr("data-hour")) {
                element.addClass("past").removeClass("future present");
            } else if (now == element.attr("data-hour")) {
                element.addClass("present").removeClass("future past");
            }
        });
    }
    // we're just gonna check every SECOND.
    setInterval(update, 1000);











    //When user clicks on an empty input box, it should allow user to populate it with a string. 

    //When the user clicks on the save icon, it should save their string to local storage.




});