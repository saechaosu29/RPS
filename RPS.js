let choices = ["rock", "paper", "scissor"];
let player_score = 0;
let computer_score = 0;
let player_points = 0;
let computer_points = 0;

function playerSelection(){
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
          
        });
      });
}

function playRound() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const random = Math.floor(Math.random() * choices.length);
            computer_choice = choices[random];

            if (button.id == "rock"){
                if (computer_choice == "paper"){
                    console.log("You Lose. Paper beats rock.");
                    computer_score = computer_score + 1;
                }
                if (computer_choice == "rock") {
                    console.log("Tie.");
                }

                if (computer_choice == "scissor"){
                    console.log("You Win. Rock beats scissor.");
                    player_score = player_score + 1;
                }
            }

            if (button.id == "paper"){
                if (computer_choice == "paper"){
                    console.log("Tie.");
                }
                if (computer_choice == "rock") {
                    console.log("You Win. Paper beats rock.");
                    player_score = player_score + 1;
                }

                if (computer_choice == "scissor"){
                    console.log("You lose. Scissor beat paper");
                    computer_score = computer_score + 1;
                }
            }

            if (button.id == "scissor"){
                if (computer_choice == "paper"){
                    console.log("You Win. Scissor beats paper.");
                    player_score = player_score + 1;
                }
                if (computer_choice == "rock") {
                    console.log("You lose. Rock beat scissor.");
                    computer_score = computer_score + 1;
                }

                if (computer_choice == "scissor"){
                    console.log("Tie.");
                }
            }

            // Display player's pick
            const playerContent = document.querySelector('#playerPick > h2');
            playerContent.setAttribute("id", button.id);

            // Display computer's pick
            const computerContent = document.querySelector('#computerPick > h2');
            computerContent.setAttribute("id", computer_choice);      
                 
            // Display Score
            const playerScoreContainer = document.querySelector('#playerScore > h2');
            const computerScoreContainer= document.querySelector('#computerScore > h2');
            playerScoreContainer.textContent = player_score;
            computerScoreContainer.textContent = computer_score;
            if (player_score >= 5 || computer_score >= 5) {
                if (player_score > computer_score){
                    console.log("You Won the Game!");
                    player_points = player_points + 1;
                } else {
                    console.log("You Lost the Game!");
                    computer_points = computer_points + 1;
                }

                //Display Points Earned
                const playerPointsContainer = document.querySelector('#playerPoints > h2');
                const computerPointsContainer = document.querySelector('#computerPoints > h2');
                playerPointsContainer.textContent = player_points;
                computerPointsContainer.textContent = computer_points;

                // Reset score after 5 rounds
                player_score = 0;
                computer_score = 0;
            }
        });
    });
}
  
function game(){
    playRound();
}


game();