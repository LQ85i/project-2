function computerPlay () {
    const options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = computerSelection.toUpperCase()
    if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "You Win! Paper beats Rock";
    } 
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win! Scissors beats Paper";
    }
    else if ((playerSelection == "PAPER" && computerSelection == "PAPER")
    || (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")
    || (playerSelection == "ROCK" && computerSelection == "ROCK")){
        return "It's a tie! You both played the same";
    }
    
}

function game(){
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i<rounds; i++){
        let playerSelection = window.prompt("Write your choice here. [ROCK / PAPER / SCISSORS]","");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        if (result == "You Win! Paper beats Rock"
        || result == "You Win! Rock beats Scissors"
        || result == "You Win! Scissors beats Paper") {
            playerScore++;
        } 
        else if (result == "You Lose! Scissors beats Paper"
        || result == "You Lose! Paper beats Rock"
        || result == "You Lose! Rock beats Scissors") {
            computerScore++;
        }
    }
    if(playerScore > computerScore) {
        console.log("You Win in total points! You had " + playerScore + " points and Computer had " + computerScore + " points.");
    }
    else if(playerScore < computerScore) {
        console.log("You Lose in total points! You had " + playerScore + " points and Computer had " + computerScore + " points.");
    }
    else if(playerScore == computerScore) {
        console.log("You are Tied in total points! You had " + playerScore + " points and Computer had " + computerScore + " points.");
    }
    
}

game();