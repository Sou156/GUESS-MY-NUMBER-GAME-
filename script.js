'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 12;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 56;
// console.log(document.querySelector('.guess').value);



let number = Math.trunc(Math.random()*20)+1

let score= 20;

let highscore=0;
// console.log(number)
// document.querySelector('.number').textContent= number

document.querySelector('.check').addEventListener('click', fn)

function fn(){
 let guess=Number(document.querySelector('.guess').value)
 
  console.log(typeof guess,guess);

if(!guess){
  document.querySelector('.message').textContent='No number!'


  //when player wins 
}else if(guess===number){
  document.querySelector('.message').textContent='Correct number!'

  document.querySelector('body').style.backgroundColor= "#60b347"
  
  document.querySelector('.number').style.width= "30rem"


  document.querySelector('.number').textContent= number


  if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent= highscore
  }

// }else if(guess!=number){
//   document.querySelector('.message').textContent='Wrong number!'
// }

}else if(guess>number){
  document.querySelector('.message').textContent= 'Too High!'
  if(score>1){
    score--

    document.querySelector('.score').textContent = score
  }else{
    document.querySelector('.message').textContent= 'you lost the game !'

    document.querySelector('.score').textContent = 0
  }
 
}else if(guess<number){
  document.querySelector('.message').textContent= 'Too Low!'
if(score>1){
  score--

  document.querySelector('.score').textContent = score
}else{
  document.querySelector('.message').textContent= 'you lost the game !'

  document.querySelector('.score').textContent = 0
}
 
}

}










document.querySelector('.again').addEventListener('click', fun)

function fun(){
  document.querySelector('.guess').value= ""

document.querySelector('body').style.backgroundColor= '#222'



document.querySelector('.number').style.width= '15rem'






document.querySelector('.message').textContent= "Start guessing..."

score=20

document.querySelector('.score').textContent = score



document.querySelector('.number').textContent="?"



 number = Math.trunc(Math.random()*20)+1

}