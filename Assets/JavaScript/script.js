// Create variable to hide first section
let hideLandingPage = document.querySelector("#landing-page");

// Hides first section once botton is pressed
function hideFirstSec() {
    console.log('button pressed')
    if (hideLandingPage.style.display === "none") {
    hideLandingPage.style.display = "block";
    } else {
    hideLandingPage.style.display = "none";
    }
}

