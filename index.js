//function to get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    //convert playerSelection to lowercase for case-insensitivity
    const playerChoice = playerSelection.toLowerCase();

    //check for tie
    if (playerChoice === computerSelection.toLowerCase()) {
        return "Its a tie! Both chose " + playerSelection;
    }

    // check the possible win scenarios for the player
    if (
    (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
    (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
    (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper') 
    )  {
    return "You win! " + playerSelection + " beats " + computerSelection;
    }

    //If none of the above conditions match, then the player loses
    return "You Lose! " + computerSelection + " Beats " + playerSelection
}

//function to play 5-round of game and keep score
function game() {
    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);


       //update score
       if (result.startsWith("You Win!")) {
        playerScore++;
       }  else if (result.startsWith("You Lose!")) {
        computerScore++;
       }
    }  

    //report the winner or loser at  the end of the game
    if (playerScore > computerScore) {
        console.log("congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("sorry, You lose the game. Better luck next time!");
    } else {
        console.log(("Its a tie! The game ended in a draw."));
    }    
}

//start the game
game();






















