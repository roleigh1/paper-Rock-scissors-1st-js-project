const getuserChoice = userInput => {
  userInput = userInput.toLowerCase(); 
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  return userInput; 
} else {
  console.log('ErroR you have to choose PAPER,ROCK,SCISSORS'); 
 }
}
const getcomputerChoice = () =>{
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0: 
    return 'rock';
    case 1: 
    return 'paper';
    case 2: 
    return 'scissors'; 
  } 
}

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game was a tie!'; 
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
    return  'The user won!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The computer won!'; 
    } else {
      return 'You won!'; 
    }
  }
 if (userChoice === 'scissors'){
   if (computerChoice === 'rock'){
     return 'The computer won!';
   } else {
     return 'You won!'; 
   }
   }
}
const playGame = () => {
  const userChoice = getuserChoice('scissors');
  const computerChoice = getcomputerChoice();
    console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame(); 
