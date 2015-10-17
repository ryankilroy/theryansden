var color, inc, index, max, min, htmldiv, bloop;

max = 200;
min = 100;

color = [max, max, max];
inc = [0, 0, 0];

htmldiv = document.getElementsByTagName('html')[0];

function randColorInc() {
    'use strict';
    inc[0] = 0;
    inc[1] = 0;
    inc[2] = 0;
    
    index = Math.floor(Math.random() * 3);
    inc[index] = color[index] >= max ? -1 : 1;
}

function incColor(i) {
    'use strict';
    color[i] += inc[i];
    if (color[i] > max) {
        color[i] = max;
        randColorInc();
    } else if (color[i] < min) {
        color[i] = min;
        randColorInc();
    }
    var colorString = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
    htmldiv.style.backgroundColor = colorString;
    document.getElementById('bloop').innerHTML = colorString;
}

function newColor() {
    'use strict';
    incColor(index);
}