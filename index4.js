// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = "2359";
let attempts = 3;

// DOM ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

// Show game view
function showGame() {
  //You can use this function to display the Game view
  attempts = 3;
  passwordInput.value = "";
  instructionLabel.textContent = "Enter your code :";
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function showWin() {
  // You can use this function to diplay the  Win view
  hide(passwordView);
  show(wonView);
}

function showLost() {
  //You can use this function to display the lost View
  hide(passwordView);
  show(lostView);
}

function handleCheck() {
  //Manage your logic when the button is pressed
  const userInput = passwordInput.value;
  if (userInput === SECRET_CODE) {
    showWin();
  } else {
    attempts--;
    if (attempts > 0) {
      instructionLabel.textContent = `Wrong code! ${attempts} attempts left.`;
    } else {
      showLost();
    }
  }
}

function handleEnterPassword(event) {
  if (event.key === "Enter") {
    handleCheck();
  }
}

// MAIN   --------------------------------------------------------
showGame();
