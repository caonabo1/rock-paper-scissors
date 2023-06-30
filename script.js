function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
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


function game(event) {
    const computerSelection = getComputerChoice();
    const playerSelection = event.target.textContent;
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes('Lose')) {
        computerScore++;
    } else if (roundResult.includes('Win')) {
            userScore++;
    }

    resultsOutput.textContent = `${roundResult} Player ${userScore}-${computerScore} Computer`;
    if (userScore == 5 || computerScore == 5) {
        const final = `Final: Player ${userScore}-${computerScore} Computer`;
        resultsOutput.innerHTML = resultsOutput.textContent + '<br>' + final;
        userScore = 0;
        computerScore = 0;
    }
}

const buttons = [];
for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    buttons.push(button);
}

buttons[0].textContent = 'Rock';
buttons[1].textContent = 'Paper';
buttons[2].textContent = 'Scissors';

buttons.forEach((button) => {
    document.body.insertBefore(button, document.body.lastElementChild);
});

document.body.addEventListener('click', game);
let userScore = 0;
let computerScore = 0;
const resultsOutput = document.createElement('div');
document.body.insertBefore(resultsOutput, document.body.lastElementChild);