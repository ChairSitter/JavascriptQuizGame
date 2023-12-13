//Start button calls the main game function, starts it over when pressed again
    //Timer 
        //counts down from 60
        //removes 10 seconds when a question is wrong
    //Questions and answers
        //Made from objects and stored in an array of objects
        //Object has question name, 4 answers, and a correctAnswer variable storing which one has to be selected
    //Display round function displays a new random question and answer each round
    //Answer divs have click listeners. If correct question is clicked it runs "correct" function

    //Correct function
        //Correct answer is briefly highlighted green
        //next question is run using Display round function
        //Displays "Correct" somewhere on the screen

    //Incorrect function
        //Removes 10 seconds from the clock
        //Incorrect choice is briefly highlighted red, correct choice is highlighted green
        //Displays "Incorrect" somewhere on the screen
    
    //End game function
        //If timer count reaches 0, game ends
        //If run out of questions, game ends

    //High Scores function
        //Retrieves and displays any past scores
        //Displays an input field to enter player's name next to their score
        //When clicking button, adds to displayed list, then stores them

//Get HTML elements, set to variables
const startButton = document.querySelector("#start");

const question = document.querySelector("#question");
const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const timerDiv = document.querySelector("#timer-div");
const timer = document.querySelector("#timer");

const highScoreDiv = document.querySelector("#high-score");
const explanationP = document.querySelector("#explanation");

const newGameButton = document.createElement("button");
const nameLabel = document.createElement("label");
const nameInput = document.createElement("input");
const nameButton = document.createElement("button");
let userName = nameInput.value;
const displayUserName = document.createElement("p");

let time = 90;
let roundNum = 0;
let myInterval;

const controlTimer = () => {
    const decrementTime = () => {
        time--;
        timer.textContent = time; 
        if(time <= 0){
            endGame();
        }
        if(time <= 0){
            clearInterval(myInterval);
        }
    }
    myInterval = setInterval(decrementTime, 1000);
};

const questionBank = [
    {
        name: "Question #1",
        question: "What year was JavaScript invented?", 
        A: "2015",
        B: "1995", 
        C: "1988", 
        D: "1990",
        correct: "B",
    }, 
    {
        name: "Question #2",
        question: "Which variable declaration keyword prevents reassignment of the variable?", 
        A: "var",
        B: "let", 
        C: "const", 
        D: "putnam",
        correct: "C",
    },
    {
        name: "Question #3",
        question: "What method allows the developer to read a custom message in DevTools?", 
        A: "console.log()",
        B: "message.read()", 
        C: "developer.text()", 
        D: "script.java()",
        correct: "A",
    },
    {
        name: "Question #4",
        question: "What is the official language name of JavaScript?", 
        A: "PageScript",
        B: "Doug's cool language", 
        C: "Java", 
        D: "ECMAScript",
        correct: "D",
    },
    {
        name: "Question #5",
        question: "Which three are all data types?", 
        A: "string, number, boolean",
        B: "bingo, numeric, string", 
        C: "boonsky, numrod, strang", 
        D: "straang, noomber, billean",
        correct: "A",
    },
    {
        name: "Question #6",
        question: "What does JavaScript contribute to a website?", 
        A: "Content and order",
        B: "Interactivity", 
        C: "Styles and display rules", 
        D: "JavaScript is the lazy moocher of the web",
        correct: "B",
    },
    {
        name: "Question #7",
        question: "How do you write an arrow function?", 
        A: "const funName ==========> { ... }",
        B: "const funName (arrow) { ... }", 
        C: "const arrow = arrowFunction (arrow) { I like arrows }", 
        D: "const funName = () => { ... }",
        correct: "D",
    },
    {
        name: "Question #8",
        question: "Explain this: for(let i=0; i < array.length; i++) { ... }?", 
        A: "Set i to zero; while i is less than the length of the array, run the code; then increment i by one.",
        B: "Please allow i to be zero; point array.length at i; add two i's.", 
        C: "Set i to zero; while i is greater than the length of the array, run the code; then increment i by one.", 
        D: "Set i to zero; while i is less than the length of the array, increment i by one; then run the code.",
        correct: "A",
    },
    {
        name: "Question #9",
        question: "What is a method?", 
        A: "An interview technique involving answering questions with deep, rapid-fire personal questions",
        B: "A variable with no objective value", 
        C: "A function that is the value of an object's property", 
        D: "Most of the characters from the hit TV series Breaking Bad",
        correct: "C",
    },
    {
        name: "Question #10",
        question: "What is a class?", 
        A: "A material used for making windows",
        B: "A template for creating objects", 
        C: "An object used for increased site security", 
        D: "A local storage container",
        correct: "B",
    }
];


//runs if user choice was correct. Changes class of choice div to green, ups round number, then runs endGame function or the next displayRound function
const correctFunc = (chosenLetter) => {
    if(chosenLetter === "A"){
        answerA.setAttribute("class", "correctColor");
    } else if(chosenLetter === "B"){
        answerB.setAttribute("class", "correctColor");
    } else if(chosenLetter === "C"){
        answerC.setAttribute("class", "correctColor");
    } else if(chosenLetter === "D"){
        answerD.setAttribute("class", "correctColor");
    }
    roundNum++;
    console.log(roundNum);
    if(time <= 0 || roundNum === 10){
        endGame();
    } else {
        setTimeout(displayRound, 1200);
    }
}

//runs if user choice was incorrect. Changes class of choice div to red and correct div to green, ups round number, then runs endGame function or the next displayRound function
const incorrectFunc = (chosenLetter, correctLetter) => {
    if(chosenLetter === "A"){
        answerA.setAttribute("class", "incorrectColor");
    } else if(chosenLetter === "B"){
        answerB.setAttribute("class", "incorrectColor");
    } else if(chosenLetter === "C"){
        answerC.setAttribute("class", "incorrectColor");
    } else if(chosenLetter === "D"){
        answerD.setAttribute("class", "incorrectColor");
    }
    if(correctLetter === "A"){
        answerA.setAttribute("class", "correctColor");
    } else if(correctLetter === "B"){
        answerB.setAttribute("class", "correctColor");
    } else if(correctLetter === "C"){
        answerC.setAttribute("class", "correctColor");
    } else if(correctLetter === "D"){
        answerD.setAttribute("class", "correctColor");
    }
    time = time - 10;
    roundNum++;
    console.log(roundNum);
    if(time <= 0 || roundNum === 10){
        endGame();
    } else {
        setTimeout(displayRound, 1200);
    }
}

//4 functions- one for each possible answer choice. If clicked div matches the round's answer, run correctFunction with chosen div as parameter.
//If clicked div does not match that round's answer, run incorrect answer function with chosen answer and correct answer as parameters
const responseA = (event) => {
    event.preventDefault();
    if(questionBank[roundNum].correct === "A"){
        correctFunc("A");
    } else {
        incorrectFunc("A", questionBank[roundNum].correct);
    }
}

const responseB = (event) => {
    event.preventDefault();
    if(questionBank[roundNum].correct === "B"){
        correctFunc("B");
    } else {
        incorrectFunc("B", questionBank[roundNum].correct);
    }
}

const responseC = (event) => {
    event.preventDefault();
    if(questionBank[roundNum].correct === "C"){
        correctFunc("C");
    } else {
        incorrectFunc("C", questionBank[roundNum].correct);
    }
}

const responseD = (event) => {
    event.preventDefault();
    if(questionBank[roundNum].correct === "D"){
        correctFunc("D");
    } else {
        incorrectFunc("D", questionBank[roundNum].correct);
    }
}

//takes user response by listening for clicks on answer divs, runs corresponding function based on which answer is picked 
const takeResponse = () => {
    answerA.addEventListener("click", responseA);
    answerB.addEventListener("click", responseB);
    answerC.addEventListener("click", responseC);
    answerD.addEventListener("click", responseD);
}

//resets answer box classes to default class (resetting color), displays next round's question and answer content, runs takeResponse function
const displayRound = () => {
    answerA.setAttribute("class", "answer")
    answerB.setAttribute("class", "answer")
    answerC.setAttribute("class", "answer")
    answerD.setAttribute("class", "answer")
    question.textContent = `${questionBank[roundNum].name}: ` + questionBank[roundNum].question;
    answerA.textContent = "A: " + questionBank[roundNum].A;
    answerB.textContent = "B: " + questionBank[roundNum].B;
    answerC.textContent = "C: " + questionBank[roundNum].C;
    answerD.textContent = "D: " + questionBank[roundNum].D;
    takeResponse();
};
    
const displayHighScore = () => {
    userName = nameInput.value
    displayUserName.textContent = `${userName}: ${time} points`;
    highScoreDiv.appendChild(displayUserName);
    document.getElementById('name-input').value = "";
}

const enterHighScore = () => {
    nameLabel.textContent = `Your final score is ${time}. Enter your name: `;
    nameButton.textContent = "Submit";
    nameLabel.setAttribute("for", "name-input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name-input");

    explanationP.remove();

    highScoreDiv.appendChild(nameLabel);
    highScoreDiv.appendChild(nameInput);
    highScoreDiv.appendChild(nameButton);

    nameButton.addEventListener("click", displayHighScore);
    console.log(nameInput.value);
}



const endGame = () => {
    console.log("The game is over")
    clearInterval(myInterval);
    if(time < 0){
        time = 0;
        timer.textContent = time;
    }
    question.textContent = "";
    answerA.textContent = "";
    answerB.textContent = "";
    answerC.textContent = "";
    answerD.textContent = "";
    answerA.removeAttribute("class");
    answerB.removeAttribute("class");
    answerC.removeAttribute("class");
    answerD.removeAttribute("class");

    timerDiv.setAttribute("class", "timer-div-gold");
    enterHighScore();
    document.getElementById("start").disabled = false;
};

const reset = () => {
    time = 90;
    timer.textContent = time;
    timerDiv.setAttribute("class", "timer-div");
    highScoreDiv.appendChild(explanationP);
    highScoreDiv.remove();
    highScoreDiv.remove();
    highScoreDiv.remove();
}

const startGame = (event) => {
    event.preventDefault();
    document.getElementById("start").disabled = true;
    displayRound();
    controlTimer();
    console.log("working");
};

startButton.addEventListener('click', startGame);