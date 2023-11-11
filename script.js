// UI variables
const UIpScore = document.querySelector('#player-score');
const UIcScore = document.querySelector('#computer-score');
const playerDisplay = document.querySelector('#player-display');
const computerDisplay = document.querySelector('#computer-display');
const gameAnnouncement = document.querySelector('#game-announcement');

// player moves button varbiables
const rBtn = document.querySelector('#rockBtn');
const pBtn = document.querySelector('#paperBtn');
const sBtn = document.querySelector('#scissorsBtn');
const rstBtn = document.querySelector('#resetBtn');

// Game global variables
let playerScore = 0; // stores the player scores
let computerScore = 0; // stores the computer score
let getPlayerInput = ""; // public storage for functions to access

function game(getPlayerInput) {
    function computerMove() {
        const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }

    // Get player's input
    const playerSelection = getPlayerInput;

    if (playerSelection) {
        console.log("Player's choice: " + playerSelection);

        const computerSelection = computerMove();
        console.log("Computer's choice: " + computerSelection);

        // Determine the winner
        if (playerSelection === computerSelection) {
            computerUpdate(computerSelection);
            gameAnnouncement.textContent = "IT'S A TIE!";
        } else if (
            (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSORS" && computerSelection === "PAPER")
        ) {
            computerUpdate(computerSelection);
            gameAnnouncement.textContent = playerSelection + " BEATS " + computerSelection;
            playerScore++;
            UpdateScore();
        } else {
            computerUpdate(computerSelection);
            gameAnnouncement.textContent = computerSelection + " BEATS " + playerSelection;
            computerScore++;   
            UpdateScore();      
        }
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);   
    gameSeries();
}

// Change computer dislay UI
function computerUpdate(computerSelection){
    if(computerSelection === "ROCK"){
        computerDisplay.textContent = '⛰️';
    } else if (computerSelection === "PAPER") {
        computerDisplay.textContent = '📜️';
    } else{
        computerDisplay.textContent = '✂️';
    }
}

// Updates the UI score
function UpdateScore(){
    UIcScore.textContent = computerScore;
    UIpScore.textContent = playerScore;
}

// turns the game into a best of 5
function gameSeries() {
    if (playerScore >= 3) {
        playerScore = 0;
        computerScore = 0;
        UpdateScore();
    } else if (computerScore >= 3){
        playerScore = 0;
        computerScore = 0;
        UpdateScore();
    } else{
        console.log("Please Select a Move");
    }
}
// reset the game
rstBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    computerDisplay.textContent = '❔';
    playerDisplay.textContent = '❔';
    gameAnnouncement.textContent = 'Please Select a Move';
    UpdateScore();
});

// set the player move to rock and calls the game function
rBtn.addEventListener('click', () => {
    let getPlayerInput = "ROCK";
    playerDisplay.textContent = '⛰️';
    game(getPlayerInput);
});

// set the player move to paper and calls the game function
pBtn.addEventListener('click', () => {
    let getPlayerInput = "PAPER";
    playerDisplay.textContent = '📜️';
    game(getPlayerInput);
});

// set the player move to scissors and calls the game function
sBtn.addEventListener('click', () => {
    let getPlayerInput = "SCISSORS";
    playerDisplay.textContent = '✂️';
    game(getPlayerInput);
});
