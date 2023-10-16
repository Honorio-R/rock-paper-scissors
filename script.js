let playerScore = 0; // stores the player scores
let computerScore = 0; // stores the computer score

function game() {
    function computerMove() {
        const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }

    function getPlayerInput() {
        return prompt("What's your move?"); // Capture the player's input
    }

    // Game flow
    const computerSelection = computerMove();
    console.log("Computer's choice: " + computerSelection);

    const playerSelection = getPlayerInput();
    console.log("Player's choice: " + playerSelection);

    // Determine the winner
    if (playerSelection && computerSelection) {
        if (playerSelection.toUpperCase() === computerSelection) {
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

// Run the game
game();
