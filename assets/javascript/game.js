// HTML pseudo...
// Title of game.
// Ask user to pick a letter.
// Display wins, loss, ties, guesses left and what the user has guessed so far.

// JS pseudo...
// Computer asks user to guess a letter.
// Computer compares user guess with computer guess.
// computer displays either win or loss then add to appropriate counter
// computer displays total guesses and guesses left

// Array of all possible computer choices (any letter of the alphabet).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create variables to hold number of wins, losses, and ties.
var wins = 0;
var losses = 0;
var numGuessleft = 9;
var guessSofar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeft = document.getElementById("guesses-left");
var guessSofar = document.getElementById("guesses-so-far");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
console.log(event.key);
// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
if ((userGuess === computerGuess)) {
    wins++;
}

if ((userGuess !== computerGuess)) {
    numGuessleft --;
    console.log(numGuessleft);
}


if ((numGuessleft === 0)) {
    losses++;
}





// Hide the directions
// directionsText.textContent = "";

// Display the user and computer guesses, and wins/losses/guesses so far.
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessLeft.textContent = "guesses left: " + numGuessleft;
guessSofar.textContent = "You chose: " + userGuess;

}
