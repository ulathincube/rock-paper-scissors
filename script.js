// Define global scores of User and Computer

let humanScore = 0;
let computerScore = 0;

// Function to get ComputerChoice

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  return randomNumber === 0
    ? 'rock'
    : randomNumber === 1
    ? 'paper'
    : 'scissors';
}

// Function to get HumanChoice

function getHumanChoice() {
  const result = prompt('Please provide your answer (Rock, Paper or Scissors');

  return result;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// Function to play a Round
// (" rock > scissors, scissors > paper, paper > rock ")
function playRound(humanChoice, computerChoice) {
  const playerWins =
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper');

  const computerWins =
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper');

  // const tie = humanChoice === computerChoice;

  if (playerWins) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (computerWins) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(`It's a tie. You both picked ${humanChoice || computerChoice}`);
  }
}

playRound(humanChoice, computerChoice);
