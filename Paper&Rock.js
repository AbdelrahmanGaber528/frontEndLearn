let computerMove = null;
let result = null;
//using the object to group relative data together
const score = JSON.parse(localStorage.getItem('score')) || 
    {
        wins:0,
        loses:0,
        ties:0
    };
//        /\
//        ||
// if(!score){
//     score={
//         wins:0,
//         losses:0,
//         ties:0
//     }
// }

function computerTurn(id){
    const randomNumber = Math.random();
    if(randomNumber >=0 && randomNumber <=1/3){
        computerMove='Rock';
    }else if(randomNumber >1/3 && randomNumber <=2/3){
        computerMove = 'Paper';
    }else{
        computerMove = 'Scissors';
    }
    if(id === computerMove){
        result = 'Tie.';
        score.ties++;
    }else if(computerMove === 'Scissors'&& id === 'Rock' ){
        result = 'You Win.';
        score.wins++;
    }
    else{
        result = 'You Lose.';
        score.loses++;
    }
    var scoreString = JSON.stringify(score);
    localStorage.setItem('score',scoreString)
    alert(`You choose ${id}. Computer picked ${computerMove}.${result}\n wins:${score.wins} Loses:${score.loses} Ties:${score.ties}.`);

}