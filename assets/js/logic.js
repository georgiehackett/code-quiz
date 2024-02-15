var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");
var questionsDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");

var currentIndex = 0;
// console.log(choices);

timeLeft = 75;

// hide start screen when start button is pressed and start timer

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");
  questionsDiv.classList.remove("hide");
  quizQuestions(currentIndex);
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

// console.log(questions);
// console.log(questions[0]);
// console.log(questions[0].question);
// console.log(questions[0].answers);
// console.log(questions.length);

function quizQuestions(index) {
  var question = questions[index].question;
  questionTitle.textContent = question;

  var answers = questions[index].answers;
  for (i = 0; i < answers.length; i++) {
    var answerBtn = document.createElement('button');
    answerBtn.addEventListener('click', checkAnswer)
    answerBtn.innerHTML = answers[i];

    choices.appendChild(answerBtn);
  }
}
var score = 0;

function checkAnswer() {
  var correctAnswer = questions[currentIndex].correctAnswer;
  // console.log(correctAnswer);
  // console.log(event.target.innerHTML);

  if (event.target.innerHTML === correctAnswer) {
  var correctAudio = document.getElementById('correct-audio');
  correctAudio.play();
  score++
  // console.log(score);
  } else {
    var incorrectAudio = document.getElementById('incorrect-audio');
    incorrectAudio.play();
    score--;
    timeLeft -= 10;
    // console.log(score);
  }
  currentIndex++
  quizQuestions(currentIndex);
}

// !!!!!!!!!!!! empty inner html q title and choices to empty previous choices
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


