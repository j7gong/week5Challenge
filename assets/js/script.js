// Display current date
$("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));

// Add color to indicate if time block is in the past, present, or future

const time = $("#time-9").text(); 

var colorCode = function () {
    var currentTime = moment();
    // var testTime = '10 PM';
    // console.log("Time block: " + timeMoment);
    // console.log(testTime);
    console.log("current Time: " + currentTime);
    
    // if (moment(time, 'h A').isBefore(currentTime)) {
    //     $("")
    // };

    // console.log(moment(time, 'h A').isBefore(moment('17 PM', 'hh A')));
    // console.log(moment(testTime, 'h A').isBefore(moment('17:00 PM', 'hh:mm A')));
};

colorCode();
