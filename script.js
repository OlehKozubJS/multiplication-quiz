let taskOutput = document.getElementsByClassName("task-output")[0];
let timeOutput = document.getElementsByClassName("time-output")[0];
let answerOutput = document.getElementsByClassName("answer-output")[0];
let pointsOutput = document.getElementsByClassName("points-output")[0];

let task = "";
let time = 10;
let answer = 0;
let points = 0;
let result = 0;

function taskOut() {
    taskOutput.innerHTML = task;
}

function timeOut() {
    timeOutput.innerHTML = time;
}

function answerOut() {
    answerOutput.innerHTML = answer;
}

function pointsOut() {
    pointsOutput.innerHTML = points; 
}

function randomNumbers(minNumber, maxNumber) {
    return minNumber + Math.floor(Math.random() * (maxNumber + 1 - minNumber));
}

function getTask() {
    answer = 0;
    time = 10;

    number1 = randomNumbers(1, 10);
    number2 = randomNumbers(1, 10);

    result = number1 * number2;
    task = number1 + " * " + number2;

    taskOut();
    timeOut();
}

function setNumber(digit) {
    if (answer < 100) answer = answer * 10 + digit;
    answerOut();
}

function cancel() {
    answer = Math.floor(answer / 10);
    answerOut();
}

function enter() {
    if (result == answer) ++points;
    else --points;
    pointsOut();
    getTask();
}

setInterval(timer, 1000);

function timer() {
    if (time > 0) --time;
    timeOut();

    if (time == 0) enter();
}