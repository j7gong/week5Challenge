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