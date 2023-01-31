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
    return DEFAULT_USER_CHOISE;
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

const getWinner = (cChoice, pChoise) => {
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
  const winner = getWinner(computerChoice, playerChoice);
  console.log(
    `Player choice: ${playerChoice}, computer choise: ${computerChoice}, result is ${winner}`
  );
});
