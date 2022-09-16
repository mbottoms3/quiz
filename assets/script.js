
var timer = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var questionBox = document.querySelector(".question-box");
//declare a variable for right/wrong answer message
var selectionResponse = document.querySelector(".selection-response");
var secondsRemaining = 60;

//maybe var questionIndex will go somewhere more useful



var questions = [
  {
    question: "text1",
    answers: ["a1", "a2", "a3", "a4"], 
    correctAnswer: "a1"
  },

  {
    question: "text2",
    answers: ["a1", "a2", "a3", "a4"], 
    correctAnswer: "a1"
  },

  {
    question: "text3",
    answers: ["a1", "a2", "a3", "a4"], 
    correctAnswer: "a1"
  },

  {
    question: "text4",
    answers: ["a1", "a2", "a3", "a4"], 
    correctAnswer: "a1"
  }
];
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


function questionStart() {
  var questionIndex = 0;
  if (questionIndex) {
    showQuestion();
  }
  // if () {
  //   //condition should be userAnswer = true
  //   correctAnswer();
  // } else {
  //   wrongAnswer();
    
  }
    //target questionBox and put the questions array in it  
    }


    // console.log(questions);



function correctAnswer() {
  selectionResponse.textContent = "Correct!";
}

function wrongAnswer() {
  
  selectionResponse.textContent = "Incorrect!";
}

function showQuestion() {
  var userChoice = 
  questionBox.textContent = questions; 
  
}

function gameEnd() {
  //write function to end the game and allow user to save initials in local memory(?) with their score
  //have to grab the score and initials from locmem and display it on the page
} 


startButton.addEventListener("click", ()=> {
  setTime();
  questionStart();
});





