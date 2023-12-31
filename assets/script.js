//Get HTML elements, create HTML elements, set to variables, initiate variables 
const startButton = document.querySelector("#start");
const playAgain = document.createElement("button");
playAgain.textContent = "PLAY AGAIN";
playAgain.setAttribute("id", "playAgain");
const aside = document.querySelector("#aside");

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

nameButton.textContent = "Submit";
nameLabel.setAttribute("for", "name-input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name-input");

const clearButton = document.createElement("button");
clearButton.textContent = "Clear scores";

const displayUserName = document.createElement("p");

let time = 90;
let roundNum = 0;
let myInterval;
let userName;
let userTime;

//bank of questions (array of objects)
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

//Create and control timer, call end game function if time reaches 0
const controlTimer = () => {
    const decrementTime = () => {
        time--;
        timer.textContent = time;
        if (time <= 0) {
            endGame();
            clearInterval(myInterval);
        }
    }
    myInterval = setInterval(decrementTime, 1000);
};

//runs if user choice was correct. Changes class of choice div to green, ups round number, then runs endGame function or the next displayRound function
const correctFunc = (chosenLetter) => {
    answerA.removeEventListener("click", responseA);
    answerB.removeEventListener("click", responseB);
    answerC.removeEventListener("click", responseC);
    answerD.removeEventListener("click", responseD);
    if (chosenLetter === "A") {
        answerA.setAttribute("class", "correctColor");
    } else if (chosenLetter === "B") {
        answerB.setAttribute("class", "correctColor");
    } else if (chosenLetter === "C") {
        answerC.setAttribute("class", "correctColor");
    } else if (chosenLetter === "D") {
        answerD.setAttribute("class", "correctColor");
    }
    roundNum++;
    if (time <= 0 || roundNum === 10) {
        setTimeout(endGame, 1200);
    } else {
        setTimeout(displayRound, 1200);
    }
}

//runs if user choice was incorrect. Changes class of choice div to red and correct div to green, ups round number, 
//decrements time by 10 for incorrect answer, then runs endGame function or the next displayRound function if game over criteria met
const incorrectFunc = (chosenLetter, correctLetter) => {
    answerA.removeEventListener("click", responseA);
    answerB.removeEventListener("click", responseB);
    answerC.removeEventListener("click", responseC);
    answerD.removeEventListener("click", responseD);
    if (chosenLetter === "A") {
        answerA.setAttribute("class", "incorrectColor");
    } else if (chosenLetter === "B") {
        answerB.setAttribute("class", "incorrectColor");
    } else if (chosenLetter === "C") {
        answerC.setAttribute("class", "incorrectColor");
    } else if (chosenLetter === "D") {
        answerD.setAttribute("class", "incorrectColor");
    }
    if (correctLetter === "A") {
        answerA.setAttribute("class", "correctColor");
    } else if (correctLetter === "B") {
        answerB.setAttribute("class", "correctColor");
    } else if (correctLetter === "C") {
        answerC.setAttribute("class", "correctColor");
    } else if (correctLetter === "D") {
        answerD.setAttribute("class", "correctColor");
    }
    time = time - 10;
    roundNum++;
    if (time <= 0 || roundNum === 10) {
        setTimeout(endGame, 1200);
    } else {
        setTimeout(displayRound, 1200);
    }
}

//4 functions- one for each possible answer choice. If clicked div matches the round's answer, run correctFunction with chosen div as parameter.
//If clicked div does not match that round's answer, run incorrect answer function with chosen answer and correct answer as parameters
const responseA = (event) => {
    if (questionBank[roundNum].correct === "A") {
        correctFunc("A");
    } else {
        incorrectFunc("A", questionBank[roundNum].correct);
    }
}

const responseB = (event) => {
    if (questionBank[roundNum].correct === "B") {
        correctFunc("B");
    } else {
        incorrectFunc("B", questionBank[roundNum].correct);
    }
}

const responseC = (event) => {
    if (questionBank[roundNum].correct === "C") {
        correctFunc("C");
    } else {
        incorrectFunc("C", questionBank[roundNum].correct);
    }
}

const responseD = (event) => {
    if (questionBank[roundNum].correct === "D") {
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

//resets answer box classes to default class (resetting color from red/green), displays next round's question and answer content, runs takeResponse function
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

//resets variables to run a new game. Starts functions needed to begin a new game. 
const reset = (event) => {
    roundNum = 0;
    time = 90;
    timer.textContent = time;
    timerDiv.setAttribute("class", "timer-div");
    playAgain.style.visibility = "hidden";
    highScoreDiv.removeChild(clearButton);
    displayRound();
    controlTimer();
}

//contains functionality to clear local storage when user clicks clear button
const clearScores = () => {
    localStorage.clear();
    message = "";
    displayUserName.textContent = message;
}

const storeDisplayHighScore = () => {
    //gets string from local storage and turns it into an array of objects
    //if storage is clear, creates a new array
    //pushes new name and score data object into new array
    let storageData = localStorage.getItem("saveData");
    if (storageData) {
        storageData = JSON.parse(storageData);
    } else {
        storageData = [];
    }
    storageData.push({ name: nameInput.value, time: time });

    //sorts data objects by the value of the time variable, to make an ordered high score list
    const compareScores = (a, b) => {
        if (a.time > b.time) {
            return -1;
        }
        if (a.time < b.time) {
            return 1;
        }
        return 0;
    }
    storageData.sort(compareScores);

    //makes a new string out of the array of objects, sends string to local storage
    let stringifiedData = JSON.stringify(storageData);
    localStorage.setItem("saveData", (stringifiedData));
    let message = "";

    //Displays list of 5 highest scores on the page
    let lengthLimit;
    if (storageData.length > 5) {
        lengthLimit = 5;
    } else {
        lengthLimit = storageData.length;
    }
    for (let i = 0; i < lengthLimit; i++) {
        message = message + `#${i + 1} ${storageData[i].name}: ${storageData[i].time} points `;
    }
    displayUserName.textContent = message;

    //manages addition, deletion, and visiblity of elements related to high score functionality
    explanationP.remove();
    document.getElementById("start").style.display = "none";
    highScoreDiv.appendChild(displayUserName);

    clearButton.addEventListener("click", clearScores);
    highScoreDiv.appendChild(clearButton);

    document.getElementById('name-input').value = "";
    aside.appendChild(playAgain);

    playAgain.style.visibility = "visible";
    nameLabel.style.visibility = "hidden";
    nameInput.style.visibility = "hidden";
    nameButton.style.visibility = "hidden";

    //allows user to play game again by running reset function
    playAgain.addEventListener("click", reset);
}

//creates label, text input, and button, and makes these visible in subsequent playthroughs. Runs store/display high score function
const enterHighScore = () => {
    nameLabel.textContent = `Your final score is ${time}. Enter your name/initials: `;

    highScoreDiv.appendChild(nameLabel);
    highScoreDiv.appendChild(nameInput);
    highScoreDiv.appendChild(nameButton);

    nameLabel.style.visibility = "visible";
    nameInput.style.visibility = "visible";
    nameButton.style.visibility = "visible";
    highScoreDiv.style.visibility = "visible";

    nameButton.addEventListener("click", storeDisplayHighScore);
}

//stops clock from decrementing seconds. Ensures time does not end lower than 0. Resets classes and text of all answer divs.
//Makes timer look like a gold medal. Runs enter high score function
const endGame = () => {
    clearInterval(myInterval);
    if (time < 0) {
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

    timer.textContent = time;
    timerDiv.setAttribute("class", "timer-div-gold");
    enterHighScore();
};

//hides "play game" button, begins timer function and display round functon to start a new game.
const startGame = (event) => {
    startButton.style.visibility = "hidden";
    displayRound();
    controlTimer();
};

//user click runs startGame function to begin a new game.
startButton.addEventListener('click', startGame);