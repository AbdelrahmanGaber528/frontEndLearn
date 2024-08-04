var allItems = document.querySelectorAll('.list li');
// get the elements in array
var content = document.querySelector('#content');
var btn = document.querySelector('#addToCart');
var price =0;
allItems.forEach(function(item){
    item.onclick =function(){
        price += parseInt(item.getAttribute('price'));
        if(content.innerHTML!=null){
            btn.style.display ='block';
        }
    };
});
btn.onclick = function(){
    alert(`The total price = ${price}`);
};
