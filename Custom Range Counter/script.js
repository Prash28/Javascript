let fromInputEl = document.getElementById("fromUserInput");
let toInputEl = document.getElementById("toUserInput");
let counterElement = document.getElementById("counterText");
let startBtnElement = document.getElementById("startBtn");

startBtnElement.onclick = function() {
    if(fromInputEl.value===""){
        alert("Enter the from value");
    }
    else if(toInputEl.value===""){
        alert("Enter the to value");
    }
    else{
    let counter = fromInputEl.value;
    console.log(counter);
    counterElement.textContent = String(fromInputEl.value);
    let intervalId = setInterval(function() {
        counter = parseInt(counter) + 1;
        if (counter === parseInt(toInputEl.value)+1) {
            clearInterval(intervalId);
        } else {
            counterElement.textContent = String(counter);
        }
    } , 1000);
}
}