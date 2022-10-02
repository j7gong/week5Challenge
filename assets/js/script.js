// Display current date
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// Add color to indicate if time block is in the past, present, or future
const time = $("#time-9").text(); 

var colorCode = function () {
    // var format = 'hh:mm:ss'; 
    // var checkTime = moment('11:00:00', format);
    var currentTime = moment();
    var testTime = moment(time, 'h A');
    var afterTime = moment(testTime).add(1, 'h');

    // console.log("current Time: " + currentTime);
    if (moment(currentTime).isSameOrAfter(testTime) && moment(currentTime).isSameOrBefore(afterTime)) {
        $("#div-9").addClass("red");
    } else if (moment(currentTime).isBefore(testTime)) {
        $("#div-9").addClass("green");
    } else if (moment(currentTime).isAfter(afterTime)) {
        $("#div-9").addClass("gray");
    };
};

colorCode();