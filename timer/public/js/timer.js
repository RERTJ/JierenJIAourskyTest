var Example1 = new (function() {
    var $stopwatch, // Stopwatch element on the page
        incrementTime = 70, // Timer speed in milliseconds
        currentTime = 0, // Current time in hundredths of a second
        updateTimer = function() {
            $stopwatch.html(formatTime(currentTime));
            currentTime += incrementTime / 10;
        },
        init = function() {
            $stopwatch = $('#stopwatch');
            Example1.Timer = $.timer(updateTimer, incrementTime, true);
        };
    this.resetStopwatch = function() {
        currentTime = 0;
        this.Timer.stop().once();
    };
    $(init);
});


var count = 0,
    timer = $.timer(function() {
        count++;
        $('#counter').html(count);
    });
timer.set({ time : 1000, autostart : false });


// Common functions
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {str = '0' + str;}
    return str;
}
function formatTime(time) {
    var min = parseInt(time / 6000),
        sec = parseInt(time / 100) - (min * 60),
        hundredths = pad(time - (sec * 100) - (min * 6000), 2);
    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2) + ":" + hundredths;
}

$("#create").click(function () {
  console.log("aaa")
  $("#taskBox").append('<div class="taskcontainer"><div id="taskname" class="taskname"></div><span id="stopwatch">00:00:00</span><form id="example"><button  type="submit" class="pause" style="border-style:none;  width:56px; height:56px; background-repeat:no-repeat;"><img src="/img/Group 4.png"/></button><button  type="submit" class="finish" onclick="" style="border-style:none;  width:56px; height:56px; background-repeat:no-repeat;"><img src="/img/Group 5.png"/></button></form></div>')
});
