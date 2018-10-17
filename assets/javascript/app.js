var number = 60;
var intervalId;
var correct = 0;
var incorrect = 0;


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

const doneButton = document.getElementById(results);

const submitButton = document.getElementById(submit);

const quizContainer = document.getElementById(box);

const myQuestions = [
{
    question : "Which band does Richard Sterban play in?",
    answers :{
        a: "Alabama",
        b: "Eagles",
        c: "Beach Boys",
        d: "Oak Ridge Boys"
    },
    correctAnswer: "d"
},
{
    question : "Which female singer made the most duets with Conway Twitty?",
    answers : {
        a: "Tammy Wynette",
        b: "Janie Fricke",
        c: "Loretta Lynn",
        d: "Crystal Gayle"
    },
    correctAnswer : "c"
},
{
    question : "Which band plays the song Gimme One More Chance?",
    answers : {
        a: "Diamond Rio",
        b: "Exile",
        c: "Statler Brothers",
        d: "BlackHawk"
    },
    correctAnswer : "b"
},
{
    question : "Which singer is known as the Man in Black?",
    answers : {
        a: "Johnny Cash",
        b: "George Jones",
        c: "Tom T Hall",
        d: "George Straight"
    },
    correctAnswer : "a"
}
];

function buildQuiz (){
    const output [];
}

myQuestions.forEach(
    (currentQuestion, questionNumber => {
        const answers = [];
        for(letter in currentQuestion.answers){
            answers.push(<label>
                <input type="radio" name="question${questionNumber}"
                value = "${letter}"></input>
                
            </label>)
        }
    })
)
function showResults (){}



buildQuiz ();

submitButton.addEventListener("click", showResults);



