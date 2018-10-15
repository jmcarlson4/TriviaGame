var number = 60;
var intervalId;
var wins = 0;
var losses = 0;


$("#Start").on("click", run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Times Up!!");
    }

}

function stop() {
    clearInterval(intervalId);
};





