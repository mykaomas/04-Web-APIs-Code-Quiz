const startButton = document.getElementById('start-btn');
const landingPage = document.getElementById('landing-container');
const questionsPage = document.getElementById('questions-container');
const timerEl = document.getElementById('countdown');
const highscorePage = document.getElementById('highscores-container');
const displayMsgEl = document.getElementById('display-msg');
const scoreEl = document.getElementById('final-score');
const initialsInput = document.getElementById('name-input');
const clearButton = document.querySelector('#clear-btn');
const holdHighScores = document.querySelector('#hold-scores')


let secLeft = 75;
let score = 0;
let currentQuestionIndex = 0;
let penalty = 15
let timerInterval;
let allScores = JSON.parse(localStorage.getItem('allScores')) || [];

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
        // Resets choices removes previous event listener
        choiceElement.replaceWith(choiceElement.cloneNode(true));

        choiceElement = document.querySelectorAll('.choices')[index];

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
    clearInterval(timerInterval);
    // Reset the timer to zero
    secLeft = 0;

    // Show highscores screen
    // Hide questions page
    questionsPage.classList.add('hidden');
    // Show high score page
    highscorePage.classList.remove('hidden');
    // Show score to user
    scoreEl.textContent = ('Your final score is: ' + score);
}


// For highscores
function gameEnded() {
    //  Retrieve user initials
    let userInitials = initialsInput.value;
    // Retrieve user score
    let userScore = score; 

    //  Store user's initials and score in array
    allScores.push({ initials: userInitials, score: userScore });
    localStorage.setItem('allScores', JSON.stringify(allScores));
}

// Display high scores on the highscores page
document.addEventListener('DOMContentLoaded', function() {
    const allScores = JSON.parse(localStorage.getItem('allScores')) || [];

    // Sort high scores from highest to lowest
    allScores.sort((a, b) => b.score - a.score);

    // Display the scores
    allScores.forEach((player, index) => {
    const rank = index + 1;
    
    const userEl = document.createElement('section');
    // Adds user rank, initials and score
    userEl.textContent = `${rank}. ${player.initials}: ${player.score}`;
    // Append element to add in inititals and score
    holdHighScores.appendChild(userEl);
    });
});

// Erase all scores from page and local storage
function deleteScores() {
    const secEl = document.querySelectorAll('div')
    secEl.forEach((div) => {
        div.remove();
    });
    localStorage.clear();
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