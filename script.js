// UI variables
const UIpScore = document.querySelector('#player-score');
const UIcScore = document.querySelector('#computer-score');

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

    // function getPlayerInput() {
    //     let playerInput = prompt("What's your move?"); // Capture the player's input
    //     let playerSelection = playerInput ? playerInput.toUpperCase() : null;
    //     return playerSelection;
    // }

    // Get player's input
    const playerSelection = getPlayerInput;

    if (playerSelection) {
        console.log("Player's choice: " + playerSelection);

        const computerSelection = computerMove();
        console.log("Computer's choice: " + computerSelection);

        // Determine the winner
        if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else if (
            (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
            (playerSelection === "PAPER" && computerSelection === "ROCK") ||
            (playerSelection === "SCISSORS" && computerSelection === "PAPER")
        ) {
            console.log("Player wins!");
            playerScore++;
            UIpScore.textContent = playerScore;
        } else {
            console.log("Computer wins!");
            computerScore++;
            UIcScore.textContent = computerScore;
        }
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);   
    gameSeries();
}

// turns the game into a best of 5
function gameSeries() {
    if (playerScore >= 3) {
        alert("Player wins the series!");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 3){
        alert("Computer wins the series!");
        playerScore = 0;
        computerScore = 0;
    } else{
        console.log("Please Select a Move");
    }
}

// player moves button varbiables
const rBtn = document.querySelector("#rockBtn");
const pBtn = document.querySelector("#paperBtn");
const sBtn = document.querySelector("#scissorsBtn");

// set the player move to rock and calls the game function
rBtn.addEventListener('click', () => {
    let getPlayerInput = "ROCK";
    game(getPlayerInput);
});

// set the player move to paper and calls the game function
pBtn.addEventListener('click', () => {
    let getPlayerInput = "PAPER";
    game(getPlayerInput);
});

// set the player move to scissors and calls the game function
sBtn.addEventListener('click', () => {
    let getPlayerInput = "SCISSORS";
    game(getPlayerInput);
});
