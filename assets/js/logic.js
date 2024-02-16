var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var feedbackEl = document.getElementById('feedback');

var currentIndex = 0;


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
  feedbackEl.innerText = "";
  var correctAnswer = questions[currentIndex].correctAnswer;

  if (event.target.innerHTML === correctAnswer) {
    feedbackEl.classList.remove("hide");
    var correctAudio = document.getElementById("correct-audio");
    correctAudio.play();
    feedbackEl.innerText = "Correct!"
    score++;
  } else {
    feedbackEl.classList.remove("hide");
    var incorrectAudio = document.getElementById("incorrect-audio");
    incorrectAudio.play();
    feedbackEl.innerText = 'Incorrect!'
    score--;
    timeLeft -= 10;
  }
  console.log(currentIndex);
  if (currentIndex === questions.length - 1) {
    feedbackEl.classList.add("hide");
    endQuiz();
  } else {
    currentIndex++;
    // feedbackEl.classList.add("hide");
    choices.innerHTML = "";
    quizQuestions(currentIndex);
  }
}

function endQuiz() {
  timeLeft = 0;

  questionsDiv.classList.add("hide");
  endScreen.classList.remove("hide");

  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = score;
}

document.getElementById("submit").addEventListener("click", sumbitScore);

function sumbitScore() {
  var initials = document.getElementById("initials").value;

  var finalScore = {
    initials: initials,
    score: score,
  };

  var highscores = JSON.parse(localStorage.getItem("highscores"));
  if (!highscores) {
    var highscores = [];
  }

  highscores.push(finalScore);

  localStorage.setItem("highscores", JSON.stringify(highscores));
  location.href = "././highscores.html";
}
