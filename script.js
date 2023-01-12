game()

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
        return 1;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper')
    || (playerSelection == 'scissors' && computerSelection == 'rock')
    || (playerSelection == 'paper' && computerSelection == 'scissors')) {
        return 0;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'rock')
    || (playerSelection == 'scissors' && computerSelection == 'scissors')
    || (playerSelection == 'paper' && computerSelection == 'paper')) {
        return 0;
    }
}

function game() {
    var playerScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let instructions = "Rock, paper, or scissors?";
        let playerSelection = prompt(instructions,"Pick one! No typos :)");
        let computerSelection = getComputerChoice();
        didPlayerWin = playRound(playerSelection,computerSelection);
        playerScore = playerScore + didPlayerWin;
        console.log(`Player chose ${playerSelection}. Computer chose ${computerSelection}`);
        console.log(playerScore);
        didPlayerWin ? console.log(`You won round ${i+1} !`) : console.log(`You did not win round ${i+1}`);
    }
    if (playerScore >= 3) {
        console.log("You won the whole game!");
    }
    else {
        console.log("You did not win the whole game :(");
    }
}