const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage !== "") {
        const userDiv = document.createElement("div");
        userDiv.className = "user";
        userDiv.innerHTML = userMessage;
        messages.appendChild(userDiv);
        userInput.value = "";
        sendBotMessage(userMessage);
    }
}

function sendBotMessage(userMessage) {
    const botMessage = getBotResponse(userMessage);
    const botDiv = document.createElement("div");
    botDiv.className = "bot";
    botDiv.innerHTML = botMessage;
    messages.appendChild(botDiv);
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userMessage) {

    // const botResponses = [
    //     "Hello there!",
    //     "How are you today?",
    //     "What can I help you with?",
    //     "Sorry, I didn't understand that.",
    //     "Please try again.",
    //     "Goodbye!",
    // ];
    // const randomIndex = Math.floor(Math.random() * botResponses.length);
    
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("i want to return my product")) {
        return "Sure provide your product id";
    } else if (lowerCaseMessage.includes("12345")) {
        return "Ok, Your return will be confirmed";
    }  else if (lowerCaseMessage.includes("thank you")) {
        return "You're welcome , For further assistance contact:####";
    } else {
        return "I'm sorry, I didn't understand your message. Can you please try again?";
    }
    
    // return botResponses[randomIndex];
    
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keyup", function(event) {
if (event.keycode === 13) {
event.preventDefault();
sendBtn.click();
}
});