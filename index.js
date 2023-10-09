var  userChoice="";
let score = JSON.parse(localStorage.getItem('score')) ;
if (score == null) { 
  score={
  wins:0 ,
  losses:0,
  ties:0,
  };   
}
else {
  console.log(score.wins);
}
document.querySelector(".result").innerHTML="Wins : "+String(score.wins)+" , Losses: "+String(score.losses)+" , Ties: "+String(score.ties);
function reset() {
  score.wins=0; 
  score.losses=0;
  score.ties=0;
localStorage.removeItem('score');
document.querySelector(".result").innerHTML="Wins : "+String(score.wins)+" , Losses: "+String(score.losses)+" , Ties: "+String(score.ties);
}
function computerChoice(){
  let randomint = Math.random() ; 
if (randomint<=1/3){
  return'rock';
} 
else if (randomint>1/3 && randomint<=2/3){
  return 'paper';
}
else if (randomint>2/3){
  return 'scissors';
}
}
function playGame(playerMove){
  const computerMove = computerChoice();
  var result ="";

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    } 

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    } 
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  } 
}
localStorage.setItem('score',JSON.stringify(score));
document.querySelector(".result").innerHTML="Wins : "+String(score.wins)+" , Losses: "+String(score.losses)+" , Ties: "+String(score.ties);
document.querySelector(".title2").innerHTML=result;
document.querySelector(".hand").innerHTML=` you<img src="${playerMove}.png" height=30px>    <img src="${computerMove}.png" height=30px>computer`;
}
