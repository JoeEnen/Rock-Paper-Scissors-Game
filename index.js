const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const decision = document.querySelectorAll(".decision");

let player;
let computer;
let result;

decision.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn() {
    const randNum = Math.flor(Math.random() * 3) + 1;

    switch (andNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if (player == computer){
        return "Draw";
    }
    else if(computer == "Rock"){
        return (player == "PAPER") ? "Player Win!" : "Computer Win!"
    }

    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "Player Win!" : "Computer Win!"
    }

    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "Player Win!" : "Computer Win!"
    }
}