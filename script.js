const rockSelected = document.querySelector('#rock');
rockSelected.addEventListener('click', function() {game("rock")}); //y i have 2 do dis?
// because the compiler/listener will just run a function if there is a function call written
// the anonymous function (or an arrow fn) is just defining a function, not calling it



const paperSelected = document.querySelector('#paper');
paperSelected.addEventListener('click', function() {game("paper")});

const scissorsSelected = document.querySelector('#scissors');
scissorsSelected.addEventListener("click", function() {game("scissors")});

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const possiblePlays = [
        'rock',
        'paper',
        'scissors'
    ];
    var randomNumber = Math.floor(Math.random()*3);

    return possiblePlays[randomNumber];
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection == 'rock' && computerSelection == 'scissors')
    || (playerSelection == 'scissors' && computerSelection == 'paper')
    || (playerSelection == 'paper' && computerSelection == 'rock')) {
        return "player";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'scissors' && computerSelection == 'rock')
    || (playerSelection == 'paper' && computerSelection == 'scissors')) {
        return "computer";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'paper')) {
        return "tie";
    }
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    winner = playRound(playerSelection,computerSelection);
    if (winner == "player") {
        playerScore += 1;
    }
    else if (winner == "computer") {
        computerScore += 1;
    }
    
    
    let div = document.createElement("div","results");
    let results = document.querySelector('.results');

    div.textContent = `Player chose ${playerSelection}. Computer chose ${computerSelection}. Player score = ${playerScore}. Computer score = ${computerScore}`;
    results.appendChild(div);

    if (playerScore == 5) {
        div.textContent = ('Winner, winner, chicken dinner! You won!');
        results.appendChild(div);
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == 5) {
        div.textContent = ('Bummer :( You lost!');
        results.appendChild(div);
        playerScore = 0;
        computerScore = 0;
    }
}