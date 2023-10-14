function getComputerChoice(computerChoice){
	// Generate a random index based on the arrays length
	const randomIndex = Math.floor(Math.random() * computerChoice.length);
console.log(randomIndex);
	// Return the randomly selected word
	return computerChoice[randomIndex];
}

// Example usage:
const computerChoices = ["rock", "paper", "scissors"];
const computerAnswer = getComputerChoice(computerChoices);
console.log("Computer: " + computerAnswer);
