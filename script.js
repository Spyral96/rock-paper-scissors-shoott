
//Ask User For Move /Convert string in lower-case and saviing it as a varaible 
function humanMove () {
let userInput = prompt("Choose Rock,Paper or Scissors");

let lowerCase = userInput.toLowerCase();
    if (lowerCase === "rock" || lowerCase === "paper" || lowerCase === "scissors")
    {
        return lowerCase;
    }
    else {
        console.log("That is not a move");
        humanMove ();
    }
}




// Computer Input

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerTurn ()
{
    randNum = getRandomInt(1, 4);

    if (randNum === 1)  
    {
        let computerMove = "rock";
        return computerMove;
    }

   else if (randNum ===2)
   {
    let computerMove = "paper"
    return computerMove;
   }

   else if (randNum === 3)

   {
    let computerMove = "scissors"
    return computerMove;
   }


}



//Logic In Winning 

function battle(){
    //Human Wins
    let com = computerTurn();
    let human = humanMove();

    if (com === "rock" && human === "paper")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    else if (com === "paper" && human === "scissors")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    else if (com === "scissors" && human === "rock")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    //Com wins
    else if (com === "rock" && human === "scissors")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else if (com === "paper" && human === "rock")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else if (com === "scissors" && human === "paper")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else {console.log("Tie")
        let tie = 3;
        return tie;
    
    }
}



// Keep Track Of The score

let comScore = 0;
let humanScore = 0;

function Score ()
{
    let playerWin = battle();
    if (playerWin ===  false )
    {
        comScore++;
         
    }

    else if (playerWin === true)
    {
        humanScore++;
        
    } 

    else 
    {
        return
    }

    
    

}



Score();
console.log(comScore + " " + humanScore);


Score()
console.log(comScore + " " + humanScore);

        





