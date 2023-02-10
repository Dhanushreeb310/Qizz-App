const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 4 + 2?',
    answers: [
      { text: '6', correct: true },
      { text: '8', correct: false }
    ]
  },
  {
    question: 'Which company developed the first mobile phone?',
    answers: [
      { text: 'Motorola', correct: true },
      { text: 'Nokia', correct: false },
      { text: 'Apple', correct: false },
      { text: 'Samsung', correct: false }
    ]
  },
  {
    question: 'What does A.I. stand for?',
    answers: [
      { text: 'Artificial information', correct: false },
      { text: 'Artificial intelligence', correct: true },
      { text: 'Anti intelligence', correct: false },
      { text: 'Anti information', correct: false }
    ]
  },
  {
    question: 'What is a short range wireless communication technology called?',
    answers: [
      { text: 'Wifi', correct: false },
      { text: 'Internet', correct: false },
      { text: 'Bluetooth', correct: true },
      { text: 'Radio', correct: false }
    ]
  },
  {
    question: 'What do I need to get an information from the world wide web?',
    answers: [
      { text: 'Browser', correct: false },
      { text: 'Computer ', correct: false },
      { text: 'Internet Connection', correct: false },
      { text: 'All of the Above', correct: true }
    ]
  },
  
  {
    question: '__________ is a spreadsheet programme',
    answers: [
      { text: 'MS Excel', correct: true },
      { text: 'MS Word', correct: false },
      { text: 'Notepad', correct: false },
      { text: 'MS PowerPoint', correct: false }
    ]
  },
  {
    question: 'Term E-mail stands for?',
    answers: [
      { text: 'Emergency mail', correct: false },
      { text: 'Extra mail', correct: false },
      { text: 'External mail', correct: false },
      { text: 'Electronic mail', correct: true }
    ]
  },
  {
    question: 'Website is a collection of',
    answers: [
      { text: 'Audio files', correct: false },
      { text: 'HTML files', correct: true },
      { text: 'Video files', correct: false},
      { text: 'Image files', correct: false }
    ]
  },
  {
    question: 'Which HTML tag is used to define an internal style sheet?',
    answers: [
      { text: '<script>', correct: false },
      { text: '<css>', correct: false },
      { text: '<style>', correct: true },
      { text: 'None of these', correct: false }
    ]
  },
  {
    question: 'Array index always start from',
    answers: [
      { text: '1', correct: false },
      { text: '0', correct: true },
      { text: '3', correct: false },
      { text: '2', correct: false }
    ]
  }
]