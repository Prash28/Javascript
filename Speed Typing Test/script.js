let timerEl = document.getElementById("timer");
let typing_time = 0;

let intervalId = setInterval(function() {
    typing_time = typing_time + 1;
    timerEl.textContent = typing_time;
}, 1000);

let quoteAreaEl = document.getElementById("quoteDisplay");
let textAreaEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetButtonEl = document.getElementById("resetBtn");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");

let options = {
    method: "GET"
};
spinnerEl.classList.remove("d-none");

function fetchData() {
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.content);
            let fetchedQuote = String(data.content);
            quoteAreaEl.textContent = fetchedQuote;
            spinnerEl.classList.add("d-none");
        });
}

fetchData();

submitBtnEl.onclick = function() {
    clearInterval(intervalId);
    let userEnteredText = textAreaEl.value;
    if (userEnteredText === quoteAreaEl.textContent) {
        console.log("You typed correct sentence");
        let resultTime = typing_time;
        resultEl.textContent = "You typed in " + String(resultTime) + " seconds";
    } else {
        console.log("You typed incorect sentence");
        resultEl.textContent = "You typed incorect sentence";
    }
};

resetButtonEl.onclick = function() {
    textAreaEl.value = "";
    // clearInterval(intervalId);
    typing_time = 0;
    // setInterval(intervalId);
    timerEl.textContent = 0;

}