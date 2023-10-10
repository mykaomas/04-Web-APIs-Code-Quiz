// Create variables needed in fucnctions
const startButton = document.getElementById("start-btn");
const landingPage = document.getElementById("landing-container");
const questionsPage = document.getElementById("questions-container");
const timerEl = document.querySelector('countdown');
const questionsEl = document.getElementById('questions');

let secLeft = 75;
let score = 0;
let questionIndex = 0;

// Clicking start quiz button activates game
startButton.addEventListener('click', startGame);

function startGame() {
    // Verify game started backend
    console.log('Game started');
    // Hides Landing page by adding hidden to class
    landingPage.classList.add('hidden');
    // Removed the hidden class from element
    questionsPage.classList.remove('hidden');
    showQuestions()
}

let timeLeft = setInterval(function() {
    secLeft--;
    timerEl.textContent = secLeft;
    console.log('timer started')
    
    if(secLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeLeft);
        //   // Calls function to create and append image
        //   sendMessage();
        //
    
        }
    
      }, 1000);

function nextQuestion(){
    showQuestions()
}

function showQuestions(questions){
    questionsEl.innerText = quizQuestions.prompt;
}

// currentQshown(quizQuestions[questionIndex]);
    // let questionNum = questionIndex + 1;
    // questionsEl = questionNum + '. ' + currentQshown.prompt;

// Starts the countdown of the timer
//     let timeLeft = setInterval(function() {
//     secLeft--;
//     timerEl.textContent = secLeft;
//     console.log('timer started')

//     if(secLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timeLeft);
//     //   // Calls function to create and append image
//     //   sendMessage();
//     //

//     }

//   }, 1000);


// Put questions into an object array
const quizQuestions = [
    {
      prompt: 'Commonly Used Data Types DO NOT include: ',
      choices: [
        { text: 'string', answer: false },
        { text: 'boolean', answer: false },
        { text: 'numbers', answer: false },
        { text: 'alerts', answer: true },
      ]
    },
    {
      prompt: 'The condition in an if / else statement is enclosed within _____. ',
      choices: [
        { text: 'quotes', answer: false },
        { text: 'curly brackets', answer: false },
        { text: 'parentheses', answer: true },
        { text: 'square brackets', answer: false },
      ]
    },
    {
      prompt: 'Arrays in JavaScript can be used to store ______. ',
      choices: [
        { text: 'numbers and strings', answer: false },
        { text: 'other arrays', answer: false },
        { text: 'booleans', answer: false },
        { text: 'all of the above', answer: true },
      ]
    },
    {
      prompt: 'String values must be enclosed within _______ when being assigned to variables.',
      choices: [
        { text: 'commas', answer: false },
        { text: 'curly brackets', answer: false },
        { text: 'quotes', answer: true },
        { text: 'parentheses', answer: false },
      ]
    }
];


// function showQuestions(quests){

//     // Select element
//     let questionsTitle = document.getElementById('questions-title');

//     // Modify element
//     questionsTitle.textContent = quests.prompt;

//     // Selecting all choices by query
//     let choices = document.querySelectorAll('.choices');

//     choices.forEach(function(element, index){
//         element.textContent = quests.choices[index];

//             element.addEventListener('click', function(){
//                 // Check if question user picked is correct
//                 if(quests.answer == index){
//                     console.log('Correct!');
//                 }
//                 else {
//                     console.log('Incorrect!')
//                 }
//             });
//     });
// }

// showQuestions(quizQuestions);

