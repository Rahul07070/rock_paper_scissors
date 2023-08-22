// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

//function to randomly choose computer's move
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {  
        return "Its a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') 
    )  {
        playerScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "You lose this round!";
    }
}

//Function to update player and computer scores
function updateScores(){
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// Funtion to announce the winner of the game 
function announceWinner() {
    if (playerScore === 5) {
        document.getElementById('game-result').textContent = "Congratulations! You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('game-result').textContent = "Sorry! Computer wins the game.";
        disableButtons();
    }
}

// Funtion to disable buttons and remove event listeners 
function disableButtons(){
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
        button.disabled = true;
    });
} 

//Function to handle button clicks
function handleButtonClick(e) {
    const playerSelection = e.target.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);

    document.getElementById('round-result').textContent = roundResult;
    updateScores();
    announceWinner();
}

//Add event listeners to buttons
const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});





    
























