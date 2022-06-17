"use strict";

//initial values
let randomNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//keeping code DRY
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    //document.querySelector(".message").textContent = "⛔ no number";
    displayMessage("⛔ no number");
  } else if (guess === randomNo) {
    //document.querySelector(".message").textContent = "🎉 Correct Number";
    displayMessage("🎉 Correct Number");
    document.querySelector(".secretNumber").textContent = randomNo;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //document.querySelector(".highscore").textContent = score;
  } else if (guess !== randomNo) {
    if (score > 1) {
      displayMessage(guess > randomNo ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("💥 You've Lost the Game!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "👍 Start Guessing";
  document.querySelector(".score").textContent = score;
  randomNo = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".secretNumber").textContent = "?";
});
