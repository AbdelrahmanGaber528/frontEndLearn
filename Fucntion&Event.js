var fn = function(){//the function is anynomnus if there is an error
    console.log("hello , expression function");
};
fn();
var fn2 = function test(){//this the name of function
    console.log("The best way expression function");
};
fn2();
/*
(
    function name(){
        statements
    }
)();the brackets for the function
*/
(function code(){//run as soon as itis defined

    console.log("self invoke function");

})();

// onmouseenter like hover in css 
document.getElementById('btn').onmouseenter=function(){
    document.getElementById('demo').innerHTML=str;
};


var x =1;
document.getElementById('btn').onmousemove=function(){
    document.getElementById('demo').innerHTML=x++;
};


// the following code is the best 
var btn  = document.getElementById('btn');
var div = document.getElementById('demo');

function action(){
    div.innerHTML = "code";
}
btn.onclick = action;

var inputDom = document.getElementById('input');
inputDom.onkeydown = function(){
    console.log('test');
};

window.onload = function(){//when the pege loaded 
    alert("Yes Loaded");
};
// write the function alone and use it
function keyboardUp(){
    console.log('test');
};


// this is best for writing,
inputDom.addEventListener('keydown' ,keyboardUp);
inputDom.addEventListener('click',function count(){
    var count=0;
    count++;
});

//loops in js
var i =0;
for(;i<10;i++){
    console.log(i);
};
