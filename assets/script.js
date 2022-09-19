const startButton = document.querySelector('.start-button');
const nextButton = document.querySelector('.next-button');
const questionBox = document.querySelector('.question-container');
const questionEl = document.querySelector('.question-display');
const answerButtons = document.querySelector('.answer-buttons');
const responseEl = document.querySelector('.selection-response');
// console.log(responseEl);
var timer = document.querySelector(".timer-count");
let secondsRemaining = 60;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})

function startGame() {
  setTime()
  startButton.classList.add('hide')
  // console.log('started');
  
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionBox.classList.remove('hide')
  nextQuestion()

}

function setTime() {
    
  // Sets interval in variable
  var quizTimer = setInterval(() => {
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

function nextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtons.appendChild(button)
  } )
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer(event) {
  const selectedButton = event.target
  const correct = selectedButton.dataset.correct
  setStatusClass(responseEl, correct)
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}


// come back to this one
function setStatusClass(element, correct) {
  if (correct) {
    element.textContent = "Correct!"
  } else {
    element.textContent = "Incorrect"
  }
}




const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '2', correct: false},
      { text: '3', correct: false},
      { text: '44', correct: false}
    ]
  },
  {
    question: 'What is this quiz made with?',
    answers: [
      { text: 'Love', correct: false},
      { text: 'Bootstrap', correct: false},
      { text: 'Javascript', correct: true},
      { text: 'Node', correct: false}
    ]
  },
  {
    question: 'Who are you?',
    answers: [
      { text: 'Not sure', correct: false},
      { text: 'Im Toby', correct: false},
      { text: 'Test taker', correct: true},
      { text: 'Over this', correct: false}
    ]
  },
  {
    question: 'This quiz is pretty okay',
    answers: [
      { text: 'False', correct: false },
      { text: 'True', correct: true}
    ]
  },
]



























// var startButton = document.querySelector(".start-button");
// var questionBox = document.querySelector(".question-box");
// //declare a variable for right/wrong answer message
// var selectionResponse = document.querySelector(".selection-response");


// //maybe var questionIndex will go somewhere more useful



// var questions = [
//   {
//     question: "text1",
//     answers: ["a1", "a2", "a3", "a4"], 
//     correctAnswer: "a1"
//   },

//   {
//     question: "text2",
//     answers: ["a1", "a2", "a3", "a4"], 
//     correctAnswer: "a1"
//   },

//   {
//     question: "text3",
//     answers: ["a1", "a2", "a3", "a4"], 
//     correctAnswer: "a1"
//   },

//   {
//     question: "text4",
//     answers: ["a1", "a2", "a3", "a4"], 
//     correctAnswer: "a1"
//   }
// ];
// // console.log(questions);






// function questionStart() {
//   var questionIndex = 0;
//   if (questionIndex) {
//     showQuestion();
//   }
//   // if () {
//   //   //condition should be userAnswer = true
//   //   correctAnswer();
//   // } else {
//   //   wrongAnswer();
    
//   }
//     //target questionBox and put the questions array in it  
//     }


//     // console.log(questions);



// function correctAnswer() {
//   selectionResponse.textContent = "Correct!";
// }

// function wrongAnswer() {
  
//   selectionResponse.textContent = "Incorrect!";
// }

// function showQuestion() {
//   var userChoice = 
//   questionBox.textContent = questions; 
  
// }

// function gameEnd() {
//   //write function to end the game and allow user to save initials in local memory(?) with their score
//   //have to grab the score and initials from locmem and display it on the page
// } 


// startButton.addEventListener("click", ()=> {
//   setTime();
//   questionStart();
// });





