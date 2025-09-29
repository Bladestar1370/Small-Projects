
//   STOPWATCH PROGRAM


const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {

    if(!isRunning) {      // if stopwatch is not running 
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 30);                //    Syntax of setinterval :-  let intervalID = setInterval(callbackFunction, delay, [arg1, arg2, ...]);     ||   here the ID is timer and callback function is update
        isRunning = true;
    }
}

function stop() {

    if(isRunning) {
        clearInterval(timer);        // unique ID is timer
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");                                     // these use to add padding of 00 in output or it will only be 0
    minutes = String(minutes).padStart(2, "0"); 
    seconds = String(seconds).padStart(2, "0"); 
    milliseconds = String(milliseconds).padStart(2, "0"); 

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}