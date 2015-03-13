 ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
playToFive();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if ( move === null) {
        getInput();
    }
    else {
    return move;
    }
    
}



// Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     /* Your Expression */

function getComputerMove(move) {
    if ( move === null) {
        randomPlay();
    }
    else {
    return move;
    }
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */


function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player'
    }
    else if ((playerMove === 'paper') && (computerMove === 'rock'))  {
        winner = 'player'
    }
    else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player'
    }
    else if (playerMove === computerMove) {
        winner = 'tie'
    }
    else { winner = 'computer'}
   return winner;
}


/*    
*/

 // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
     
    var computerWins = 0;
    while ((playerWins < 5) || (computerWins < 5)) {
      
     var x = getInput();
        var y = randomPlay();
        
        console.log("Player chose " + getPlayerMove(x) + " while computer chose " + getComputerMove(y));
        
        console.log('Winner is ' + getWinner(x,y));
    
        if (getWinner(x,y) == 'player') {
            playerWins += 1;
        }
        else if (getWinner(x,y) == 'computer') {
             computerWins += 1;
        }
        else {
            computerWins += 0; }

        console.log("Player = " + playerWins + " Computer = " + computerWins + "\n");
        
        console.log([playerWins, computerWins]);
        
         if (playerWins == 5) {
            return 'Player Wins'
        }
        else if (computerWins == 5) {
            return 'Computer Wins'
        }
        else {computerWins += 0;}

    }
    
    
}


function checkForWinner() {
       
}

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

    /* YOUR CODE HERE */

