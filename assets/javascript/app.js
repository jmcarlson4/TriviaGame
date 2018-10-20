

var seconds;
var temp;

function countdown() {
    seconds = document.getElementById("countdown").innerHTML;
    seconds = parseInt(seconds, 10);
    if (seconds == 1) {
        temp = document.getElementById("countdown");
        temp.innerHTML = "Times Up";
        return;
    }
    seconds--;
    temp = document.getElementById("countdown");
    temp.innerHTML = seconds;
    timeout = setTimeout(countdown, 1000);
}
countdown();

function check() {
    var question1 = document.Quiz.question1.value;
    var question2 = document.Quiz.question2.value;
    var question3 = document.Quiz.question3.value;
    var question4 = document.Quiz.question4.value;
    var count = 0;
    if (question1 == "d") {
        count++;
    }
    if (question2 == "c") {
        count++;
    }
    if (question3 == "b") {
        count++;
    }
    if (question4 == "a") {
        count++;
    }
    alert("You got " + count + " correct");
}