let counterValue = 0;
var decrement = document.getElementById("decrement");
var increment = document.getElementById("increment");

decrement.addEventListener("click",function(){
    counterValue = counterValue - 1;
    console.log(counterValue)
    document.getElementById("value").innerHTML = counterValue;
}, false);

increment.addEventListener("click",function(){
    counterValue = counterValue + 1;
    console.log(counterValue)
    document.getElementById("value").innerHTML = counterValue;
}, false);