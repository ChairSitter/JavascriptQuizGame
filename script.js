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
        question: "What year was JavaScript invented?", 
        A: "2015",
        B: "1995", 
        C: "1988", 
        D: "1990",
        correct: "B",
    },
    {
        name: "Question 1",
        question: "What year was JavaScript invented?", 
        A: "2015",
        B: "1995", 
        C: "1988", 
        D: "1990",
        correct: "B",
    }
]

console.log(questionBank[0].B, questionBank[0].correct);

const controlTimer = () => {
    const decrementTime = () => {
        time--;
        timer.textContent = time; 
        if(time === 0){
            clearInterval(myInterval);
        }
    }
    let myInterval = setInterval(decrementTime, 1000);

}



const game = (event) => {
    event.preventDefault();
    controlTimer();
    console.log("working");
}

startButton.addEventListener('click', game);