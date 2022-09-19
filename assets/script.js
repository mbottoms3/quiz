// Targets for event handlers and displaying text
const startButton = document.querySelector('.start-button');
const nextButton = document.querySelector('.next-button');
const questionBox = document.querySelector('.question-container');
const questionEl = document.querySelector('.question-display');
const answerButtons = document.querySelector('.answer-buttons');
const responseEl = document.querySelector('.selection-response');
var timer = document.querySelector(".timer-count");
let secondsRemaining = 60;
// Questions will move through these
let shuffledQuestions, currentQuestionIndex

// Event handlers 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})

// Function that is called on click to begin quiz
function startGame() {
  setTime()
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionBox.classList.remove('hide')
  nextQuestion()

}

// Function for the timer
function setTime() {
    
  // Sets interval in variable
  var quizTimer = setInterval(() => {
    secondsRemaining--;
    timer.textContent = secondsRemaining + " seconds remaining in the quiz.";

    if(secondsRemaining === 0) {
      // Stops execution of action at set interval
      clearInterval(quizTimer);
      timer.textContent = "Time is up!";
      // add a function to end the game and allow user to input initials
    }

  }, 1000);
}

// Resets after each question 
function nextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Shows question and checks to see if the users guess is correct
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


// come back to this one, try to refactor
function setStatusClass(element, correct) {
  if (correct) {
    element.textContent = "Correct!"
  } else {
    element.textContent = "Incorrect"
  }
}



// Questions/answer array
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