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
    if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        return [`You lose! ${choiseToEmoji(computerChoice)} beats ${choiseToEmoji(humanChoice)}`, -1];
    }
    return [`You win! ${choiseToEmoji(humanChoice)} beats ${choiseToEmoji(computerChoice)}`, 1];
}


function choiseToEmoji(textChoise)
{
    if (textChoise == "rock") return "👊"
    if (textChoise == "paper") return "📝"
    return "✂"
}

function getComputerDiv(choices) {
    const newDiv = document.createElement("div");
    newDiv.textContent = "Computer choise: " + choiseToEmoji(choices)
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
