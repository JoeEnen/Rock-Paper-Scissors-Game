let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("playerChoice");
const computerChoiceDisplay = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");
const computerScoreD = document.getElementById("computerScoreD");
const playerScoreD = document.getElementById("playerScoreD");

function playGame(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    
    if (playerChoice === computerChoice) {
        result = "Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "Player Wins!";
        playerScore++;
    } else {
        result = "Computer Wins!";
        computerScore++;
    }

    playerChoiceDisplay.textContent = getSymbol(playerChoice);
    computerChoiceDisplay.textContent = getSymbol(computerChoice);
    resultText.textContent = result;
    playerScoreD.textContent = playerScore;
    computerScoreD.textContent = computerScore;

    resultText.classList.remove("greenText", "redText");
    if (result === "Player Wins!") {
        resultText.classList.add("greenText");
    } else if (result === "Computer Wins!") {
        resultText.classList.add("redText");
    }
}

function getSymbol(choice) {
    switch (choice) {
        case "rock": return "✊";
        case "paper": return "✋";
        case "scissors": return "✌️";
    }
}
