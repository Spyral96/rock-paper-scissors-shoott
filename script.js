
//Ask User For Move /Convert string in lower-case and saviing it as a varaible 


function humanMove () {
let userInput = prompt("Choose Rock,Paper or Scissors");

let lowerCase = userInput.toLowerCase();
    if (lowerCase === "rock" || lowerCase === "paper" || lowerCase === "scissors")
    {
        console.log(`You throw ${lowerCase}!`)
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
        console.log(`Computer Throws ${computerMove}!`)
        return computerMove;
    }

   else if (randNum ===2)
   {
    let computerMove = "paper"
    console.log(`Computer Throws ${computerMove}!`)
    return computerMove;
   }

   else if (randNum === 3)

   {
    let computerMove = "scissors"
    console.log(`Computer throws ${computerMove}!`)
    return computerMove;
   }


}



//Logic In Winning 

function battle(){
    //Human Wins
    let human = humanMove();

    let com = computerTurn();
    
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


//The Flow And (ironically) The Start Of The Game

let roundNum = 1;

console.log("Best Out Of Five");

while (comScore < 3 && humanScore < 3)
{
    console.log("");
    console.log(`Round: ${roundNum}`);
    Score();
    console.log(`Player: ${humanScore} Computer: ${comScore} `)
    roundNum++;

}


if (comScore === 3)
{
    console.log("The Computer Has Beat You")

}

else if (humanScore === 3)
{
    console.log("You Have Beaten The Computer!")
}
        





