let twentyBtn = document.getElementById("twentySecondsBtn");
let thirtyBtn = document.getElementById("thirtySecondsBtn");
let fortyBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");
let timerText = document.getElementById('timerText');
let intervalId;

function timerFunction(timerValue){
    timerText.textContent = "";
    timerText.textContent = String(timerValue)+" seconds left" ;
    
    intervalId = setInterval(function(){
        let counter = timerValue;
        if(timerText.textContent==="0 seconds left"){
            clearInterval(intervalId);
            timerText.textContent="Your moment is complete";
        }else{
        timerText.textContent = String(parseInt(timerText.textContent) -1)+" seconds left" ;
        counter -= 1;
        console.log(counter);
        }
    }, 1000);
}
function clearPreviousTimers(){
    clearInterval(intervalId);
}
twentyBtn.onclick = function(){ clearPreviousTimers(); timerFunction(20); };
thirtyBtn.onclick = function(){ clearPreviousTimers(); timerFunction(30); };
fortyBtn.onclick = function(){ clearPreviousTimers(); timerFunction(40); };
oneMinBtn.onclick = function(){ clearPreviousTimers(); timerFunction(60); };