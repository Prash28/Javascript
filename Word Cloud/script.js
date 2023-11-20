let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordContainerElement = document.getElementById("wordsContainer");
let userInputElement = document.getElementById("userInput");
let addButtonElement = document.getElementById("addBtn");
let errorMsgElement = document.getElementById('errorMsg');
let index=0;

function appendWord(current_word){
    // let current_word = wordCloud[index];
    console.log(current_word);
    let font_size = Math.ceil(Math.random()*50);
    
    let wordDiv = document.createElement("div");
    wordDiv.style.padding = "5px";
    wordDiv.style.fontSize = String(font_size) +"px";
    wordContainerElement.appendChild(wordDiv);
    let wordElement = document.createElement("span");
    wordElement.textContent = String(current_word);
    wordElement.style.size = font_size;
    wordDiv.appendChild(wordElement);
}

while(index < wordCloud.length){
    appendWord(wordCloud[index]);
    index++;
}

addButtonElement.onclick = function(){
    if(userInputElement.value!==""){
        errorMsgElement.innerHTML="";
        appendWord(userInputElement.value);
        userInputElement.value="";
    } else{
        errorMsgElement.innerHTML = "Please enter a word";
    }
}