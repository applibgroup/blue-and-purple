//Collapsible
let user = prompt ("Enter the use case", "")
if (user == "Assistant") {
    generateFirstCode();
} else if (user == "Hotel") {
    generateSecondCode();
} else if (user == "Ed") {
    generateThirdCode();
} else if (user == "College") {
    generateFourthCode();
} else if (user == "School") {
    generateFourthCode();
} else if (user == "Book Store") {
    generateFifthCode();
}
function generateFirstCode(){
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = 'Welcome I am msk'
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateSecondCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Hello there!`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForHotel(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateThirdCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Hello there!`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForEdTech(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateFourthCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Hello there!`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseForSchoolsAndColleges(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function generateFifthCode() {
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = `Hello there!`
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponseforBook(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }
    function reset() {
        console.log ("I love hanging in")
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
}
function reset() {
    location.reload();
}
function generate() {
    items = prompt("Enter the items you provide", "");
    mobileNumber = prompt("Enter the mobile number", "");
    emailAddress = prompt ("Enter the email address","");
    supportNumber = prompt("Enter support Mobile Number","");
    supportMailId = prompt("Enter Suport Mail ID","");
}
// RESPONSES

function getBotResponse(input) {
    // Simple responses for a Assistant chatbot
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thank"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "How are you today" || input == "How you doing today" || input == "how are you today"
    ||input == "How's you feeling " || input == "How are you") {
        return "I am fine! How are you doing today";
    } else if (input == "I am doing well" || input == "I am well" || input == "I am great" || input == "I am doing great"
    || input == "I am doing well" || input == "Great") {
        return "Oh that's wonderful";
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
//  Response for bot for a hotel and online food delivery  app
function getBotResponseForHotel(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot"    ) {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What is your menu" || input == "menu please" || input == "MENU PLEASE"|| input == "What you serve"
    || input == "What's in your food list"|| input == "WHAT IS IN YOUR MENU") {
        return "We serve "+ items;
    } else if (input == "I want to order something"|| input == "how can I order something"|| input == "Where to order"
    || input == "ORDER ORDER"|| input == "Order Please" || input == "Take my order" || input == "Make an order" ||
    input=="I want to order") {
        return "You can order by " + "calling to " + mobileNumber + "or " + " email to " + emailAddress + "or by scrolling"
        + " the website";
    } else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help") {
        return "Contact " + supportNumber + "or " + supportMailId;
    }else{
        return "Could you please repeat again! I am still learning";
    }
    // Response for a Ed Website
    function getBotResponseForEd(input) {
        if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
            return "Hello there! How can I help you";
        }else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
            return "Thank you for choosing us! Hope you like the service";
        }else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
        || input == "What are the courses offered by you" || input == "Courses offered" ) {
            return "List of courses offered: ";
        }else if (input == "I want to order something"|| input == "how can I order something"|| input == "Where to order"
        || input == "ORDER ORDER"|| input == "Order Please" || input == "Take my order" || input == "Make an order") {
            return "You can order by " + "calling to " + mobileNumber + "or " + " email to " + emailAddress + "or by scrolling"
            + " the website";
        }else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
        || input == "Support Please" || input == "Support"|| input == "help") {
            return "Contact " + supportNumber + "or " + supportMailID;
        } else{
            return "Could you please repeat again! I am still learning";
        }
    }
}

//  Response for a College Wesbite
function getBotResponseForSchoolsAndColleges(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
    || input == "What are the courses offered by you" || input == "Courses offered" ) {
        return "List of courses offered: " + items;
    } else if (input == "What is the admission criteria for this institure" || input == "Admission in the college"
    || input == "Admission process" || input == "Admissions") {
        return "You should have" +  "% marks and should have cleared the ";
    }  else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
    || input =="Need assistance") {
        return "Contact " + supportNumber + "or " + supportMailID;
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
//  Response for a Book store
function getBotResponseforBook(input) {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What books do you offer" || input == "List of Books" || input == "Which books do you offer"
    || input == "What are the books sold by you" || input == "Books offered" ) {
        return "List of Books offered: " + items;
    } else if(input == "Do you also sell offline" || input == "Where is your store located" ||input=="Can you also be find offline"
    || input == "where are your stores" || input == "What is your retail model"){
        return "We are available at" + locations;
    } else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
    || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
    || input =="Need assistance") {
        return "Contact " + supportNumber + "or " + supportMailID;
    } else  {
        return "Could you please repeat again! I am still learning";
    }
}
function getBotResponseForEdTech() {
    if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
        return "Hello there! How can I help you";
    } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
        return "Thank you for choosing us! Hope you like the service";
    } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
    || input == "What are the courses offered by you" || input == "Courses offered" ) {
        return "List of courses offered: " + items;
    } else {
        return "Can you repeat please! I am still learning"
    }
}
function generateCode(){
    myCode = prompt("Enter the use of chatbot again", "")
    if (myCode == "Assistant") {
        document.getElementById("html-el").textContent = `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Case</title>
        <link rel="stylesheet" href="index.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>

    <body>
    <!-- CHAT BAR BLOCK -->
       <div class="chat-bar-collapsible">
           <button id="chat-button" type="button" class="collapsible">Chat with us!
               <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
           </button>

           <div class="content">
               <div class="full-chat-block">
                   <!-- Message Container -->
                   <div class="outer-container">
                       <div class="chat-container">
                           <!-- Messages -->
                           <div id="chatbox">
                               <h5 id="chat-timestamp"></h5>
                               <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                           </div>

                           <!-- User input box -->
                           <div class="chat-bar-input-block">
                               <div id="userInput">
                                   <input id="textInput" class="input-box" type="text" name="msg"
                                       placeholder="Tap 'Enter' to send a message">
                                   <p></p>
                               </div>

                               <div class="chat-bar-icons">
                                   <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                       onclick="heartButton()"></i>
                                   <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                       onclick="sendButton()"></i>
                               </div>
                           </div>

                           <div id="chat-bar-bottom">
                               <p></p>
                           </div>

                       </div>
                   </div>

               </div>
           </div>

       </div>

   </body>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="index.js"></script>

   </html>`
        document.getElementById("css-el").textContent = `html {
       scroll-behavior: smooth;
       font-family: Helvetica, sans-serif, Arial;
   }

   body {
       margin: 0 auto;
       background-color: #222;
   }
   .chat-bar-collapsible {
       position: fixed;
       bottom: 0;
       right: 50px;
       box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
   }

   .collapsible {
       background-color: rgb(82, 151, 255);
       color: white;
       cursor: pointer;
       padding: 18px;
       width: 350px;
       text-align: left;
       outline: none;
       font-size: 18px;
       border-radius: 10px 10px 0px 0px;
       border: 3px solid white;
       border-bottom: none;
   }

   .content {
       max-height: 0;
       overflow: hidden;
       transition: max-height 0.2s ease-out;
       background-color: #f1f1f1;
   }

   .full-chat-block {
       width: 350px;
       background: white;
       text-align: center;
       overflow: auto;
       scrollbar-width: none;
       height: max-content;
       transition: max-height 0.2s ease-out;
   }

   .outer-container {
       min-height: 500px;
       bottom: 0%;
       position: relative;
   }

   .chat-container {
       max-height: 500px;
       width: 100%;
       position: absolute;
       bottom: 0;
       left: 0;
       scroll-behavior: smooth;
       hyphens: auto;
   }

   .chat-container::-webkit-scrollbar {
       display: none;
   }

   .chat-bar-input-block {
       display: flex;
       float: left;
       box-sizing: border-box;
       justify-content: space-between;
       width: 100%;
       align-items: center;
       background-color: rgb(235, 235, 235);
       border-radius: 10px 10px 0px 0px;
       padding: 10px 0px 10px 10px;
   }

   .chat-bar-icons {
       display: flex;
       justify-content: space-evenly;
       box-sizing: border-box;
       width: 25%;
       float: right;
       font-size: 20px;
   }

   #chat-icon:hover {
       opacity: .7;
   }

   /* Chat bubbles */

   #userInput {
       width: 75%;
   }

   .input-box {
       float: left;
       border: none;
       box-sizing: border-box;
       width: 100%;
       border-radius: 10px;
       padding: 10px;
       font-size: 16px;
       color: #000;
       background-color: white;
       outline: none
   }

   .userText {
       color: white;
       font-family: Helvetica;
       font-size: 16px;
       font-weight: normal;
       text-align: right;
       clear: both;
   }

   .userText span {
       line-height: 1.5em;
       display: inline-block;
       background: #5ca6fa;
       padding: 10px;
       border-radius: 8px;
       border-bottom-right-radius: 2px;
       max-width: 80%;
       margin-right: 10px;
       animation: floatup .5s forwards
   }

   .botText {
       color: #000;
       font-family: Helvetica;
       font-weight: normal;
       font-size: 16px;
       text-align: left;
   }

   .botText span {
       line-height: 1.5em;
       display: inline-block;
       background: #e0e0e0;
       padding: 10px;
       border-radius: 8px;
       border-bottom-left-radius: 2px;
       max-width: 80%;
       margin-left: 10px;
       animation: floatup .5s forwards
   }

   @keyframes floatup {
       from {
           transform: translateY(14px);
           opacity: .0;
       }
       to {
           transform: translateY(0px);
           opacity: 1;
       }
   }

   @media screen and (max-width:600px) {
       .full-chat-block {
           width: 100%;
           border-radius: 0px;
       }
       .chat-bar-collapsible {
           position: fixed;
           bottom: 0;
           right: 0;
           width: 100%;
       }
       .collapsible {
           width: 100%;
           border: 0px;
           border-top: 3px solid white;
           border-radius: 0px;
       }
   }`
        document.getElementById("java-el").textContent = `
    var coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }

        });
    }
    function getTime() {
        let today = new Date();
        hours = today.getHours();
        minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let time = hours + ":" + minutes;
        return time;
    }

    // first message
    function firstBotMessage() {
        let firstMessage = "Hello there"
        document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

        let time = getTime();

        $("#chat-timestamp").append(time);
        document.getElementById("userInput").scrollIntoView(false);
    }

    firstBotMessage();

    // Saving Response
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }

    //Input value

    function getResponse() {
        let userText = $("#textInput").val();
        if (userText == "") {
            userText = "Please try entering some value";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        setTimeout(() => {
          getHardResponse(userText);
        }, 1000)
    }
    // Handles sending text via button clicks
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

         setTimeout(() => {
           getHardResponse(sampleText);
         }, 1000)
    }
    function sendButton(){
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you very much");
    }

    // Press enter to send a message
    $("#textInput").keypress(function (e) {
        if (e.which == 13) {
            getResponse();
        }
    });
    function getBotResponse(input) {
        // Simple responses for a Assistant chatbot
        if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey") {
            return "Hello there! How can I help you";
        } else if (input == "goodbye"|| input =="Thanks" || input =="Thank"|| input =="Thank you"|| input =="Thanks a lot") {
            return "Thank you for choosing us! Hope you like the service";
        } else if (input == "How are you today" || input == "How you doing today" || input == "how are you today"
                    ||input == "How's you feeling " || input == "How are you") {
            return "I am fine! How are you doing today";
        } else if (input == "I am doing well" || input == "I am well" || input == "I am great" || input == "I am doing great"
                   || input == "I am doing well" || input == "Great") {
        return "Oh that's wonderful";
       } else  {
            return "Could you please repeat again! I am still learning";
        }
    }`
    } else if (myCode == "Hotel") {
        document.getElementById("html-el").textContent = `<html lang="en">

       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Case</title>
           <link rel="stylesheet" href="index.css">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

       </head>

       <body>
       <!-- CHAT BAR BLOCK -->
          <div class="chat-bar-collapsible">
              <button id="chat-button" type="button" class="collapsible">Chat with us!
                  <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
              </button>

              <div class="content">
                  <div class="full-chat-block">
                      <!-- Message Container -->
                      <div class="outer-container">
                          <div class="chat-container">
                              <!-- Messages -->
                              <div id="chatbox">
                                  <h5 id="chat-timestamp"></h5>
                                  <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                              </div>

                              <!-- User input box -->
                              <div class="chat-bar-input-block">
                                  <div id="userInput">
                                      <input id="textInput" class="input-box" type="text" name="msg"
                                          placeholder="Tap 'Enter' to send a message">
                                      <p></p>
                                  </div>

                                  <div class="chat-bar-icons">
                                      <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                          onclick="heartButton()"></i>
                                      <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                          onclick="sendButton()"></i>
                                  </div>
                              </div>

                              <div id="chat-bar-bottom">
                                  <p></p>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>

          </div>

      </body>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="index.js"></script>

      </html>`
        document.getElementById("css-el").textContent = `html {
        scroll-behavior: smooth;
        font-family: Helvetica, sans-serif, Arial;
    }

    body {
        margin: 0 auto;
        background-color: #222;
    }
    .chat-bar-collapsible {
        position: fixed;
        bottom: 0;
        right: 50px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .collapsible {
        background-color: rgb(82, 151, 255);
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 350px;
        text-align: left;
        outline: none;
        font-size: 18px;
        border-radius: 10px 10px 0px 0px;
        border: 3px solid white;
        border-bottom: none;
    }

    .content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #f1f1f1;
    }

    .full-chat-block {
        width: 350px;
        background: white;
        text-align: center;
        overflow: auto;
        scrollbar-width: none;
        height: max-content;
        transition: max-height 0.2s ease-out;
    }

    .outer-container {
        min-height: 500px;
        bottom: 0%;
        position: relative;
    }

    .chat-container {
        max-height: 500px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        scroll-behavior: smooth;
        hyphens: auto;
    }

    .chat-container::-webkit-scrollbar {
        display: none;
    }

    .chat-bar-input-block {
        display: flex;
        float: left;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        background-color: rgb(235, 235, 235);
        border-radius: 10px 10px 0px 0px;
        padding: 10px 0px 10px 10px;
    }

    .chat-bar-icons {
        display: flex;
        justify-content: space-evenly;
        box-sizing: border-box;
        width: 25%;
        float: right;
        font-size: 20px;
    }

    #chat-icon:hover {
        opacity: .7;
    }

    /* Chat bubbles */

    #userInput {
        width: 75%;
    }

    .input-box {
        float: left;
        border: none;
        box-sizing: border-box;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #000;
        background-color: white;
        outline: none
    }

    .userText {
        color: white;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: normal;
        text-align: right;
        clear: both;
    }

    .userText span {
        line-height: 1.5em;
        display: inline-block;
        background: #5ca6fa;
        padding: 10px;
        border-radius: 8px;
        border-bottom-right-radius: 2px;
        max-width: 80%;
        margin-right: 10px;
        animation: floatup .5s forwards
    }

    .botText {
        color: #000;
        font-family: Helvetica;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
    }

    .botText span {
        line-height: 1.5em;
        display: inline-block;
        background: #e0e0e0;
        padding: 10px;
        border-radius: 8px;
        border-bottom-left-radius: 2px;
        max-width: 80%;
        margin-left: 10px;
        animation: floatup .5s forwards
    }

    @keyframes floatup {
        from {
            transform: translateY(14px);
            opacity: .0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @media screen and (max-width:600px) {
        .full-chat-block {
            width: 100%;
            border-radius: 0px;
        }
        .chat-bar-collapsible {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
        }
        .collapsible {
            width: 100%;
            border: 0px;
            border-top: 3px solid white;
            border-radius: 0px;
        }
    }`
        document.getElementById("java-el").textContent = `var coll = document.getElementsByClassName("collapsible");
       for (let i = 0; i < coll.length; i++) {
           coll[i].addEventListener("click", function () {
               this.classList.toggle("active");

               var content = this.nextElementSibling;

               if (content.style.maxHeight) {
                   content.style.maxHeight = null;
               } else {
                   content.style.maxHeight = content.scrollHeight + "px";
               }

           });
       }
       function getTime() {
           let today = new Date();
           hours = today.getHours();
           minutes = today.getMinutes();

           if (hours < 10) {
               hours = "0" + hours;
           }

           if (minutes < 10) {
               minutes = "0" + minutes;
           }

           let time = hours + ":" + minutes;
           return time;
       }

       // first message
       function firstBotMessage() {
           let firstMessage = "Hello there!"
           document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

           let time = getTime();

           $("#chat-timestamp").append(time);
           document.getElementById("userInput").scrollIntoView(false);
       }

       firstBotMessage();

       // Saving Response
       function getHardResponse(userText) {
           let botResponse = getBotResponseForHotel(userText);
           let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
           $("#chatbox").append(botHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);
       }

       //Input value

       function getResponse() {
           let userText = $("#textInput").val();
           if (userText == "") {
               userText = "Please try entering some value";
           }
           let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           setTimeout(() => {
             getHardResponse(userText);
           }, 1000)
       }
       // Handles sending text via button clicks
       function buttonSendText(sampleText) {
           let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);

            setTimeout(() => {
              getHardResponse(sampleText);
            }, 1000)
       }
       function sendButton(){
           getResponse();
       }

       function heartButton() {
           buttonSendText("Thank you very much");
       }

       // Press enter to send a message
       $("#textInput").keypress(function (e) {
           if (e.which == 13) {
               getResponse();
           }
       });
       function getBotResponseForHotel(input) {
           if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
               return "Hello there! How can I help you";
          } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot"    ) {
              return "Thank you for choosing us! Hope you like the service";
           } else if (input == "What is your menu" || input == "menu please" || input == "MENU PLEASE"|| input == "What you serve"
                       || input == "What's in your food list"|| input == "WHAT IS IN YOUR MENU") {
            return "We serve "+ items;
           } else if (input == "I want to order something"|| input == "how can I order something"|| input == "Where to order"
                    || input == "ORDER ORDER"|| input == "Order Please" || input == "Take my order" || input == "Make an order") {
                       return "You can order by " + "calling to " + mobileNumber + "or " + " email to " + emailAddress + "or by scrolling"
                     + " the website";
           } else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
                       || input == "Support Please" || input == "Support"|| input == "help") {
                        return "Contact " + supportNumber + "or " + supportMailId;
           }else{
                         return "Could you please repeat again! I am still learning";
           }
       }`
    } else if (myCode == "School") {
        document.getElementById("html-el").textContent = `<html lang="en">

       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Case</title>
           <link rel="stylesheet" href="index.css">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

       </head>

       <body>
       <!-- CHAT BAR BLOCK -->
          <div class="chat-bar-collapsible">
              <button id="chat-button" type="button" class="collapsible">Chat with us!
                  <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
              </button>

              <div class="content">
                  <div class="full-chat-block">
                      <!-- Message Container -->
                      <div class="outer-container">
                          <div class="chat-container">
                              <!-- Messages -->
                              <div id="chatbox">
                                  <h5 id="chat-timestamp"></h5>
                                  <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                              </div>

                              <!-- User input box -->
                              <div class="chat-bar-input-block">
                                  <div id="userInput">
                                      <input id="textInput" class="input-box" type="text" name="msg"
                                          placeholder="Tap 'Enter' to send a message">
                                      <p></p>
                                  </div>

                                  <div class="chat-bar-icons">
                                      <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                          onclick="heartButton()"></i>
                                      <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                          onclick="sendButton()"></i>
                                  </div>
                              </div>

                              <div id="chat-bar-bottom">
                                  <p></p>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>

          </div>

      </body>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="index.js"></script>

      </html>`
        document.getElementById("css-el").textContent = `html {
        scroll-behavior: smooth;
        font-family: Helvetica, sans-serif, Arial;
    }

    body {
        margin: 0 auto;
        background-color: #222;
    }
    .chat-bar-collapsible {
        position: fixed;
        bottom: 0;
        right: 50px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .collapsible {
        background-color: rgb(82, 151, 255);
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 350px;
        text-align: left;
        outline: none;
        font-size: 18px;
        border-radius: 10px 10px 0px 0px;
        border: 3px solid white;
        border-bottom: none;
    }

    .content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #f1f1f1;
    }

    .full-chat-block {
        width: 350px;
        background: white;
        text-align: center;
        overflow: auto;
        scrollbar-width: none;
        height: max-content;
        transition: max-height 0.2s ease-out;
    }

    .outer-container {
        min-height: 500px;
        bottom: 0%;
        position: relative;
    }

    .chat-container {
        max-height: 500px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        scroll-behavior: smooth;
        hyphens: auto;
    }

    .chat-container::-webkit-scrollbar {
        display: none;
    }

    .chat-bar-input-block {
        display: flex;
        float: left;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        background-color: rgb(235, 235, 235);
        border-radius: 10px 10px 0px 0px;
        padding: 10px 0px 10px 10px;
    }

    .chat-bar-icons {
        display: flex;
        justify-content: space-evenly;
        box-sizing: border-box;
        width: 25%;
        float: right;
        font-size: 20px;
    }

    #chat-icon:hover {
        opacity: .7;
    }

    /* Chat bubbles */

    #userInput {
        width: 75%;
    }

    .input-box {
        float: left;
        border: none;
        box-sizing: border-box;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #000;
        background-color: white;
        outline: none
    }

    .userText {
        color: white;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: normal;
        text-align: right;
        clear: both;
    }

    .userText span {
        line-height: 1.5em;
        display: inline-block;
        background: #5ca6fa;
        padding: 10px;
        border-radius: 8px;
        border-bottom-right-radius: 2px;
        max-width: 80%;
        margin-right: 10px;
        animation: floatup .5s forwards
    }

    .botText {
        color: #000;
        font-family: Helvetica;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
    }

    .botText span {
        line-height: 1.5em;
        display: inline-block;
        background: #e0e0e0;
        padding: 10px;
        border-radius: 8px;
        border-bottom-left-radius: 2px;
        max-width: 80%;
        margin-left: 10px;
        animation: floatup .5s forwards
    }

    @keyframes floatup {
        from {
            transform: translateY(14px);
            opacity: .0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @media screen and (max-width:600px) {
        .full-chat-block {
            width: 100%;
            border-radius: 0px;
        }
        .chat-bar-collapsible {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
        }
        .collapsible {
            width: 100%;
            border: 0px;
            border-top: 3px solid white;
            border-radius: 0px;
        }
    }`
        document.getElementById("java-el").textContent = `var coll = document.getElementsByClassName("collapsible");
       for (let i = 0; i < coll.length; i++) {
           coll[i].addEventListener("click", function () {
               this.classList.toggle("active");

               var content = this.nextElementSibling;

               if (content.style.maxHeight) {
                   content.style.maxHeight = null;
               } else {
                   content.style.maxHeight = content.scrollHeight + "px";
               }

           });
       }
       function getTime() {
           let today = new Date();
           hours = today.getHours();
           minutes = today.getMinutes();

           if (hours < 10) {
               hours = "0" + hours;
           }

           if (minutes < 10) {
               minutes = "0" + minutes;
           }

           let time = hours + ":" + minutes;
           return time;
       }

       // first message
       function firstBotMessage() {
           let firstMessage = "Hello there!"
           document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

           let time = getTime();

           $("#chat-timestamp").append(time);
           document.getElementById("userInput").scrollIntoView(false);
       }

       firstBotMessage();

       // Saving Response
       function getHardResponse(userText) {
           let botResponse = getBotResponseForSchoolsAndColleges(userText);
           let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
           $("#chatbox").append(botHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);
       }

       //Input value

       function getResponse() {
           let userText = $("#textInput").val();
           if (userText == "") {
               userText = "Please try entering some value";
           }
           let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           setTimeout(() => {
             getHardResponse(userText);
           }, 1000)
       }
       // Handles sending text via button clicks
       function buttonSendText(sampleText) {
           let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);

            setTimeout(() => {
              getHardResponse(sampleText);
            }, 1000)
       }
       function sendButton(){
           getResponse();
       }

       function heartButton() {
           buttonSendText("Thank you very much");
       }

       // Press enter to send a message
       $("#textInput").keypress(function (e) {
           if (e.which == 13) {
               getResponse();
           }
       });
       function getBotResponseForSchoolsAndColleges(input) {
           if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
                return "Hello there! How can I help you";
            } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
                return "Thank you for choosing us! Hope you like the service";
            } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
                       || input == "What are the courses offered by you" || input == "Courses offered" ) {
             return "List of courses offered: " + items;
            } else if (input == "What is the admission criteria for this institure" || input == "Admission in the college"
                      || input == "Admission process" || input == "Admissions") {
            return "You should have" +  "% marks and should have cleared the ";
            }  else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
                         || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
                         || input =="Need assistance") {
            return "Contact " + supportNumber + "or " + supportMailID;
                       } else  {
                     return "Could you please repeat again! I am still learning";
                }
             }`
    } else if (myCode == "College") {
        document.getElementById("html-el").textContent = `<html lang="en">

       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Case</title>
           <link rel="stylesheet" href="index.css">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

       </head>

       <body>
       <!-- CHAT BAR BLOCK -->
          <div class="chat-bar-collapsible">
              <button id="chat-button" type="button" class="collapsible">Chat with us!
                  <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
              </button>

              <div class="content">
                  <div class="full-chat-block">
                      <!-- Message Container -->
                      <div class="outer-container">
                          <div class="chat-container">
                              <!-- Messages -->
                              <div id="chatbox">
                                  <h5 id="chat-timestamp"></h5>
                                  <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                              </div>

                              <!-- User input box -->
                              <div class="chat-bar-input-block">
                                  <div id="userInput">
                                      <input id="textInput" class="input-box" type="text" name="msg"
                                          placeholder="Tap 'Enter' to send a message">
                                      <p></p>
                                  </div>

                                  <div class="chat-bar-icons">
                                      <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                                          onclick="heartButton()"></i>
                                      <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                                          onclick="sendButton()"></i>
                                  </div>
                              </div>

                              <div id="chat-bar-bottom">
                                  <p></p>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>

          </div>

      </body>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="index.js"></script>

      </html>`
        document.getElementById("css-el").textContent = `html {
        scroll-behavior: smooth;
        font-family: Helvetica, sans-serif, Arial;
    }

    body {
        margin: 0 auto;
        background-color: #222;
    }
    .chat-bar-collapsible {
        position: fixed;
        bottom: 0;
        right: 50px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .collapsible {
        background-color: rgb(82, 151, 255);
        color: white;
        cursor: pointer;
        padding: 18px;
        width: 350px;
        text-align: left;
        outline: none;
        font-size: 18px;
        border-radius: 10px 10px 0px 0px;
        border: 3px solid white;
        border-bottom: none;
    }

    .content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
        background-color: #f1f1f1;
    }

    .full-chat-block {
        width: 350px;
        background: white;
        text-align: center;
        overflow: auto;
        scrollbar-width: none;
        height: max-content;
        transition: max-height 0.2s ease-out;
    }

    .outer-container {
        min-height: 500px;
        bottom: 0%;
        position: relative;
    }

    .chat-container {
        max-height: 500px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        scroll-behavior: smooth;
        hyphens: auto;
    }

    .chat-container::-webkit-scrollbar {
        display: none;
    }

    .chat-bar-input-block {
        display: flex;
        float: left;
        box-sizing: border-box;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        background-color: rgb(235, 235, 235);
        border-radius: 10px 10px 0px 0px;
        padding: 10px 0px 10px 10px;
    }

    .chat-bar-icons {
        display: flex;
        justify-content: space-evenly;
        box-sizing: border-box;
        width: 25%;
        float: right;
        font-size: 20px;
    }

    #chat-icon:hover {
        opacity: .7;
    }

    /* Chat bubbles */

    #userInput {
        width: 75%;
    }

    .input-box {
        float: left;
        border: none;
        box-sizing: border-box;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        font-size: 16px;
        color: #000;
        background-color: white;
        outline: none
    }

    .userText {
        color: white;
        font-family: Helvetica;
        font-size: 16px;
        font-weight: normal;
        text-align: right;
        clear: both;
    }

    .userText span {
        line-height: 1.5em;
        display: inline-block;
        background: #5ca6fa;
        padding: 10px;
        border-radius: 8px;
        border-bottom-right-radius: 2px;
        max-width: 80%;
        margin-right: 10px;
        animation: floatup .5s forwards
    }

    .botText {
        color: #000;
        font-family: Helvetica;
        font-weight: normal;
        font-size: 16px;
        text-align: left;
    }

    .botText span {
        line-height: 1.5em;
        display: inline-block;
        background: #e0e0e0;
        padding: 10px;
        border-radius: 8px;
        border-bottom-left-radius: 2px;
        max-width: 80%;
        margin-left: 10px;
        animation: floatup .5s forwards
    }

    @keyframes floatup {
        from {
            transform: translateY(14px);
            opacity: .0;
        }
        to {
            transform: translateY(0px);
            opacity: 1;
        }
    }

    @media screen and (max-width:600px) {
        .full-chat-block {
            width: 100%;
            border-radius: 0px;
        }
        .chat-bar-collapsible {
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
        }
        .collapsible {
            width: 100%;
            border: 0px;
            border-top: 3px solid white;
            border-radius: 0px;
        }
    }`
        document.getElementById("java-el").textContent = `var coll = document.getElementsByClassName("collapsible");
       for (let i = 0; i < coll.length; i++) {
           coll[i].addEventListener("click", function () {
               this.classList.toggle("active");

               var content = this.nextElementSibling;

               if (content.style.maxHeight) {
                   content.style.maxHeight = null;
               } else {
                   content.style.maxHeight = content.scrollHeight + "px";
               }

           });
       }
       function getTime() {
           let today = new Date();
           hours = today.getHours();
           minutes = today.getMinutes();

           if (hours < 10) {
               hours = "0" + hours;
           }

           if (minutes < 10) {
               minutes = "0" + minutes;
           }

           let time = hours + ":" + minutes;
           return time;
       }

       // first message
       function firstBotMessage() {
           let firstMessage = "Hello there!"
           document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

           let time = getTime();

           $("#chat-timestamp").append(time);
           document.getElementById("userInput").scrollIntoView(false);
       }

       firstBotMessage();

       // Saving Response
       function getHardResponse(userText) {
           let botResponse = getBotResponseForSchoolsAndColleges(userText);
           let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
           $("#chatbox").append(botHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);
       }

       //Input value

       function getResponse() {
           let userText = $("#textInput").val();
           if (userText == "") {
               userText = "Please try entering some value";
           }
           let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           setTimeout(() => {
             getHardResponse(userText);
           }, 1000)
       }
       // Handles sending text via button clicks
       function buttonSendText(sampleText) {
           let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

           $("#textInput").val("");
           $("#chatbox").append(userHtml);
           document.getElementById("chat-bar-bottom").scrollIntoView(true);

            setTimeout(() => {
              getHardResponse(sampleText);
            }, 1000)
       }
       function sendButton(){
           getResponse();
       }

       function heartButton() {
           buttonSendText("Thank you very much");
       }

       // Press enter to send a message
       $("#textInput").keypress(function (e) {
           if (e.which == 13) {
               getResponse();
           }
       });
       function getBotResponseForSchoolsAndColleges(input) {
           if (input == "hi" || input == "hello" || input =="hola" || input =="What's up" || input =="hey"  ) {
                return "Hello there! How can I help you";
            } else if (input == "goodbye"|| input =="Thanks" || input =="Thanks"|| input =="Thank you"|| input =="Thanks a lot") {
                return "Thank you for choosing us! Hope you like the service";
            } else if (input == "What courses do you offer" || input == "List of Courses" || input == "Which courses do you offer"
                       || input == "What are the courses offered by you" || input == "Courses offered" ) {
             return "List of courses offered: " + items;
            } else if (input == "What is the admission criteria for this institure" || input == "Admission in the college"
                      || input == "Admission process" || input == "Admissions") {
            return "You should have" +  "% marks and should have cleared the ";
            }  else if ( input == "I want to talk to customer care" || input == "Contact Support"|| input == "Support"
                         || input == "Support Please" || input == "Support"|| input == "help" || input == "I want to contact to a teacher"
                         || input =="Need assistance") {
            return "Contact " + supportNumber + "or " + supportMailID;
                       } else  {
                     return "Could you please repeat again! I am still learning";
                }
             }`
    }
}
