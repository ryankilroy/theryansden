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
    hours = suffix === 'pm' ? hours - 12 : hours;
    formatTime = hours + ':' + minutes + ':' + seconds + ' ' + suffix;
    document.getElementById("hrLabel").innerHTML = hours;
    document.getElementById("minLabel").innerHTML = minutes;
    document.getElementById("secLabel").innerHTML = seconds;
    document.getElementById("suffixLabel").innerHTML = suffix;
}