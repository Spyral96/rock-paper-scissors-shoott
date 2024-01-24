
//Create UI cuz ofc (DOM)

//buttons (rock,paper,scis selectors)

let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors')


let battleResult = document.querySelector('.actionResults')
let humanAction = document.querySelector('#humanMove')
let humanActionText = document.querySelector('#humanMoveText')


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
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}

    
    
});

paperButton.addEventListener('click',function()
{
    let humanMove = "paper";
    humanAction.src = "imgs/paper.png";
    humanAction.alt = "paper-img"
    console.log(humanMove);
    let comMove = computerTurn();
    console.log(comMove);

    playerWon = battle(comMove,humanMove);

    if (playerWon === 1)
    {
        battleResult.textContent = "You Win"
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}

    

});

scissorsButton.addEventListener('click',function()
{
    let humanMove = "scissors";
    humanAction.src = "imgs/scissors.png";
    humanAction.alt = "scissors-img";
    console.log(humanMove);
    let comMove = computerTurn();
    console.log(comMove);

    playerWon = battle(comMove,humanMove);

    if (playerWon === 1)
    {
        battleResult.textContent = "You Win"
    }

    else if (playerWon === 2)
    {
        battleResult.textContent = "You Lose"
    }


    else if (playerWon === 3) {battleResult.textContent ="Tie"}


})





   


    
    
    
    
    // Computer Input
    
    comAction = document.querySelector('#comMove');

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
            return computerMove;
        }
    
       else if (randNum === 2)
       {
        let computerMove = "paper"
        comAction.src = "imgs/paper.png";
            comAction.alt = "paper-img";
        return computerMove;
       }
    
       else if (randNum === 3)
    
       {
        let computerMove = "scissors"
        comAction.src = "imgs/scissors.png";
        comAction.alt = "scissors-img";
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

  

    