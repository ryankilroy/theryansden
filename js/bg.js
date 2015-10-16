var fileIndex, fileName, fileString, htmldiv, bgdiv, bgOpac, inc, intervalHandle;

var old = [-1, -1, -1];


function uniqueIndex() {
    'use strict';
    var repeat = true;
    while (repeat) {
        repeat = false;
        fileIndex = Math.floor(Math.random() * 12);
        repeat = old[0] == fileIndex ? true : repeat;
        repeat = old[1] == fileIndex ? true : repeat;
        repeat = old[2] == fileIndex ? true : repeat;
    }
    old[2] = old[1];
    old[1] = old[0];
    old[0] = fileIndex;
}

function loadNextImage() {
    'use strict';
    uniqueIndex();
    fileName = 'bgimg_' + fileIndex;
    fileString = 'url(../assets/' + fileName + '.png)';
    bgdiv = document.getElementById('bgdiv');
    bgdiv.style.backgroundImage = fileString;
}

function transition() {
    'use strict';
    bgOpac += inc;
    if (bgOpac > 1) {
        htmldiv.style.backgroundImage = fileString;
        bgOpac = 0;
        bgdiv.style.opacity = bgOpac;
        inc = 0;
        clearInterval(intervalHandle);
        loadNextImage();
        return;
    }
    bgdiv.style.opacity = bgOpac;
}

function randBg() {
    'use strict';
    bgOpac = 0;
    inc = 0.01;
    htmldiv = document.getElementsByTagName('html')[0];
    bgdiv = document.getElementById('bgdiv');
    intervalHandle = setInterval(transition, 10);
}