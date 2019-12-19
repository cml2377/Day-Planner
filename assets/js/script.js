$(document).ready(function () {

    //First, we display current day, date, and time in the jumbotron.
    var currentDayEl = $("#currentDay");

    currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    var inputBlockEl = $(".time-block");
    var saveBtns = $(".saveBtn");
    var data = {};

    var update = function () {
        currentDayEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));

        var now = moment().hour(); //returns 0 through 23, aka military time 
        //if inputblockEl is < now; then change class to past            
        //if inputblockEl == now; then change class to present
        //if inputblockEl > now, then change class to future

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

    //When the user clicks on the save icon, it should save their string to local storage.

    saveBtns.on("click", function (event) {
        //save userInput as a string to local storage. with THIS button!
        var button = $(this);

        var btnData = $(this).attr("data-time");

        console.log(btnData);
        //textArea locates the specific description element that user filled in text with.

        var descriptionTarget = $("#description" + btnData);

        console.log(descriptionTarget);

        console.log(descriptionTarget.val());



        var textArea = $(".description" + button.attr("data-time"));
        console.log(textArea);
        //userText is the actual text being saved
        var userText = textArea.val();
        //this is supposed to set the text area text to that specific textArea and store it in an arry of objects called data.
        localStorage.setItem(data[textArea.attr("id", userText)]);
    });

    //site should load any saved data from localStorage.
    textArea = JSON.parse(localStorage.userText);

    //clear button clears local storage.
    $("#clear").on("click", function () {
        localStorage.clear();
    });

});