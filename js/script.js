'use strict';
var game;
var q1, q2, q3, q4, q5;
askgame();

function askgame()
{
  game = window.prompt('Would you like to play a game?');
  game = game.toLowerCase();

  // eslint-disable-next-line eqeqeq
  if ( game == 'no' )
  {
    window.prompt('Great to have you on my website');
  }

  // eslint-disable-next-line eqeqeq
  if ( game == 'yes')
  { prompting();
  }
}

function prompting()
{
  q1 = window.prompt('I grew up in Jordan');
  q1 = q1.toLowerCase(); //This answer is no.
  checkAnswer(q1,1);

  q2 = window.prompt('I like to drink tea');
  q2 = q2.toLowerCase(); //This answer is no.
  checkAnswer(q2,2);

  q3 = window.prompt('I am tall');
  q3 = q3.toLowerCase(); //This answer is yes.
  checkAnswer(q3,3);
  
  q4 = window.prompt('I do not like Molokhieh');
  q4 = q4.toLowerCase(); //This answer is yes.
  checkAnswer(q4,4);

  q5 = window.prompt('I love listening to K-POP');
  q5 = q5.toLowerCase(); //This answer is yes.
  checkAnswer(q5,5);

}

function checkAnswer(ans , num) 
{ switch (num)
{
case 1:
  if ( ans === 'no'){
    alert('Correct!! I grew up in Saudi Arabia');}
  else{
    alert('Incorrect!! I did not grow up in Saudi Arabia');
  }
  break;

case 2:
  if ( ans === 'no'){
    alert('Correct!! I like to drink coffee');}
  else{
    alert('Incorrect!! I do not like tea');
  }
  break;

case 3:
  if ( ans === 'no'){
    alert('Incorrect!! I am very tall.');}
  else{
    alert('That is right! i am tall');
  }
  break;


case 4:
  if ( ans === 'no'){
    alert('Incorrect!! Not a dish I like to eat');}
  else{
    alert('That is right!I definetly prefer other options');
  }
  break;


case 5:
  if ( ans === 'no'){
    alert('Incorrect!! I enjoy K-POP a lot.');}
  else{
    alert('That is right! My favorite band is BTS');
  }
  break;



default:
  break;

}

}

//set timer to 20 seconds
//message to start game is shown after 7 seconds

//setTimeout(askgame, 7000);
