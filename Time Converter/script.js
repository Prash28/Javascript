let hoursinput = document.getElementById("hoursInput");
let minutesinput = document.getElementById("minutesInput");
let seconds = 0;
let convertbuttonEl = document.getElementById("convertBtn")
let invalidinfoEl = document.getElementById("errorMsg");
let resultinfoEl = document.getElementById("timeInSeconds");

function converttoseconds() {
    console.log("convert function");
    if(resultinfoEl.classList.contains("resultinfo")){
           resultinfoEl.classList.remove("resultinfo");
    }
    invalidinfoEl.textContent = "";
    resultinfoEl.textContent = "";
    let hoursinputvalue = hoursinput.value;
    let minutesinputvalue = minutesinput.value;
    console.log("hours:" + String(hoursinputvalue));
    console.log("minutes:" + String(minutesinputvalue));
    if (hoursinput.value === "") {
        invalidinfoEl.textContent = "Please enter a valid number of hours.";
    } else if (minutesinput.value === "") {
        invalidinfoEl.textContent = "Please enter a valid number of minutes.";
    } else {
        seconds = (hoursinputvalue * 60 * 60) + (minutesinputvalue * 60);
        console.log("Seconds: " + String(seconds));
        resultinfoEl.classList.add("resultinfo");
        resultinfoEl.textContent = String(seconds+"s");
    }
}

convertbuttonEl.addEventListener("click", converttoseconds);