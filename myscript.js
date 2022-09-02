let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
  


function game(numOfRounds) { 
  
    let roundScore = playRound(playerSelection, computerSelection);
      
      if (roundScore !== 0){
        numOfRounds--;
  
      }

      else if (numOfRounds === 0) {
        alert("game over");
      }

    
  }

  let arr = ["Rock", "Paper", "Scissors"];

  
 function computerPlay() { let randomPlay = Math.floor(Math.random() * arr.length);

    let item = arr[randomPlay];

    return item;
 }

const result_div = document.querySelector(".score-board");

const score_view = document.querySelector(".display-score");

const score_view2 = document.querySelector(".display-score2");


  function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerPlay();

    
    if (playerSelection === "rock" && computerSelection === "Scissors") {
      result_div.innerHTML = "rock beats Scissors!! you win!";
      displayScore(1);
      
    
    }

    else if (playerSelection === "rock" && computerSelection === "Rock") {
      result_div.innerHTML = "Rock and rock! its a tie!";
      displayScore(0)
     
      
    }

    else if (playerSelection === "rock" && computerSelection === "Paper") {
      result_div.innerHTML = "you lose! paper beats rock!";
      
      displayScore(2)
    }

    else if (playerSelection === "paper" && computerSelection === "Rock") {
      result_div.innerHTML = " you win! Paper beats rock!";
      
      displayScore(1)
    }

    else if (playerSelection === "paper" && computerSelection === "Paper") {
      result_div.innerHTML = "its a tie! paper and paper!";
  
      displayScore(0)
    }

    else if (playerSelection === "paper" && computerSelection === "Scissors") {
      result_div.innerHTML = "you lose! u got cut by paper!";
      displayScore(2)
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper") {
      result_div.innerHTML = "you win! your scissors cut paper!";
      displayScore(1)
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {
      result_div.innerHTML = " you lose! Rock destroys scissors!";
      displayScore(2)
    }

    else if (playerSelection === "scissors" && computerSelection === "Scissors") {
      result_div.innerHTML = "scissors and scissors! its a tie!";
    } displayScore(0)
    

  }
  

  function displayScore(input) {
    
     
    
    if (input === 1) {
      playerScore++;
      
    }
    

    else if (input === 2) {
      computerScore++
     
    }
    score_view.innerHTML = "computer score is  " +  computerScore;

    score_view2.innerHTML = "player score is  " + playerScore;
    
  }
  


   const rockbtn = document.querySelector('#rock');
   const paperbtn = document.querySelector('#paper');
   const scissorsbtn = document.querySelector('#scissors');



rockbtn.addEventListener('click', function(){playRound("rock"); }); 
paperbtn.addEventListener('click', function(){playRound("paper"); });
scissorsbtn.addEventListener('click', function(){playRound("scissors"); });





 

 