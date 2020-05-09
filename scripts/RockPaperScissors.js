/*
 Global variables.
*/

const CHOICES = ["Rock", "Paper", "Scissors"];
const DEFAULT_BEST_OF_VALUE = 3;

const settings__bestOfInput = document.querySelector(
    ".settings__best-of-input"
);

const scoreboard__yourScore = document.querySelector(".scoreboard__your-score");
const scoreboard__computerScore = document.querySelector(
    ".scoreboard__computer-score"
);

const choiceMenu__rock = document.querySelector(".choice-menu__rock");
const choiceMenu__paper = document.querySelector(".choice-menu__paper");
const choiceMenu__scissors = document.querySelector(".choice-menu__scissors");

const results__yourPlay = document.querySelector(".results__your-play");
const results__computerPlay = document.querySelector(".results__computer-play");
const results__roundResultMsg = document.querySelector(
    ".results__round-result-msg"
);
const results__gameResult = document.querySelector(".results__game-result");

/* 
 Initialize the page. 
*/
function init() {
    settings__bestOfInput.value = DEFAULT_BEST_OF_VALUE;
    resetGame();
    const btns = document.querySelectorAll(".choice-menu > button");
    btns.forEach((btn) => {
        btn.addEventListener("click", onClick);
    });
    const resetButton = document.querySelector(".settings__restart-btn");
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    scoreboard__yourScore.textContent = "0";
    scoreboard__computerScore.textContent = "0";
    results__yourPlay.textContent = "";
    results__computerPlay.textContent = "";
    results__roundResultMsg.textContent = "";
    enableChoices();
    results__gameResult.textContent = "A new game has started.";
}

function enableChoices() {
    const btns = document.querySelectorAll(".choice-menu > button");
    btns.forEach((btn) => {
        btn.disabled = false;
    });
}

function onClick(e) {
    let playerChoice;
    if (e.target == choiceMenu__rock) {
        playerChoice = CHOICES[0];
    } else if (e.target == choiceMenu__paper) {
        playerChoice = CHOICES[1];
    } else {
        playerChoice = CHOICES[2];
    }
    playRound(playerChoice, computerPlay());
}

function playRound(playerChoice, computerChoice) {
    results__yourPlay.textContent = playerChoice;
    results__computerPlay.textContent = computerChoice;
    if (playerChoice === computerChoice) {
        results__roundResultMsg.textContent = "This round is a draw!";
    } else if (playerChoice === CHOICES[0]) {
        if (computerChoice === CHOICES[1]) {
            results__roundResultMsg.textContent = "Computer wins this round!";
            scoreboard__computerScore.textContent++;
        } else {
            results__roundResultMsg.textContent = "You win this round!";
            scoreboard__yourScore.textContent++;
        }
    } else if (playerChoice === CHOICES[1]) {
        if (computerChoice === CHOICES[2]) {
            results__roundResultMsg.textContent = "Computer wins this round!";
            scoreboard__computerScore.textContent++;
        } else {
            results__roundResultMsg.textContent = "You win this round!";
            scoreboard__yourScore.textContent++;
        }
    } else {
        if (computerChoice === CHOICES[0]) {
            results__roundResultMsg.textContent = "Computer wins this round!";
            scoreboard__computerScore.textContent++;
        } else {
            results__roundResultMsg.textContent = "You win this round!";
            scoreboard__yourScore.textContent++;
        }
    }
    results__gameResult.textContent = "A game is in progress";
    checkForWinner();
}

function computerPlay() {
    return CHOICES[getRandomInt(0, CHOICES.length)];
}

/*
 Gets a random integer in the range [min, max) with uniform distribution.
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function checkForWinner() {
    if (
        +scoreboard__yourScore.textContent +
            +scoreboard__computerScore.textContent ===
        +settings__bestOfInput.value
    ) {
        if (
            +scoreboard__yourScore.textContent >
            +scoreboard__computerScore.textContent
        ) {
            results__gameResult.textContent =
                "Congratulations, you win this game!";
        } else if (
            +scoreboard__yourScore.textContent <
            +scoreboard__computerScore.textContent
        ) {
            results__gameResult.textContent = "Sorry, you lose this game!";
        } else {
            results__gameResult.textContent = "This game is a tie!";
        }
        results__gameResult.textContent +=
            " You must press the new game button to start a new game.";
        disableChoices();
    }
}

function disableChoices() {
    const btns = document.querySelectorAll(".choice-menu > button");
    btns.forEach((btn) => {
        btn.disabled = true;
    });
}

init();
