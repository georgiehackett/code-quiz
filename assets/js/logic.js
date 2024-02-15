var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
// console.log(endScreen);
var currentIndex = 0;
// console.log(choices);

timeLeft = 75;

// hide start screen when start button is pressed and start timer

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  questionsDiv.classList.remove("hide");
  countDown();
  quizQuestions(currentIndex);
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
  } else {
    endQuiz();
  }
}

function quizQuestions(index) {
  var question = questions[index].question;
  questionTitle.textContent = question;
  var answers = questions[index].answers;
  for (i = 0; i < answers.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.addEventListener("click", checkAnswer);
    answerBtn.innerHTML = answers[i];

    choices.appendChild(answerBtn);
  }
}

var score = 0;

function checkAnswer() {
  var correctAnswer = questions[currentIndex].correctAnswer;

  if (event.target.innerHTML === correctAnswer) {
    var correctAudio = document.getElementById("correct-audio");
    correctAudio.play();
    score++;
  } else {
    var incorrectAudio = document.getElementById("incorrect-audio");
    incorrectAudio.play();
    score--;
    timeLeft -= 10;
  }
  console.log(currentIndex);
  if (currentIndex === (questions.length - 1)) {
    endQuiz();
  } else {
    currentIndex++;
    choices.innerHTML = "";
    quizQuestions(currentIndex);
  }
}

function endQuiz() {
  timeLeft = 0;

  questionsDiv.classList.add("hide");
  endScreen.classList.remove("hide");
}
