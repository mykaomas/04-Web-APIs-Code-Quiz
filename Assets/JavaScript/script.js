// Create variable to hide first section
let landingPage = document.querySelector("#landing-page");
let questionsPage = document.querySelector("questions");
let timerEl = document.querySelector('#countdown')


let secLeft = 75

function startGame() {
// Hides landing page once button is pressed
    console.log('button pressed');
    landingPage.style.display = "none";

// Starts the countdown of the timer
    console.log('timer started')
    let timeLeft = setInterval(function() {
    secLeft--;
    timerEl.textContent = secLeft;

    if(secLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timeLeft);
    //   // Calls function to create and append image
    //   sendMessage();
    //
    }

  }, 1000);


}

// Put questions into an object

// const firstQuestions = [
//     {
//         prompt: 'Commonly Used Data Types DO NOT include: ',
//         choices: ['string', 'boolean', 'numbers', 'alerts'],
//         answer: 'alerts'
//     }
// ]

// const secondQuestions = [
//     {
//         prompt: 'The condition in an if / else statement is enclosed within _____. ',
//         choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
//         answer: 'parentheses'
//     }
// ]

// const thirdQuestions = [
//     {
//         prompt: 'Arrays in JavaScript can be used to store ______. ',
//         choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
//         answer: 'alerts'
//     }
// ]

// const fouthQuestions = [
//     {
//         prompt: 'String values must be enclosed within _______ when being assigned to variables.',
//         choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
//         answer: 'quotes'
//     }
// ]

