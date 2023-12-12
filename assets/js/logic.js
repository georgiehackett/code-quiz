var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

timeLeft = 75;

// hide start screen when start button is pressed and start timer

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  questionsDiv.classList.remove("hide");

  countDown();
}

// updates timer with time left

function setTime() {
  timer.textContent = "Time: " + timeLeft;
}

function countDown() {
  setInterval(timerDecrease, 1000);
}

function timerDecrease() {
  if (timeLeft > 0) {
    timeLeft--;
    setTime();
  }
};

// Questions contain buttons for each answer.

// for

// console.log(questions[0].answers);

// for (i = 0; i < questions[i].answers.length; i++) {
//     questionTitle = questions[i].question;
//     choices = questions[i].answers;
//     var answerButton = document.createElement("button");
//     answerButton = choices[i];
//     choices[i].appendChild(answerButton);
// }

// console.log(questionTitle);
// console.log(choices);


