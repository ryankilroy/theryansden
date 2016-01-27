var intervalHandle, opacInt, messageDiv, yesDiv, noDiv, bgOpac;

var morseString = ".... . .-.. .-.. --- / .- --. . -. - / .----. -.- .. -. --. ... .-.. .- -.-- . .-. .----. .-.-.- / .-- --- ..- .-.. -.. / -.-- --- ..- / .-.. .. -.- . / - --- / --. --- / --- ..- - / .- --. .- .. -. ..--.."
var constMorse = morseString;
var spaceString = "";
var messageString = "Hello Agent 'Kingslayer'. Would you like to go out again?"
var frankenString = morseString;
var substringIndex = 0;
var morseIndex = 0;
var length = messageString.length;
var mlength = constMorse.length;

function initMessage() {
    'use strict'
    messageDiv = document.getElementById("message");
    messageDiv.style.opacity = 0;
    yesDiv = document.getElementById("yes");
    noDiv = document.getElementById("no");
    bgOpac = 0;
    opacInt = setInterval(showMorse,20);
    setTimeout(function(){
        intervalHandle = setInterval(nextLetter, 30);
    }, 3000);
}

function showMorse() {
    'use strict';
    var inc = 0.01
    bgOpac += inc;
    if (bgOpac > 1) {
        messageDiv.style.opacity = bgOpac;
        inc = 0;
        clearInterval(opacInt);
        return;
    }
    messageDiv.style.opacity = bgOpac;
}

function showLinks() {
    'use strict';
    var inc = 0.01
    bgOpac += inc;
    if (bgOpac > 1) {
        yesDiv.style.opacity = bgOpac;
        noDiv.style.opacity = bgOpac;
        inc = 0;
        clearInterval(opacInt);
        return;
    }
    yesDiv.style.opacity = bgOpac;
    noDiv.style.opacity = bgOpac;
}

//function oldnextLetter() {
//    'use strict';
//    if (substringIndex < length) {
//        substringIndex += 1;
//        var messagePart = messageString.substring(0,substringIndex);
//        if (messagePart.slice(-1) == "."){
//            pausecomp(500);
//        }
//        var morseLength = morseString.indexOf(" ") + 1;
//        if (morseLength < 1){
//            morseLength = 10;
//        }
//        morseString = morseString.substring(morseLength);
//        frankenString = messagePart + morseString;
//        messageDiv.innerHTML = frankenString;
//    }
//}

function nextLetter() {
    'use strict';
    if (morseIndex < mlength) {
        morseIndex += 1;
        if (morseString.charAt(0) == " " || morseString.length < 2){
            substringIndex += 1;
            spaceString = "";
        } else {
            spaceString = spaceString + "_";
        }
        
        var messagePart = messageString.substring(0,substringIndex);
        morseString = constMorse.substring(morseIndex,1000);
        frankenString = messagePart + spaceString + morseString;
        messageDiv.innerHTML = frankenString;
    } else {
        clearInterval(intervalHandle);
        setTimeout(function(){
            bgOpac = 0;
            opacInt = setInterval(showLinks,20);
        }, 1000);
    }
}