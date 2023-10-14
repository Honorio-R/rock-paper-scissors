const computerChoices = ["rock", "paper", "scissors"];
let playerInput = prompt("Whats your move?"); // stores the user input in a variable
const lowerCaseInput = playerInput.toLowerCase(); // converts the player's inputs to lower case

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
console.log("Player: " + lowerCaseInput);

// function that check the answer and decides the winner
function getPlayerChoice() {
  let inputCheck = lowerCaseInput;
  if (inputCheck !== "rock" && inputCheck !== "paper" && inputCheck !== "scissors") { // checks if the input is correct
		alert("Please input a relatable answer"); // alerts the user of the wrong input
	} else {
		getResult(inputCheck); // proceeds to another function that compares both the computer and player's answer
	}
}

// start comparing the different variations of both computer and player's answer to show the winner
function getResult(inputCheck){
	if (inputCheck == "rock" && computerSelection == "rock"){ // When player input rock
			console.log("Computer has the same answer")
			console.log("Round Draw!")
	} else if (inputCheck == "rock" && computerSelection == "paper"){
			console.log("Paper beats Rock")
			console.log("you lose!!")
	} else if (inputCheck == "rock" && computerSelection == "scissors"){
			console.log("Rocks beats Paper")
			console.log("you won!!")
	} else if (inputCheck == "paper" && computerSelection == "rock"){ // When player input paper
			console.log("Paper beats Rock")
			console.log("you won!!")
	} else if (inputCheck == "paper" && computerSelection == "paper"){
			console.log("Computer has the same answer")
			console.log("Round Draw!")
	} else if (inputCheck == "paper" && computerSelection == "scissors"){
			console.log("Scissors beats Paper")
			console.log("you lose!!")
	} else if (inputCheck == "scissors" && computerSelection == "rock"){ // When player input scissors
			console.log("Rock beats Scissors")
			console.log("you lose!!")
	} else if (inputCheck == "scissors" && computerSelection == "paper"){
			console.log("Scissors beats Paper")
			console.log("you won!!")
	} else if (inputCheck == "scissors" && computerSelection == "scissors"){
			console.log("Computer has the same answer")
			console.log("Round Draw!")
	}
} 
getPlayerChoice();