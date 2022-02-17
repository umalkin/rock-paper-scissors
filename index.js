const choices = ["rock", "paper", "scissors"];

let userChoice = "";
let compScore = 0;
let visitorScore = 0;

function userGuess(guess) {
  if (compScore <= 5 && visitorScore <= 5) {
    let randomChoice = Math.floor(Math.random() * choices.length);
    let computersChoice = choices[randomChoice];

    console.log(
      `Computer's guess is ${computersChoice} while your choice is ${guess}.`
    );
    displayIcons(guess, computersChoice);
    displayStatus(computersChoice, guess);
    if (guess === computersChoice) {
      console.log("tie");
    } else {
      if (guess === "rock") {
        switch (computersChoice) {
          case "paper":
            compScore += 1;
            addScore("c");
            break;
          case "scissors":
            visitorScore += 1;
            addScore("v");
            break;
        }
      } else if (guess === "paper") {
        switch (computersChoice) {
          case "scissors":
            compScore += 1;
            addScore("c");
            break;
          case "rock":
            visitorScore += 1;
            addScore("v");
            break;
        }
      } else {
        switch (computersChoice) {
          case "rock":
            compScore += 1;
            addScore("c");
            break;
          case "paper":
            visitorScore += 1;
            addScore("v");
            break;
        }
      }
    }
  }
}

function displayStatus(randomGuess, userGuess) {
  let targetElement = document.getElementById("status");
  if (randomGuess === userGuess) {
    targetElement.innerHTML = "Tie";
  } else {
    targetElement.innerHTML = `Computer's guess is ${randomGuess} while your choice is ${userGuess}.`;
  }
}

function addScore(whoToAdd) {
  let targetElement = document.getElementById("status");

  if (compScore === 5) {
    addComputerScore();
    targetElement.innerHTML = "You Lose.";
    document.getElementById("sb-comp").style.backgroundColor = "#11a311";
    document.getElementById("sb-visitor").style.backgroundColor = "red";
    hideAndShowButtons();
  } else if (visitorScore === 5) {
    addVisitorScore();
    document.getElementById("sb-comp").style.backgroundColor = "red";
    document.getElementById("sb-visitor").style.backgroundColor = "#11a311";
    targetElement.innerHTML = "You win!";
    hideAndShowButtons();
  } else {
    if (whoToAdd === "v") {
      addVisitorScore();
    } else if (whoToAdd === "c") {
      addComputerScore();
    }
  }
}

function displayIcons(visitor, computer) {
  let objIcons = {
    scissors: "✂️",
    rock: "🪨",
    paper: "📜",
  };

  document.getElementById("visitor-choice").innerHTML = objIcons[visitor];
  document.getElementById("computer-choice").innerHTML = objIcons[computer];
}

function hideAndShowButtons() {
  document.getElementById("buttons").classList.add("disableButtons");
  document.getElementById("play-again").style.visibility = "visible";
}

function addVisitorScore() {
  document.getElementById("visitor-score").innerHTML = visitorScore;
}

function addComputerScore() {
  document.getElementById("comp-score").innerHTML = compScore;
}

function playAgain() {
  visitorScore = 0;
  compScore = 0;
  addVisitorScore();
  addComputerScore();
  document.getElementById("visitor-choice").innerHTML = "❌️";
  document.getElementById("computer-choice").innerHTML = "❌️";
  document.getElementById("status").innerHTML = "Play";
  document.getElementById("buttons").classList.remove("disableButtons");
  document.getElementById("play-again").style.visibility = "hidden";
  document.getElementById("sb-comp").style.backgroundColor = "aliceblue";
  document.getElementById("sb-visitor").style.backgroundColor = "aliceblue";
}
