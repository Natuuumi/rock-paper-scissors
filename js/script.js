function computerPlay() {
  randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    return "Rock";
  } else if (randNum === 2) {
    return "Paper";
  }
  return "Scissors";
}
function rockPaperScissors(
  playerSelection,
  computerSelection = computerPlay()
) {
  playerLowerCase = playerSelection.toLowerCase();
  computerLowerCase = computerSelection.toLowerCase();

  if (playerLowerCase === computerLowerCase) {
    return "draw";
  } else if (playerLowerCase === "rock" && computerLowerCase === "scissors") {
    return "win";
  } else if (playerLowerCase === "rock" && computerLowerCase === "paper") {
    return "lose";
  } else if (playerLowerCase === "paper" && computerLowerCase === "rock") {
    return "win";
  } else if (playerLowerCase === "paper" && computerLowerCase === "scissors") {
    return "lose";
  } else if (playerLowerCase === "scissors" && computerLowerCase === "rock") {
    return "lose";
  } else if (playerLowerCase === "scissors" && computerLowerCase === "paper") {
    return "win";
  }
}
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#displayResults");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

rock.addEventListener("click", function (e) {
  console.log("rock");
  game("rock");
});
paper.addEventListener("click", function (e) {
  console.log("paper");
  game("paper");
});
scissors.addEventListener("click", function (e) {
  console.log("scissors");
  game("scissors");
});

//let playerSelection = "rock";
//let computerSelection = computerPlay();

//console.log(rockPaperScissors(playerSelection,computerSelection))
let playerWin = 0;
let computerWin = 0;
playerScore.textContent = "player score = " + playerWin;
computerScore.textContent = "computer score = " + computerWin;
function game(playerSelection) {
  let gameScore = "";
  playerScore.textContent = "player score = " + playerWin;
  computerScore.textContent = "computer score = " + computerWin;
  let paragraph = document.createElement("p");

  results.append(paragraph);

  gameScore = rockPaperScissors(playerSelection, computerPlay());
  //console.log(gameScore);
  if (gameScore === "win") {
    ++playerWin;
    paragraph.textContent = "you won, you now have " + playerWin + " points";
    playerScore.textContent = "player score = " + playerWin;
  } else if (gameScore === "lose") {
    ++computerWin;
    paragraph.textContent =
      "you lost, the computer now has " + computerWin + " points";

    computerScore.textContent = "computer score = " + computerWin;
  } else {
    paragraph.textContent = "a draw!!!!";
  }
  if (playerWin === 5) {
    paragraph.textContent = "YOU WIN!!!";
    playerWin = 0;
    computerWin = 0;
  } else if (computerWin === 5) {
    paragraph.textContent = "YOU LOOSE";
    playerWin = 0;
    computerWin = 0;
  }
}
