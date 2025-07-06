// Function to get ComputerChoice

function getComputerChoice() {
  debugger;
  const randomNumber = Math.floor(Math.random() * 3);

  return randomNumber === 0
    ? 'rock'
    : randomNumber === 1
    ? 'paper'
    : 'scissors';
}
