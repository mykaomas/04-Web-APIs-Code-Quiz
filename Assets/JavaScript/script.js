const startButton = document.getElementById('start-btn');
const landingPage = document.getElementById('landing-container');
const questionsPage = document.getElementById('questions-container');
const timerEl = document.getElementById('countdown');
const highscorePage = document.getElementById('highscores-container');
const displayMsgEl = document.getElementById('display-msg');
const scoreEl = document.getElementById('final-score');
const initialsInput = document.querySelector('#name');

let secLeft = 75;
let score = 0;
let currentQuestionIndex = 0;
let penalty = 15
let timerInterval;

// Clicking start quiz button activates game
startButton.addEventListener('click', startGame);

function timeStart(){
    secLeft--;
    timerEl.textContent = secLeft;
    console.log('Timer')
    if(secLeft <= 0) {
        endGame();
    }
};

function startGame() {
    // Verify game started backend
    console.log('Game started');
    // Hides Landing page by adding hidden to class
    landingPage.classList.add('hidden');
    // Removed the hidden class from element
    questionsPage.classList.remove('hidden');

    timerInterval = setInterval(timeStart, 1000);
    
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
                    console.log('Correct!');
                    // Increases score
                    displayMsgEl.textContent = 'Correct!';
                    score++;
                }
                else {
                console.log('Incorrect!');
                // Gives user penalty
                displayMsgEl.textContent = 'WRONG!';
                secLeft -= penalty;                
            }
                // Displays message to user if they got it wrong/right for a second
                displayMsgEl.setAttribute('class', 'msg');
                setTimeout(function () {
                displayMsgEl.setAttribute('class', 'msg hidden');

                // Cycle through quiz questions array and show them to user and once completed end game 
                currentQuestionIndex++;
                if(currentQuestionIndex < quizQuestions.length){
                showQuestions(quizQuestions[currentQuestionIndex]);
                }
                else {
                    endGame();
                }
            }, 1000);
    });
})
};

function endGame() {
    // Stop the timer
clearInterval(timerInterval);

    // Show highscores screen
    // Hide questions page
    questionsPage.classList.add('hidden');
    // Show high score page
    highscorePage.classList.remove('hidden');
    // Show score to user
    scoreEl.textContent = ('Your final score is: ' + score);

    var savedName = initialsInput.value;

    // Store user inititals
    localStorage.setItem('inititals', savedName);

    // Store user score
    localStorage.setItem('user score', score);

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