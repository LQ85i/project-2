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

function game(button){
    const div = document.createElement('div');
    div.className = 'result';
    document.querySelector('.results').prepend(div);
    const result = playRound(button.id, computerPlay());
    div.textContent = result;
    div.style.backgroundColor = '#ededed';
    div.style.width = '300px';
    div.style.textAlign = 'center';
    div.style.borderRadius = '3px';
    const playerScore = document.querySelector('.player .score');
    const computerScore = document.querySelector('.computer .score');
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    if(result.includes("Win")){
        div.style.backgroundColor = '#70db56';
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
    else if(result.includes("Lose")){
        div.style.backgroundColor = '#d6515c';
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    const playerScoreInt = parseInt(playerScore.textContent);
    const computerScoreInt = parseInt(computerScore.textContent);
    if(playerScoreInt > computerScoreInt){
        player.style.backgroundColor = '#70db56';
        computer.style.backgroundColor = '#ededed';
    }
    else if(playerScoreInt < computerScoreInt){
        player.style.backgroundColor = '#ededed';
        computer.style.backgroundColor = '#d6515c';
    }
    else {
        player.style.backgroundColor = '#ededed';
        computer.style.backgroundColor = '#ededed';
    }
    if(playerScoreInt == 5){
        document.querySelector('.counter .title').textContent = 'Player Wins!';
        const playButtons = document.querySelector('.buttons .left');
        playButtons.className = 'left-inactive';
    }
    else if(computerScoreInt == 5){
        document.querySelector('.counter .title').textContent = 'Computer Wins!';
        const playButtons = document.querySelector('.buttons .left');
        playButtons.className = 'left-inactive';
    }
}

function reset(){
    const results = document.querySelectorAll('.results .result');
    results.forEach(e => e.remove());
    const player = document.querySelector('.player');
    const computer = document.querySelector('.computer');
    const playerScore = document.querySelector('.player .score');
    const computerScore = document.querySelector('.computer .score');
    playerScore.textContent = 0
    computerScore.textContent = 0
    player.style.backgroundColor = '#ededed';
    computer.style.backgroundColor = '#ededed';
    document.querySelector('.counter .title').textContent = 'Total Points:';

    const playButtons = document.querySelectorAll('.buttons .left-inactive');
    playButtons.forEach(e => e.className = 'left');
}

const playButtons = document.querySelectorAll('.play');

playButtons.forEach((button) => {
    button.addEventListener('click', () => game(button));
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => reset());

