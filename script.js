let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  targetRandom = Math.floor(Math.random()*10);

  return targetRandom;
};

const compareGuesses = (user, computer, secret) => {
  let userValue = Math.abs(target - user);
  let computerValue = Math.abs(target - computer);

  if (userValue < computerValue) {
    return true;
  } else if (userValue < computerValue) {
    return false;
  } else {
    return true;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  } else {
    return 'ERROR!';
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}

// Done, testing and comitting.
// Something wrong
