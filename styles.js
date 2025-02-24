// Game choices
const choices = ["rock", "paper", "scissors"];

// Selecting DOM elements
const playerImage = document.querySelector(".player-action img");
const computerImage = document.querySelector(".computer-action img");
const playerScoreEl = document.createElement("h2");
const computerScoreEl = document.createElement("h2");
const countContainer = document.querySelector(".count-container");

// Adding score elements
countContainer.appendChild(computerScoreEl);
countContainer.appendChild(playerScoreEl);

// Initial scores
let playerScore = 0;
let computerScore = 0;

// Function to get computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // Update images based on choices
    playerImage.src = `./Images/${playerChoice}.png`;
    computerImage.src = `./Images/${computerChoice}.png`;

    // Determine the winner
    const result = determineWinner(playerChoice, computerChoice);
    alert(result);

    // Update scores
    playerScoreEl.textContent = `Player: ${playerScore}`;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
}

// Create buttons dynamically
const actionArea = document.querySelector(".actionarea");
const choicesContainer = document.createElement("div");
choicesContainer.classList.add("choices-container");

// Create buttons for each choice
choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.toUpperCase();
    button.classList.add("choice-button");
    button.addEventListener("click", () => playGame(choice));
    choicesContainer.appendChild(button);
});

// Append buttons to action area
actionArea.appendChild(choicesContainer);

// Styling the buttons
const style = document.createElement("style");
style.textContent = `
    .choices-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }
    .choice-button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
        cursor: pointer;
        border: none;
        background-color: #ffcc00;
        border-radius: 10px;
        transition: 0.3s;
    }
    .choice-button:hover {
        background-color: #ff9900;
    }
`;
document.head.appendChild(style);
