
let computerMove = null;
let result = null;
        
    function updateElements(){
        document.querySelector('.js-score').innerHTML =`wins:${score.wins} Loses:${score.loses} Ties:${score.ties}.`;
    }

const score = JSON.parse(localStorage.getItem('score')) || 
    {
        wins:0,
        loses:0,
        ties:0
    }
    let playerMove = null;
    document.querySelector('.js-score').innerHTML =`wins:${score.wins} Loses:${score.loses} Ties:${score.ties}.`;
function computerTurn(playerMove){
    const randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber <=1/3){
        computerMove='rock';
    }else if(randomNumber >1/3 && randomNumber <=2/3){
        computerMove = 'paper';
    }else{
        computerMove = 'scissors';
    }
    if(playerMove === computerMove){
        result = 'Tie.';
        score.ties++;
    }else if(computerMove === 'paper'&& playerMove === 'rock' || computerMove==='scissors'&&playerMove==='paper'||
        computerMove==='rock'&&playerMove==='scissors'
    ){
        result = 'You Lose.';
        score.loses++;
    }
    else{
        result = 'You Win.';
        score.wins++;
    }
    function updateResult(){
                document.querySelector('.js-result').innerHTML =
                `${result}`
            }
    updateResult();
    updateElements();
    function updateMoves(){
        document.querySelector('.js-moves').innerHTML=`  You 
        <img src="photos/${playerMove}-emoji.png" alt="" class="move-icon">
        <img src="photos/${computerMove}-emoji.png" alt="" class="move-icon">
        Computer`;
    }
    updateMoves();
    var scoreString = JSON.stringify(score);
    localStorage.setItem('score',scoreString)
}