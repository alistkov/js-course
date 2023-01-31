const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOISE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choise! We chose ${DEFAULT_USER_CHOISE} for you!`);
    return;
  }

  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  }
  if (randomValue < 0.67) {
    return PAPER;
  }
  return SCISSORS;
};

const getWinner = (cChoice, pChoise = DEFAULT_USER_CHOISE) => {
  if (cChoice === pChoise) {
    return RESULT_DRAW;
  }
  if (
    (cChoice === ROCK && pChoise === PAPER) ||
    (cChoice === PAPER && pChoise === SCISSORS) ||
    (cChoice === SCISSORS && pChoise === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  }
  return RESULT_COMPUTER_WINS;
};

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    getWinner(computerChoice, playerChoice);
  }
  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOISE
  }, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW) {
    message = `${message} had a draw.`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = `${message} won.`;
  } else {
    message = `${message} lost.`;
  }
  alert(message);
  gameIsRunning = false;
});

// not related to game
const sumUp = (...numbers) => {
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  return sum;
};

const subtractUp = (...numbers) => {
  const sub = numbers.reduce((acc, number) => acc - number, 0);
  return sub;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(subtractUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 5, 10, -3, 6, 10, 25, 88));
