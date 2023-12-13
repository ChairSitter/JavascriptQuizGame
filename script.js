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

const timer = document.querySelector("#timer");

let time = 60;
let roundNum = 0;

const questionBank = [
    {
        name: "Question 1",
        question: "What year was JavaScript invented?", 
        A: "2015",
        B: "1995", 
        C: "1988", 
        D: "1990",
        correct: "B",
    }, 
    {
        name: "Question 2",
        question: "Which variable declaration keyword prevents reassignment of the variable?", 
        A: "var",
        B: "let", 
        C: "const", 
        D: "putnam",
        correct: "C",
    },
    {
        name: "Question 3",
        question: "What method allows the developer to read a custom message in DevTools?", 
        A: "console.log()",
        B: "message.read()", 
        C: "developer.text()", 
        D: "script.java()",
        correct: "A",
    },
    {
        name: "Question 4",
        question: "What is the official language name of JavaScript?", 
        A: "PageScript",
        B: "Doug's cool language", 
        C: "Java", 
        D: "ECMAScript",
        correct: "D",
    },
    {
        name: "Question 5",
        question: "Which three are all data types?", 
        A: "string, number, boolean",
        B: "bingo, numeric, string", 
        C: "boonsky, numrod, strang", 
        D: "straang, noomber, billean",
        correct: "A",
    },
    {
        name: "Question 6",
        question: "What does JavaScript contribute to a website?", 
        A: "Content and order",
        B: "Interactivity", 
        C: "Styles and display rules", 
        D: "JavaScript is the lazy moocher of the web",
        correct: "B",
    },
    {
        name: "Question 7",
        question: "How do you write an arrow function?", 
        A: "const funName ==========> { ... }",
        B: "const funName (arrow) { ... }", 
        C: "const arrow = arrowFunction (arrow) { I like arrows }", 
        D: "const funName = () => { ... }",
        correct: "D",
    },
    {
        name: "Question 8",
        question: "Explain this: for(let i=0; i < array.length; i++) { ... }?", 
        A: "Set i to zero; while i is less than the length of the array, run the code; then increment i by one.",
        B: "Please allow i to be zero; point array.length at i; add two i's.", 
        C: "Set i to zero; while i is greater than the length of the array, run the code; then increment i by one.", 
        D: "Set i to zero; while i is less than the length of the array, increment i by one; then run the code.",
        correct: "D",
    },
    {
        name: "Question 9",
        question: "What is a method?", 
        A: "An interview technique involving answering questions with deep, rapid-fire personal questions",
        B: "A variable with no objective value", 
        C: "A function that is the value of an object's property", 
        D: "Most of the characters from the hit TV series Breaking Bad",
        correct: "C",
    },
    {
        name: "Question 10",
        question: "What is a class?", 
        A: "A material used for making windows",
        B: "A template for creating objects", 
        C: "An object used for increased site security", 
        D: "A local storage container",
        correct: "D",
    }
];

const displayQuestion = () => {
    question.textContent = `#${roundNum + 1}: ` + questionBank[roundNum].question;
    answerA.textContent = "A: " + questionBank[roundNum].A;
    answerB.textContent = "B: " + questionBank[roundNum].B;
    answerC.textContent = "C: " + questionBank[roundNum].C;
    answerD.textContent = "D: " + questionBank[roundNum].D;
    roundNum++;
};

const responseA = (event) => {
    event.preventDefault();
    if()
}

const responseB = (event) => {
    event.preventDefault();

}

const responseC = (event) => {
    event.preventDefault();

}

const responseD = (event) => {
    event.preventDefault();

}

const takeResponse = () => {
    answerA.addEventListener("click", responseA);
    answerB.addEventListener("click", responseB);
    answerC.addEventListener("click", responseC);
    answerD.addEventListener("click", responseD);

}

const controlTimer = () => {
    const decrementTime = () => {
        time--;
        timer.textContent = time; 
        if(time <= 0){
            clearInterval(myInterval);
        }
    }
    let myInterval = setInterval(decrementTime, 1000);
};

const endGame = () => {

};

const game = (event) => {
    event.preventDefault();
    controlTimer();
    displayQuestion();
    console.log("working");
};

startButton.addEventListener('click', game);