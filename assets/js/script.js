// Display current date
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// Loop all time blocks to indicate if time block is in the past, present, or future
$(".row").each(function(){
    var eachTime = $(this).find("#time").text(); 
    var currentTime = moment();
    // var currentTime = moment('11:00:00', 'hh:mm:ss');
    var startTime = moment(eachTime, 'h A');
    var endTime = moment(startTime).add(1, 'h');
    if (moment(currentTime).isSameOrAfter(startTime) && moment(currentTime).isBefore(endTime)) {
        $(this).find("#block").addClass("red");
    } else if (moment(currentTime).isBefore(startTime)) {
        $(this).find("#block").addClass("green");
    } else if (moment(currentTime).isSameOrAfter(endTime)) {
        $(this).find("#block").addClass("gray");
    };
});

// Add edit ability for event block
$(".row").on("click", "#block", function () {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control col-6 px-0 border text-left py-2 px-4")
        .val(text);
    
    $(this).replaceWith(textInput);
    
    textInput.trigger("focus");
});

// Store current events in localStorage and run initial load
events = JSON.parse(localStorage.getItem("events"));
// if nothing in localStorage, create a new object 
// to track all events status arrays
if (!events) {
    events = [];
}

// Initially load
$(".row").each(function () {
    var eachTime = $(this).find("#time").text().trim();
    var eachText = $(this).find("#block").text().trim();
    events.push({
        time: eachTime,
        text: eachText
    });
});

console.log(events);

// Update events in localStorage
var updateEvents = function (eventTime, eventText) {

    events.forEach(function (event) {
        if (event["time"] == eventTime) {
            event["text"] = eventText;
        };
    });

    console.log(events);
};

// loadEvents();

// Add save ability for new input
$(".row").on("click", "span", function () {
    // get the textarea's current time
    var inputTime = $(this)
        .closest(".row")
        .find("#time")
        .text()
        .trim();
    console.log(inputTime);
    // get the textarea's current value
    var inputText = $(".row").find("textarea")
        .val()
        .trim();
    console.log(inputText);
    
    updateEvents(inputTime, inputText);
    // console.log(events);
});