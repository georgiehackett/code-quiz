window.addEventListener("DOMContentLoaded", displayScores);

  var highscoresEl = document.getElementById("highscores");
  console.log(highscoresEl);

  function displayScores() {
    console.log("howdy");
    var highscores = JSON.parse(localStorage.getItem("highscores"));
    console.log(highscores);

    highscores.forEach((score) => {
      console.log(score);
      var scoreEl = document.createElement("li");
      scoreEl.innerText = `${score.initials}: ${score.score}`;
      highscoresEl.appendChild(scoreEl);
    });

    // displayScores();
  }

