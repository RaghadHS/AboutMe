'use strict';
var game;
function askgame()
{
  game = window.prompt('Would you like to play a game?');
 
}

//set timer to 20 seconds 
//message to start game is shown after 20 seconds

setTimeout(askgame, 20000);

//continue by starting to prompt 5 yes/no questions
//but before make sure to test if the userwants to play the game by checking the value of yes or no.
var game1 = game.lowercase();


