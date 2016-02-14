var intervalHandle, opacInt, messageDiv, yesDiv, noDiv, bgOpac;

var firstDateMorse = ".... . .-.. .-.. --- / .- --. . -. - / .----. -.- .. -. --. ... .-.. .- -.-- . .-. .----. .-.-.- / .-- --- ..- .-.. -.. / -.-- --- ..- / .-.. .. -.- . / - --- / --. --- / --- ..- - / .- --. .- .. -. ..--.."
var valentinesMorse = ".-..-. .... . .-.. .-.. --- / .- --. . -. - / .----. .-. . --. .. -. .- .-.. -.. .----. .-.-.- / .-- .. .-.. .-.. / -.-- --- ..- / -... . / -- -.-- / ...- .- .-.. . -. - .. -. . ..--.. .-..-."
var firstDateString = "Hello Agent 'Kingslayer'. Would you like to go out again?"
var valentinesString = "Hello Agent 'Reginald'. Will you be my valentine?"

var constMorse;
var morseString;
var messageString;
var frankenString;
var spaceString = "";
var substringIndex = 0;
var morseIndex = 0;
var length;
var mlength;

function initFirstDateMessage(){
    initMessage(0);
}

function initValentinesMessage(){
    initMessage(1);
}

function initMessage(index) {
    'use strict'
    switch (index){
        case 0:
            constMorse = firstDateMorse;
            morseString = firstDateMorse;
            frankenString = firstDateString;
            messageString = firstDateString;
            length = firstDateString.length;
            mlength = firstDateMorse.length;
            break;
        case 1:
            constMorse = valentinesMorse;
            morseString = valentinesMorse;
            frankenString = valentinesString;
            messageString = valentinesString;
            length = firstDateString.length;
            mlength= firstDateMorse.length;
            break;
        default:
            constMorse = firstDateMorse;
            morseString = firstDateMorse;
            frankenString = firstDateString;
            messageString = firstDateString;
            length = firstDateString.length;
            mlength = firstDateMorse.length;
            break;
    }
    length = messageString.length;
    mlength = morseString.length;
    
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