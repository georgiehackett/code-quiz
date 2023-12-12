var timer = document.querySelector(".timer");
var startButton = document.getElementById("start");

timeLeft = 75;

// hide start screen when start button is pressed and start timer

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("hello");
  var startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");

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
}
