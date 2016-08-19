function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.abs(Math.floor((t / 1000) % 60));
    var minutes = t > 0 ? Math.floor((t / 1000 / 60)) : Math.abs(Math.ceil((t / 1000 / 60)));
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    var id = "clockdiv";
    if (!document.getElementById(id)) {
        window.document.write("<div id=\"" + id + "\"><div><span class=\"clock\"></span></div>");
    }
    var clock = document.getElementById(id);
    var clockDiv = clock.querySelector('div');
    var clockSpan = clock.querySelector('.clock');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        var absMinute = ('0' + t.minutes).slice(-3);
        var minute = t.total >= 0 ? absMinute : ("-" + absMinute);
        var second = ('0' + t.seconds).slice(-2);
        clockSpan.innerHTML = minute + ":" + second;

        if (t.total < 0 && clockDiv.className != "over") {
            clockDiv.className = "over";
        }
    }

    updateClock();
    setInterval(updateClock, 1000);
}