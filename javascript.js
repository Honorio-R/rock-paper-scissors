const computerChoices = ["ROCK", "PAPER", "SCISSORS"]; // three different choices for the computer
let playerInput = prompt("Whats your move?"); // stores the user input in a variable

let playerScore = 0; // stores the player scores
let computerScore = 0; // stores the computer score
	

// function the creates the computers choice
function getComputerChoice(computerChoice){
	// Generate a random index based on the arrays length
	const randomIndex = Math.floor(Math.random() * computerChoice.length);
	// Return the randomly selected word
	return computerChoice[randomIndex];
}

// store computer's answer in a new variable
const computerSelection = getComputerChoice(computerChoices);

// display both selection of player and computer
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);

// function that check the answer and decides the winner
function getPlayerInput(playerInput) {
	const playerSelection = playerInput.toUpperCase(); // converts the player's inputs to Upper case
  if (playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !== "SCISSORS") { // checks if the input is correct
		alert("Please input a relatable answer"); // alerts the user of the wrong input
	} else {
		playRound(playerSelection, computerSelection); // proceeds to another function that compares both the computer and player's answer
	}
}

// start comparing the different variations of both computer and player's answer to show the winner
function playRound(playerSelection, computerSelection){
	while (playerScore <= 3 || computerScore <=3){
		checkPlayerInput(playerScore, computerScore);// calls the checkPlayerInput function 
	}if (playerSelection == "ROCK" && computerSelection == "ROCK"){ // When player input ROCK
				console.log("Computer has the same answer");
				console.log("Round Draw!");
		} else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
				console.log("PAPER beats ROCK");
				console.log("you lose!!");
				computerScore++;
		} else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
				console.log("ROCK beats PAPER");
				console.log("you won!!");
				playerScore++;
		} else if (playerSelection == "PAPER" && computerSelection == "ROCK"){ // When player input PAPER
				console.log("PAPER beats ROCK");
				console.log("you won!!");
				playerScore++;
		} else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
				console.log("Computer has the same answer");
				console.log("Round Draw!");
		} else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
				console.log("SCISSORS beats PAPER");
				console.log("you lose!!");
				computerScore++;
		} else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){ // When player input SCISSORS
				console.log("ROCK beats SCISSORS");
				console.log("you lose!!");
				computerScore++;
		} else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
				console.log("SCISSORS beats PAPER");
				console.log("you won!!");
				playerScore++;
		} else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
				console.log("Computer has the same answer");
				console.log("Round Draw!");
		}
	} 

function game(){
	
}

// calls the checkPlayerInput function 
checkPlayerInput();
