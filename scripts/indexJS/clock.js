let timer;
let seconds = parseInt(sessionStorage.getItem('timer').split(':')[2]);
let minutes = parseInt(sessionStorage.getItem('timer').split(':')[1]);
let hours = parseInt(sessionStorage.getItem('timer').split(':')[0]);

var stop = false;

document.getElementById("clock").textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

let secondsMini = 0;
let minutesMini = 0;
let hoursMini = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
}

function updateTime() {
    if(!stop){
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        document.getElementById("clock").textContent =
            (hours < 10 ? "0" : "") + hours + ":" +
            (minutes < 10 ? "0" : "") + minutes + ":" +
            (seconds < 10 ? "0" : "") + seconds;

        secondsMini++;
        if (secondsMini >= 60) {
            secondsMini = 0;
            minutesMini++;
            if (minutesMini >= 60) {
                minutesMini = 0;
                hoursMini++;
            }
        }
        document.getElementById("clock-mini").textContent = "Question Timer :: " +
            (hoursMini < 10 ? "0" : "") + hoursMini + ":" +
            (minutesMini < 10 ? "0" : "") + minutesMini + ":" +
            (secondsMini < 10 ? "0" : "") + secondsMini;
    }   
}