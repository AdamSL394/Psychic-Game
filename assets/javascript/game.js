 // Computer needs to choose a letter from the alphabet 
 var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   
 var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];   
 // wins will change if the guess is correct wins++
 var wins = 0;
 // losses will change if guess is incorrect losses++
 var losses =0;
 // guesses left will go down after each guess if incorrec guessesLeft--
 var guessesLeft = 9;
 // computer will loop through computerChoice and select a letter at random
 var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
 // console.log(computerGuess);

 var userLetter = [];
//  var point =  document.getElementById("wins");
//  var down = document.getElementById("losses");
//  var over = document.getElementById("guessesLeft");
//  var numb = document.getElementById("userLetter");


// Reset game function resets game
 function resetGame(){
     userLetter = [];
     guessesLeft =9;
     computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
 }

 // On the document on the release of a key we will run function event which will point to the guessLetter 
 // first thing we will do is look if guessLetter isnt included in userLetter (to exclude duplicates)
 // if its incorrect it will add it to userLetter and descrease guesses left by 1
 // if letters guessed is 0 - if so reset game - which means set guessed to 9 and empty guess aray
 document.onkeypress = function(event){
     
// User guess will be input from document on key up stored in guess letter
var guessLetter = event.key
    
    if (alphabet.includes(guessLetter) && !userLetter.includes(guessLetter)){
        userLetter.push(guessLetter)
        guessesLeft--
        document.getElementById("userLetter").innerHTML=userLetter;
        
        // document.getElementById("guessesLeft").innerHTMl = guessesLeft;
    
        //  if computer guess = guess letter we win and rest game and increase wins by 1 and alert you ahve just won!
        if (computerGuess === guessLetter){
            resetGame();
            wins++
         
        //  point.innerHTML = wins;
         document.getElementById("wins").innerHTML = wins;
         confirm(" You have just won!!")
        }
        //  else if guessesLeft = 0 we increase losses by 1 and reset game and alert you lost !
         else if (guessesLeft === 0){
            userLetter.push(guessLetter)
            resetGame();
            losses++ 
            document.getElementById("losses").innerHTML = losses;
            confirm("You lost!")
        }
        // else guesses are recorded
        else {
    
             document.getElementById("guessesLeft").textContent = guessesLeft;
        }
   
 }
 }