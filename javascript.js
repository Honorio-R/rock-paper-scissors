const computerChoices = ["rock", "paper", "scissors"];

//function the creates the computers choice
function getComputerChoice(computerChoice){
	// Generate a random index based on the arrays length
	const randomIndex = Math.floor(Math.random() * computerChoice.length);
console.log(randomIndex);
	// Return the randomly selected word
	return computerChoice[randomIndex];
}

// Example usage:
const computerSelection = getComputerChoice(computerChoices);
console.log("Computer: " + computerSelection);

//function that creates the users choice

