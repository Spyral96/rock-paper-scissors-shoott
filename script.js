
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

humanMove ();


// Computer Input

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerTurn ()
{
    randNum = getRandomInt(1, 3);

    if (randNum = 1)  
    {
        let computerMove = "rock";
        return computerMove;
    }

   else if (randNum =2)
   {
    let computerMove = "paper"
    return computerMove;
   }

   else if (randNum = 3)

   {
    let computerMove = "sissors"
    return computerMove;
   }


}

//Logic In Winning 

function battle(){
    //Human Wins
    if (computerTurn === "rock" && humanMove === "paper")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    else if (computerTurn === "paper" && humanMove === "scissors")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    else if (computerTurn === "scissors" && humanMove === "rock")
    {
        console.log("You Won")
        let playerWon = true;
        return playerWon;
    }

    //Com wins
    else if (computerTurn === "rock" && humanMove === "scissors")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else if (computerTurn === "paper" && humanMove === "rock")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else if (computerTurn === "scissors" && humanMove === "paper")
    {
        console.log("You Lose")
        let playerWon = false;
        return playerWon;
    }

    else {console.log("Tie")
        let tie = true;
        return tie;
    
    }
}




