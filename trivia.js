// all variables

const choices = Array.from(document.getElementsByClassName('choice'))
let questionContent = document.querySelector('.question').textContent
let correctAnswer
const questions = []
const questionAnswers = []
const correctAnswers = []
let score = 0

//steamline adding trivia questions

function addQuestion (question, incorrectOne, incorrectTwo, correct) {
  const answersArrayLength = questionAnswers.length
  questions.push(question)
  questionAnswers.push([])
  correctAnswers.push(correct)
    questionAnswers[answersArrayLength].push(incorrectOne)
    questionAnswers[answersArrayLength].push(incorrectTwo)
    questionAnswers[answersArrayLength].push(correct)
}

//trivia questions and answers

addQuestion('Which grade is Daniel in?', '9th', '11th', '10th');
addQuestion("Which month is Daniel's birthday month?", 'August', 'January', 'December');
addQuestion("How many siblings does Daniel have?", "One brother", "Two brothers", "One sister");
addQuestion('Which city does Daniel live in?', 'Toronto', 'Boston', 'New York City');

//when a choice is clicked (did indivual functions to remove need for function parameters)

function choiceZeroClicked () {
  if (choices[0].textContent === correctAnswer) {
    score = score + 1;
    choices[0].style.backgroundColor = 'green'
  } else {
    choices[0].style.backgroundColor = 'red'
}
document.querySelector('.score').textContent = `Current score: ${score}`;
document.querySelector('#next-button').style.display = 'block';
choices.forEach(choice => {
  choice.disabled = true;
})
}

choices[0].addEventListener('click', choiceZeroClicked);

function choiceOneClicked () {
  if (choices[1].textContent === correctAnswer) {
    score = score + 1;
    choices[1].style.backgroundColor = 'green'
  } else {
    choices[1].style.backgroundColor = 'red'
}
document.querySelector('.score').textContent = `Current score: ${score}`;
document.querySelector('#next-button').style.display = 'block';
choices.forEach(choice => {
  choice.disabled = true;
})
}

choices[1].addEventListener('click', choiceOneClicked);


function choiceTwoClicked () {
  if (choices[2].textContent === correctAnswer) {
    score = score + 1;
    choices[2].style.backgroundColor = 'green'
  } else {
    choices[2].style.backgroundColor = 'red'
}
document.querySelector('.score').textContent = `Current score: ${score}`;
document.querySelector('#next-button').style.display = 'block';
choices.forEach(choice => {
  choice.disabled = true;
})
}

choices[2].addEventListener('click', choiceTwoClicked);


//new question function

function newQuestion () {
  choices.forEach(choice => {
    choice.disabled = false;
    choice.style.backgroundColor = '#00000011'
  })
  const questionNum = Math.floor(Math.random() * questions.length)
  document.querySelector('.question').textContent = questions[questionNum]
  let numberOfThree = Math.floor(Math.random() * 3)
  correctAnswer = correctAnswers[questionNum]
  switch (numberOfThree) {
    case 0:
    choices[0].textContent = questionAnswers[questionNum][0]
    choices[1].textContent = questionAnswers[questionNum][1]
    choices[2].textContent = questionAnswers[questionNum][2]
    break;
    case 1:
    choices[1].textContent = questionAnswers[questionNum][0]
    choices[2].textContent = questionAnswers[questionNum][1]
    choices[0].textContent = questionAnswers[questionNum][2]
    break;
    case 2:
    choices[2].textContent = questionAnswers[questionNum][0]
    choices[0].textContent = questionAnswers[questionNum][1]
    choices[1].textContent = questionAnswers[questionNum][2]
    break;
  }
}

//start game

function start () {
choices.forEach(choice => {
choice.style.display = "inline-block";
})
document.querySelector('#start-button').style.display = 'none';
newQuestion()
}

//next question

function next () {
document.querySelector('#next-button').style.display = 'none';
newQuestion()
}


//tagging start and next functions to their respective buttons
document.querySelector('#start-button').addEventListener('click', start)
document.querySelector('#next-button').addEventListener('click', next)

//testing testing 123
console.log(questionAnswers)
console.log(questions)
