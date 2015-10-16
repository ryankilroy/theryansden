var current, hours, minutes, seconds, suffix, formatTime;

function updateTime() {
    "use strict";
    current = new Date();
    hours = current.getHours();
    minutes = current.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = current.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    suffix = hours >= 12 ? 'pm' : 'am';
    
    //No one should be looking at this site this early in the morning...
    if (hours < 6 && hours > 2) {
        hours = 'why are';
        minutes = 'you still';
        seconds = 'awake !?';
    }
    
    hours = suffix === 'pm' ? hours - 12 : hours;
    hours = hours <= 0 ? 12 : hours;
    hours = hours < 10 ? '0' + hours : hours;
    formatTime = hours + ':' + minutes + ':' + seconds + ' ' + suffix;
    document.getElementById("hrLabel").innerHTML = hours;
    document.getElementById("minLabel").innerHTML = minutes;
    document.getElementById("secLabel").innerHTML = seconds;
    document.getElementById("suffixLabel").innerHTML = suffix;
}