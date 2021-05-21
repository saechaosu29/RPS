let choices = ["rock", "paper", "scissor"];
let player_score = 0;
let computer_score = 0;

function computerPlay(){
    const random = Math.floor(Math.random() * choices.length);
    random_choice = choices[random];
    return random_choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection=playerSelection.toLowerCase();

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("You Lose. Paper beats rock.");
            computer_score = computer_score + 1;
        }
        if (computerSelection == "rock") {
            console.log("Tie.");
        }

        if (computerSelection == "scissor"){
            console.log("You Win. Rock beats scissor.");
            player_score = player_score + 1;
        }
    }

    if (playerSelection == "paper"){
        if (computerSelection == "paper"){
            console.log("Tie.");
        }
        if (computerSelection == "rock") {
            console.log("You Win. Paper beats rock.");
            player_score = player_score + 1;
        }

        if (computerSelection == "scissor"){
            console.log("You lose. Scissor beat paper");
            computer_score = computer_score + 1;
        }
    }

    if (playerSelection == "scissor"){
        if (computerSelection == "paper"){
            console.log("You Win. Scissor beats paper.");
            player_score = player_score + 1;
        }
        if (computerSelection == "rock") {
            console.log("You lose. Rock beat scissor.");
            computer_score = computer_score + 1;
        }

        if (computerSelection == "scissor"){
            console.log("Tie.");
        }
    }
    console.log(player_score, computer_score);

    return player_score, computer_score;
  }
  
function game(){

    let player_score = 0;
    let computer_score = 0;
    for (let i = 0; i < 5; i++){
        let player_choice = prompt("Enter your choice (rock, paper, scissor");
        let computer_choice = computerPlay();
        player_score, computer_score = playRound(player_choice, computer_choice);
    }

    console.log("Player Score: " + player_score + "\nComputer Score: " + computer_score);
    if (player_score > computer_score){
        console.log("You Won the Game!")
    } else {
        console.log("You Lost the Game!")
    }
}


game();