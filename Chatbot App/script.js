let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let listCounter = 0;
let currentUserInput = "";

let chatContainerElement = document.getElementById("chatContainer");
let userInputElement = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function sendMsgtoBot(currentUserInput) {
    console.log("message received: " + String(currentUserInput));
    let currentMsgChat = document.createElement("div");
    currentMsgChat.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    currentMsgChat.innerHTML = currentUserInput;
    chatContainerElement.appendChild(currentMsgChat);

    let BotMsgContainer = document.createElement("div");
    BotMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainerElement.appendChild(BotMsgContainer);

    let BotMsgChat = document.createElement("span");
    BotMsgChat.textContent = chatbotMsgList[listCounter];
    listCounter += 1;
    if (listCounter >= chatbotMsgList.length) {
        listCounter = 0;
    }
    BotMsgChat.classList.add("msg-from-chatbot");
    BotMsgContainer.appendChild(BotMsgChat);
}
sendMsgBtn.onclick = function() {
    currentUserInput = userInputElement.value;
    console.clear();
    sendMsgtoBot(currentUserInput);
    userInputElement.value = "";
};