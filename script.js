
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
        } else {
            console.log("Computer wins!");
            computerScore++;
        }
    }

    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

// turns the game into a best of 5
function gameSeries() {
    while (playerScore < 3 && computerScore < 3) {
        game();
    }
    
    if (playerScore >= 3) {
        console.log("Player wins the series!");
    } else {
        console.log("Computer wins the series!");
    }
}

// Button functions
const rBtn = document.querySelector("#rockBtn");

// set the player move to rock and calls the game function
rBtn.addEventListener('click', () => {
    let getPlayerInput = "ROCK";
    console.log(getPlayerInput);
    game(getPlayerInput);
});

// Button functions
const pBtn = document.querySelector("#paperBtn");

// set the player move to paper and calls the game function
pBtn.addEventListener('click', () => {
    let getPlayerInput = "PAPER";
    console.log(getPlayerInput);
    game(getPlayerInput);
});

// Button functions
const sBtn = document.querySelector("#scissorsBtn");

// set the player move to scissors and calls the game function
sBtn.addEventListener('click', () => {
    let getPlayerInput = "SCISSORS";
    console.log(getPlayerInput);
    game(getPlayerInput);
});


// Run the game
//gameSeries();
