'use strict';
var game;
var q1, q2, q3, q4, q5;
var names ;



var guess;

//********************************** Function for guessing number****************************
function guessNum(numb)
{
  if (numb === 15)
  { alert('You have guessed my lucky number!! Great Job');
  }

  if (numb < 5)
  {
    alert('Too far, the number you guessed is much smaller than my lucky number. Try again!!');
  }

  if (numb > 20)
  {
    alert('Too far, the number you guessed is much larger than my lucky number. Try again!!');
  }

  if ((numb < 15 ) && (numb > 5))
  {
    alert('Too close, your guess is smaller than my lucky number, try again!');
  }

  if ((numb > 15 ) && (numb < 20))
  {
    alert('Too close, your guess is bigger than my lucky number, try again!');
  }
}
//********************************** END OF FUNCTION****************************



//********************************** Function that asks for the name of user****************************
function naming()
{
  names = prompt('Welcome !! What is your name ?');

}
//********************************** END OF FUNCTION****************************



//********************************** Function for Asking User if they want to play****************************
function askgame()
{
  game = prompt('Would you like to play a game?');
  game = game.toLowerCase();

  // eslint-disable-next-line eqeqeq
  if ( (game == 'no') || (game == 'n'))
  {
    prompt('Great to have you on my website,' + '  ' + names.toUpperCase()); 
  }

  // eslint-disable-next-line eqeqeq
  if ( (game == 'yes') || (game == 'y'))
  { prompting();
  }
}
//********************************** END OF FUNCTION****************************


//********************************** Function for Prompting Questions****************************
function prompting()
{
  q1 = prompt('I grew up in Jordan');
  q1 = q1.toLowerCase(); //This answer is no.
  checkAnswer(q1,1);

  q2 = prompt('I like to drink tea');
  q2 = q2.toLowerCase(); //This answer is no.
  checkAnswer(q2,2);

  q3 = prompt('I am tall');
  q3 = q3.toLowerCase(); //This answer is yes.
  checkAnswer(q3,3);
  
  q4 = prompt('I do not like Molokhieh');
  q4 = q4.toLowerCase(); //This answer is yes.
  checkAnswer(q4,4);

  q5 = prompt('I love listening to K-POP');
  q5 = q5.toLowerCase(); //This answer is yes.
  checkAnswer(q5,5);

  goodbye(names);
}
//********************************** END OF FUNCTION****************************


// Function to check the validy of the rentere response.
function checkAnswer(ans , num) 
{ switch (num)
{
case 1:
  if ( (ans === 'no') || (ans === 'n')){
    alert('Correct!! I grew up in Saudi Arabia');}
  else{
    alert('Incorrect!! I did not grow up in Jordan');
  }
  break;

case 2:
  if ( (ans === 'no') || (ans === 'n')){
    alert('Correct!! I like to drink coffee');}
  else{
    alert('Incorrect!! I do not like tea, I like coffee.');
  }
  break;

case 3:
  if ((ans === 'no') || (ans === 'n')){
    alert('Incorrect!! I am considered tall.');}
  else{
    alert('That is right! I am tall');
  }
  break;


case 4:
  if ( (ans === 'no') || (ans === 'n')){
    alert('Incorrect!! Not a dish I like to eat');}
  else{
    alert('That is right!I definetly prefer other options');
  }
  break;


case 5:
  if ( (ans === 'no') || (ans === 'n')){
    alert('Incorrect!! I enjoy K-POP a lot.');}
  else{
    alert('That is right! My favorite band is BTS');
  }
  break;



default:
  break;
}}
//********************************** END OF FUNCTION****************************


//********************************** Function for Goodbye Message****************************
function goodbye(name1)
{
  prompt('Dont be a stranger,' + '  ' + name1 + '. Visit us again for another About Me quiz!');
}
//********************************** END OF FUNCTION****************************






setTimeout(naming,3000);//Message asking for name is shown after 3 minutes

setTimeout(askgame, 10000);//mMssage to start game is shown after 7 seconds
//asking for the name of the user for the personalized message


