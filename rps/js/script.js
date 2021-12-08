function computerPlay () {
    randNum = Math.floor(Math.random()*3) + 1;
    if (randNum === 1){
        return "Rock"
    }
    else if (randNum ===2){
        return "Paper"
    }
    return "Scissors"
}
function rockPaperScissors(playerSelection,computerSelection = computerPlay()) {
    playerLowerCase = playerSelection.toLowerCase();
    computerLowerCase = computerSelection.toLowerCase();

    if (playerLowerCase === computerLowerCase ){
        
        return "draw";
               
    } else if (playerLowerCase === "rock" && computerLowerCase === "scissors") {
        
        return "win";

    } else if (playerLowerCase === "rock" && computerLowerCase === "paper" ){
        
        return "lose";

    } else if (playerLowerCase === "paper" && computerLowerCase === "rock" ){
        
        return "win";

    } else if (playerLowerCase === "paper" && computerLowerCase === "scissors" ){
        
        return "lose";

    }else if (playerLowerCase === "scissors" && computerLowerCase === "rock" ){
        
        return "lose";

    }else if (playerLowerCase === "scissors" && computerLowerCase === "paper" ){
        
        return "win";
    }
}
//let playerSelection = "rock";
//let computerSelection = computerPlay();

//console.log(rockPaperScissors(playerSelection,computerSelection))

function game(playerSelection = "rock"){
    let gameScore = undefined;
    let playerWin = 0;
    let computerWin = 0;
    for (i = 1; i <= 5 ; i++ ) {
        playerSelection = prompt("rock paper or scissors?", )
        gameScore = rockPaperScissors(playerSelection,computerPlay());
        //console.log(gameScore);
        if (gameScore ==="win"){
            playerWin ++
            console.log("you won, you now have " + playerWin + " points")
        } else if (gameScore ==="lose") {
            computerWin ++
            console.log("you lost, the computer now has " + computerWin + " points")
        } else   {
            console.log("a draw!!!!")
        }
    } 
    if (playerWin === computerWin){
        return "its a draw"
    } else if (playerWin) {
        return "you win with " + playerWin + " points"
    }else {
        return "you lost, the computer won with " + computerWin +" points"
    }
}
game()