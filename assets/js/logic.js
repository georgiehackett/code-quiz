var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

// console.log(choices);

timeLeft = 75;

// hide start screen when start button is pressed and start timer

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  questionsDiv.classList.remove("hide");
  quizQuestions()
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

console.log(questions);
console.log(questions[0]);
console.log(questions[0].question);
console.log(questions[0].answers);
console.log(questions.length);

function quizQuestions() {
  var question = questions[0].question;
  questionTitle.textContent = question;

  var answers = questions[0].answers;
  for (i = 0; i < answers.length; i++) {
    var answerBtn = document.createElement('button');
    answerBtn.innerHTML = answers[i];
    choices.appendChild(answerBtn);
  }
}

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


