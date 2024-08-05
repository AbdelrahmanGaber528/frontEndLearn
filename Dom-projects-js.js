const subscribe_button = document.querySelector('.js-subscribe-button');
subscribe_button.addEventListener('click', function Subscribe(){
        if(subscribe_button.innerText==='Subscribe')
            subscribe_button.innerText='Subscribed';
        else
            subscribe_button.innerText='Subscribe';
});

const totalCost = document.querySelector('.js-total-cost');
const costButton = document.querySelector('.js-calculate-button');
const inputValue = document.querySelector('.js-input-cost');

function calcCost(){
    let cost = Number(inputValue.value); //  turn the string into number
    if(cost<40)
        cost+=10    ;
    totalCost.innerHTML = `The total cost : $${cost}`;
}
function Enter(event){
    if(event.key==='Enter')
    calcCost();
}
costButton.addEventListener('click',calcCost)
inputValue.addEventListener('keydown',Enter);