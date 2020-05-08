const CHOICES = [`ROCK`, `PAPER`, `SCISSORS`];

/*
 Gets a random integer in the range [min, max) with uniform distribution.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function computerPlay() {
    return CHOICES[getRandomInt(0, 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection === computerSelection) {
        return `Draw! ${playerSelection} draws with ${computerSelection}`;
    }
    let msg;
    if (playerSelection === `ROCK`) {
        if (computerSelection === `PAPER`) {
            msg = `You lose! PAPER beats ROCK.`;
        } else {
            msg = `You win! ROCK beats SCISSORS`;
        }
    } else if (playerSelection === `PAPER`) {
        if (computerSelection === `SCISSORS`) {
            msg = `You lose! SCISSORS beats PAPER.`;
        } else {
            msg = `You win! PAPER beats ROCK.`;
        }
    } else {
        if (computerSelection === `ROCK`) {
            msg = `You lose! ROCK beats SCISSORS.`;
        } else {
            msg = `You win! SCISSORS beats PAPER.`;
        }
    }
    return msg;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt(`Enter rock/paper/scissors (case insensitive)`);
        let res = playRound(playerSelection, computerPlay());
        let id = res.charAt(4);
        if (id == `w`) {
            playerScore++;
        } else if (id == 'l') {
            computerScore++;
        } else {
            // Its a draw so we need to play an extra round.
            i--;
        }
        console.log(res + "\n");
        let scores = `Score: You - ${playerScore}. Computer - ${computerScore}\n`;
        console.log(scores);
    }
    if (playerScore > computerScore) {
        console.log("You won!\n");
    } else {
        console.log("The computer won!\n");
    }
}
