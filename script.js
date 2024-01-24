
//Create UI cuz ofc (DOM)

//buttons (rock,paper,scis selectors)

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors')


let battleResult = document.querySelector('.actionResults')
let humanAction = document.querySelector('#humanMove')
let humanActionText = document.querySelector('#humanMoveText')


//global Var
let humanScoreCounter = 0;
let computerScoreCounter = 0;

rockButton.addEventListener('click', function() {
    
    let humanMove = "rock"; 
    
    //display Move Pic
    humanAction.src = "imgs/rock.png";
    humanAction.alt = "rock-img";
    humanActionText.textContent = "You Threw Rock";


    console.log(humanMove);
    let comMove = computerTurn();
    console.log(comMove);

    playerWon = battle(comMove,humanMove);

    if (playerWon === 1)
    {
        battleResult.textContent = "You Win"
        humanScoreCounter ++;
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
        computerScoreCounter ++;
    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}

    checkEndGame();

    
    
});

paperButton.addEventListener('click',function()
{
    let humanMove = "paper";
    humanAction.src = "imgs/paper.png";
    humanAction.alt = "paper-img"
    humanActionText.textContent = "You Threw Paper";

    console.log(humanMove);
    let comMove = computerTurn();
    console.log(comMove);

    playerWon = battle(comMove,humanMove);

    if (playerWon === 1)
    {
        battleResult.textContent = "You Win"
        humanScoreCounter ++;
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
        computerScoreCounter ++;

    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}

    console.log(computerScoreCounter);
    console.log(humanScoreCounter);

    checkEndGame();

});

scissorsButton.addEventListener('click',function()
{
    let humanMove = "scissors";
    humanAction.src = "imgs/scissors.png";
    humanAction.alt = "scissors-img";
    humanActionText.textContent = "You Threw Scissors";

    console.log(humanMove);
    let comMove = computerTurn();
    console.log(comMove);

    playerWon = battle(comMove,humanMove);

    if (playerWon === 1)
    {
        battleResult.textContent = "You Win"
        humanScoreCounter ++;
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
        computerScoreCounter ++;
    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}

    checkEndGame();

})


//Score Keeper (To End Match once someone gets 3 win(best out of 5))
endScreen = document.querySelector(".endScreen");
endScreenContainer= document.querySelector(".endScreenContainer");
let playAgainButton =  document.createElement('button');
playAgainButton.id = "playAgainButton";

function checkEndGame ()
{
    if (humanScoreCounter === 3)
        {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

            endScreen.textContent = "You Beat The Computer!!!"
            playAgainButton.textContent = "Play Again?";

            endScreenContainer.appendChild(playAgainButton);
        }

    else if (computerScoreCounter === 3)
        {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

            endScreen.textContent = "You Lost To The Computer";
            
            playAgainButton.textContent = "Play Again?";
            endScreenContainer.appendChild(playAgainButton);
        }
}

playAgainButton.addEventListener("click", function()
{
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    humanScoreCounter = 0;
    computerScoreCounter = 0;
    endScreen.textContent = "";
    playAgainButton.remove();
})


   


    
    
    
    
    // Computer Input
    
    comAction = document.querySelector('#comMove');
    comActionText = document.querySelector("#comMoveText");
    //RandomNum generator to allow computer to make move out "3" choices/moves
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    function computerTurn ()
    {   
        let randNum = getRandomInt(1, 4);
    
        if (randNum === 1)  
        {
            let computerMove = "rock";
            comAction.src = "imgs/rock.png";
            comAction.alt = "rock-img";
            comActionText.textContent = "Computer Threw Rock";

            return computerMove;
        }
    
       else if (randNum === 2)
       {
        let computerMove = "paper"
        comAction.src = "imgs/paper.png";
        comAction.alt = "paper-img";
        comActionText.textContent = "Computer Threw paper";
        return computerMove;
       }
    
       else if (randNum === 3)
    
       {
        let computerMove = "scissors"
        comAction.src = "imgs/scissors.png";
        comAction.alt = "scissors-img";
        comActionText.textContent = "Computer Threw Scissors"
        return computerMove;
       }
    
    
    }
    

    //Logic In Winning 
    let playerWon;
    let tie;
    function battle(computerTurn, humanMove){
        //Human Wins
        
        if (computerTurn === "rock" && humanMove === "paper")
        {
            console.log("You Won")
            let playerWon = 1;
            return playerWon;
        }
    
        else if (computerTurn === "paper" && humanMove === "scissors")
        {
            console.log("You Won")
            let playerWon = 1;
            return playerWon;
        }
    
        else if (computerTurn === "scissors" && humanMove === "rock")
        {
            console.log("You Won")
            let playerWon = 1;
            return playerWon;
        }
    
        //Com wins
        else if (computerTurn === "rock" && humanMove === "scissors")
        {
            console.log("You Lose")
            let playerWon = 2;
            return playerWon;
        }
    
        else if (computerTurn === "paper" && humanMove === "rock")
        {
            console.log("You Lose")
            let playerWon = 2;
            return playerWon;
        }
    
        else if (computerTurn === "scissors" && humanMove === "paper")
        {
            console.log("You Lose")
            let playerWon = 2;
            return playerWon;
        }
    
        else {
            let playerWon = 3;
            return playerWon;  
            
        }
    }

  

    