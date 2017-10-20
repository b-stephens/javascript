/*
var timer;

function setDelay() {
    timer = setTimeout(popup, 5000);
};

function popup() {
    alert('Buy some stuff');
};

setDelay();

function cancelPopup() {
    clearTimeout(popup);
}

var annoyingAdd = setInterval(starTrekAd, 3000);
function starTrekAd () {
    alert('star trek ad');
}

function clearAdd() {
    clearInterval(annoyingAdd);
};*/


/*var time = prompt('Enter a time to you want to wait');
function timer() {
    var something
    var setTimer = parseInt(time);
    setTimer = setTimeout(something, 3000);
}*/

/*function promptForTimeout() {
    var interval = prompt('enter a time (in milliseconds) you want to wait');
    var parsedInterval = parseInt(interval);
    if(isNaN(parsedInterval)) {
        return interval;
    } else {
        setTimeout(alertFn, parsedInterval);
    }
    askForInterval();
};

function alertFn() {
    var randomThing = Math.random();
    alert(randomThing);
};

function askForInterval() {
    var rawInterval = alert('How often do you want to hear from me?(in Miliseconds)');
    var parsedInterval = parseInt(rawInterval);
    if(isNaN(parsedInterval)) {
        return rawInterval;
    } else {
        setInterval(intervalAd, parsedInterval);
    }
};

function intervalAd() {
    alert('Advertisement');
};

function killTimeout() {
    clearTimeout(alertFn);
};

function killInterval() {
    clearInterval(intervalAd);
};*/

function logIn() {
    var un = prompt('User name');
    var pw = prompt('password');
    sessionStorage.setItem('user', un);
};
logIn()
