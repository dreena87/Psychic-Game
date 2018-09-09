
var guessArr = [];  
var wins =0;
var losses =0;
var totalGuesses = 10; 
var computerGuess = ""; 

var displayWins = document.getElementById("wins");
var displayLosses = document.getElementById("losses");
var displayGuesses = document.getElementById("guesses");
var guessSoFar = document.getElementById("guessSoFar");


var charset = "abcdefghijklmnopqrstuvwxyz";
computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));

document.onkeyup = function(event){

    var key = event.key;    
    var bypass;

    
    if(charset.indexOf(key) === -1)  
    {
        bypass=1
        alert("Please select an english character");
    }
    else if(guessArr.indexOf(key) !== -1)    
    {
        bypass=1;
        alert("You have already guessed " + key + ". Please guess another character."); 
    }
    else
    {
        key.toLowerCase();
        guessArr.push(key); 
    }

    

   
    if(!bypass){
        
        if(computerGuess === key ) 
        {
            alert("You did it! The computer's guess was indeed " + computerGuess + ".");
            wins++; 
            totalGuesses=10;    
            computerGuess = guessArr = []; 
            computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));    
        }
        else if (computerGuess !== key && totalGuesses ===1) 
        {
            losses++;
            totalGuesses=10;
            alert("The computer's guess was " + computerGuess + ".");
            computerGuess = guessArr = []; 
            computerGuess += charset.charAt(Math.floor(Math.random() * charset.length));   
        }
        else{   
            totalGuesses--;
        }

        
        displayWins.textContent = "Wins: " + wins;
        displayLosses.textContent = "Losses: " + losses;
        displayGuesses.textContent = "Guesses Left: " + totalGuesses;
        displayGuesses.textContent = "Guesses so far: " + guessArr;
    }
    bypass=0;
};