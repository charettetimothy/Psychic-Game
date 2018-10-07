// HTML pseudo...
// Title of game.
// Text asking user to pick a letter.
// Display wins, losses, guesses left and what the user has guessed so far.

// JS pseudo...
// Array of computer choices to randomly choose from.
// Computer compares user guess with randomly chosen letter.
// Computer decides if correct or not. If correct add to the wins counter.
// If incorrect display user choice and subtract one from a total of 9 guesses.
// If gueesses left reaches 0 reset guesses left and user choices.

// Array of all possible computer choices (any letter of the alphabet).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

// Create variables to hold number of wins, losses, guesses left and guesses so far.
var wins = 0;
var losses = 0;
var numGuessleft = 9;
var guessSofar = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessLeft = document.getElementById("guesses-left");
var guessSofarText = document.getElementById("guesses-so-far");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Create a function that resets numGuessleft and guessSofar.
    // Function will reset numGuessleft and guessSoFar to their initial state. 
    // Function will be invoked when numGuessLeft = 0;
    function resetGame() {
        numGuessleft = 9;
        guessSofar = [];
    }

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // if (userGuess != NaN) {
    //     alert("i said a letter");
    // } else if (userGuess === NaN) {
    //     playGame();
    // }

    if ((userGuess === computerGuess)) {
        wins++;
    }

    if ((userGuess === computerGuess)) {
        resetGame();
    }

    if ((userGuess !== computerGuess)) {
        numGuessleft--;
        guessSofar.push(userGuess);
        console.log(guessSofar);
    }

    if ((numGuessleft === 0)) {
        losses++;
        resetGame();
    }


    // Hide the directions
    directionsText.textContent = "";

    // Display the wins, losses, numGuessleft and guessSofar to the display.
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessLeft.textContent = "guesses left: " + numGuessleft;
    guessSofarText.textContent = "You chose: " + guessSofar.join(', ');

}