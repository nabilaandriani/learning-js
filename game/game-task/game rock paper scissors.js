const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else{
    console.log('Error!')
  }
}

function getRandomUserChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
    return 'scissors';
    break;
  }
}
function determineWinner(userChoice, computerChoice){
  if (userChoice === 'bomb'){
    return 'You used the secret cheat code... You are the absolute winner!'
  }
  if (userChoice === computerChoice){
    return 'The game is a tie!';
  }else if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won!'
    }else{
      return 'You Won!'
    }
  }else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The computer won!'
    }else{
      return 'You Won!'
    }
  }else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won!'
    }else{
      return 'You Won!'
    }
  }
}

function playGame(){
  const userChoice = getRandomUserChoice(); 
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame()

// console.log(getUserChoice('rock'))
// console.log(getComputerChoice())
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'paper'));
// console.log(determineWinner('paper', 'rock')); 

