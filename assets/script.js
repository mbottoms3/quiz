
var timer = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box")
var secondsRemaining = 60;

var questions = ["q1", "q2", "q3", "q4", "q5"];
// console.log(questions);


function setTime() {
    
    // Sets interval in variable
    var quizTimer = setInterval(function() {
      secondsRemaining--;
      timer.textContent = secondsRemaining + " seconds remaining in the quiz.";
  
      if(secondsRemaining === 0) {
        // Stops execution of action at set interval
        clearInterval(quizTimer);
        timer.textContent = "Time is up!";
        // Calls function to create and append image
        gameEnd();
      }
  
    }, 1000);
  }
//onClick to start game?

function questionEl() {
    //target questionBox and put the questions array in it
    
    for (var i = 0; i < questions.length; i++) {
        questionBox.textContent = questions[i];
        if (i===true) {
            
        } else {
            
        }
        
    }


    console.log(questions);
}
// function gameEnd() {
//     //write function to end the game and allow user to save initials in local memory(?) with their score
//     //have to grab the score and initials from locmem and display it on the page
// } 


// startButton.addEventListener("click", setTime());  

//can i pass multiple functions to ^ like questionEl
//no the syntax doesn't work that way
startButton.addEventListener("click", setTime());
startButton.addEventListener("click", questionEl());