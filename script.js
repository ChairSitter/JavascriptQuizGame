//Start button calls the main game function
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