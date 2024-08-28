const choicess = ["rock", "paper", "scissors"];
const MAX_CHOICESS = 2;
const ROUNDS = 5;
let humanScore = 0;
let computerScore = 0;
const gameBtns = document.querySelectorAll(".gameBtn");
const scoreRef = document.querySelector("#score");
const computerChoiceRef = document.querySelector("#computerChoice");
const gameMessage = document.querySelector("#gameMessage");

function getComputerChoice() {
    return choicess[Math.round(Math.random() * MAX_CHOICESS)];
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return ["It is a tie", 0];
    }
    if (humanChoice == "rock" && computerChoice == "paper") {
        return [`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`, -1];
    }
    if (humanChoice == "paper" && computerChoice == "scissors") {
        return [`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`, -1];
    }
    if (humanChoice == "scissors" && computerChoice == "rock") {
        return [`You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`, -1];
    }
    return [`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`, 1];
}

function getComputerDiv(choices) {
    const newDiv = document.createElement("div");
    if (choices == "rock") newDiv.textContent = "👊";
    else if (choices == "paper") newDiv.textContent = "📝";
    else newDiv.textContent = "✂";
    return newDiv;
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    let [message, score] = playRound(computerChoice, humanChoice);
    if (score === -1) computerScore++;
    else if (score === 1) humanScore++;
    const divComputer = getComputerDiv(computerChoice);
    computerChoiceRef.innerHTML = '';
    computerChoiceRef.appendChild(divComputer);
    return message;
}

gameBtns.forEach(button => {
    button.addEventListener("click", function() {
        const message = playGame(button.id);
        scoreRef.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;
        gameMessage.textContent = message;
        console.log("da")
    });
});

scoreRef.textContent = `Your score: ${humanScore} - Computer score: ${computerScore}`;
