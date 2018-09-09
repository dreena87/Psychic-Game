//initialize global vars to game
var guessArr = [];  //guess array
var wins =0;
var losses =0;
var totalGuesses = 10; 
var computerGuess = ""; 

var displayWins = document.getElementById("wins");
var displayLosses = document.getElementById("losses");
var displayGuesses = document.getElementById("guesses");
var guessSoFar = document.getElementById("guessSoFar");

//generate computer guess
var charset = "abcdefghijklmnopqrstuvwxyz";
computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));
//end computer guess

document.onkeyup = function(event){

    var key = event.key;    //capture key pressed by user
    var bypass;

    //error checking block + input conditioning
    if(charset.indexOf(key) === -1)  //is the entry valid?
    {
        bypass=1
        alert("Please select an english character");
    }
    else if(guessArr.indexOf(key) !== -1)    //did the user already guess the entered character?
    {
        bypass=1;
        alert("You have already guessed " + key + ". Please guess another character."); 
    }
    else //user guessed something new that wasn't guessed before
    {
        key.toLowerCase();
        guessArr.push(key); //add user guess to array of used guesses
    }

    //end error checkng block +input conditioning

    //Logic for game
    if(!bypass){
        //did we guess correctly?
        if(computerGuess === key ) //did the user guess it
        {
            alert("You did it! The computer's guess was indeed " + computerGuess + ".");
            wins++; //increment wins counter
            totalGuesses=10;    //reset guess counter
            computerGuess = guessArr = []; //clear arrays
            computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));    //generate new guess
        }
        else if (computerGuess !== key && totalGuesses ===1) //did we fail and run out of guesses
        {
            losses++;
            totalGuesses=10;
            alert("The computer's guess was " + computerGuess + ".");
            computerGuess = guessArr = []; //clear arrays
            computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));    //generate new guess
        }
        else{   //didn't guess but have guesses left
            totalGuesses--;
        }

        //end code logic
        displayWins.textContent = "Wins: " + wins;
        displayLosses.textContent = "Losses: " + losses;
        displayGuesses.textContent = "Guesses Left: " + totalGuesses;
        displayGuesses.textContent = "Guesses so far: " + guessArr;
    }
    bypass=0;
};