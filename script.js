function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);
    if (playerSelection === computerSelection) return 'A Draw!';

    let result;
    switch (playerSelection) {
        case 'Rock':
            result = (computerSelection === 'Paper') ? 'You Lose! Paper beats Rock.' : 'You Win! Rock beats Scissors.';
            break;
        case 'Paper':
            result = (computerSelection === 'Rock') ? 'You Win! Paper beats Rock.' : 'You Lose! Scissors beats Paper.';
            break;
        case 'Scissors':
            result = (computerSelection === 'Rock') ? 'You Lose! Rock beats Scissors.' : 'You Win! Scissors beats Paper.';
            break;
    }

    return result;
}

function validatePlayerSelection(selection) {
    if (selection === null) return false;
    selection = selection.toLowerCase();
    if (selection === 'rock' || selection === 'paper' || selection === 'scissors') return true;
    return false;
}

function game() {
    let roundsPlayed = 0;
    let userScore = 0;
    let computerScore = 0;

    while (roundsPlayed != 5) {
        const playerSelection = prompt('Choose rock, paper or scissors:');
        if (!validatePlayerSelection(playerSelection)) {
            alert('Invalid input');
            continue;
        }

        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.includes('Lose')) {
            computerScore++;
        } else if (roundResult.includes('Win')) {
            userScore++;
        }

        roundsPlayed++;
        console.log(`Round ${roundsPlayed} | ${roundResult} Player ${userScore}-${computerScore} Computer`);
    }

    console.log(`Final: Player ${userScore}-${computerScore} Computer`);
}

game();