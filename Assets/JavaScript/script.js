const startButton = document.getElementById('start-btn');
const landingPage = document.getElementById('landing-container');
const questionsPage = document.getElementById('questions-container');
const timerEl = document.getElementById('countdown');
const highscorePage = document.getElementById('highscores-container');
const displayMsgEl = document.getElementById('display-msg');
const scoreEl = document.getElementById('final-score')

let secLeft = 75;
let score = 0;
let currentQuestionIndex = 0;
let penalty = 15
let timerInterval;

// Clicking start quiz button activates game
startButton.addEventListener('click', startGame);
// let jsonString = "{key: value}";
// let object = JSON.parse(jsonString);
// let backToJson = JSON.stringify(object);

function startGame() {
    // Verify game started backend
    console.log('Game started');
    // Hides Landing page by adding hidden to class
    landingPage.classList.add('hidden');
    // Removed the hidden class from element
    questionsPage.classList.remove('hidden');

        timerInterval = setInterval(function() {
        secLeft--;
        timerEl.textContent = secLeft;
        console.log('Timer')
        if(secLeft <= 0) {
            endGame();
        
          }
        }, 1000)
    
          // show question
          showQuestions(quizQuestions[currentQuestionIndex])
};

function showQuestions(quests){
    console.log('Questions Start')
    // Select element
    let questionsTitle = document.getElementById('questions-title');

    // Modify element
    questionsTitle.textContent = quests.prompt;

    // Selecting all choices by query
    let choicesElement = document.querySelectorAll('.choices');

    choicesElement.forEach(function(choiceElement, index){
        choiceElement.textContent = quests.choices[index];

            choiceElement.addEventListener('click', function(){
                // Check if question user picked is correct
                if(quests.answer == index){
                    alert('Correct!');
                    // increase score
                    score++
                }
                else {
                alert('Incorrect!');
                // give penalty
                secLeft -= penalty;                
            }
                currentQuestionIndex++;
                if(currentQuestionIndex < quizQuestions.length){
                showQuestions(quizQuestions[currentQuestionIndex]);
                }
                else {
                    endGame();
                }
            });
    });
}

function endGame() {
    // stop the timer
 clearInterval(timerInterval);

    // show highscores screen
    questionsPage.classList.add('hidden');
    highscorePage.classList.remove('hidden');
    scoreEl.textContent = 'Your final score is: ' + score
}

var quizQuestions = [
    {
    prompt: 'Commonly Used Data Types DO NOT include: ',
    choices: [ '1. string', '2. boolean', '3. numbers', '4. alerts' ], 
    answer: 3,
    },
    {
    prompt: 'The condition in an if / else statement is enclosed within _____. ',
    choices: [ '1. quotes', '2. curly brackets', '3. parentheses', '4. square brackets' ],
    answer: 2,
    },
    {
        prompt: 'Arrays in JavaScript can be used to store ______. ',
        choices: [ '1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above' ],
        answer: 3, 
    },
    {
        prompt: 'String values must be enclosed within _______ when being assigned to variables.',
        choices: [ '1. commas', '2. curly brackets', '3. quotes', '4. parentheses' ],
        answer: 2,
    },
];


