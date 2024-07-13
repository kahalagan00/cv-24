"use strict";
import figures from "./figures.js";

/**
 * Author: Joshmar Morales
 * Last updated: June 20, 2024
 */

const startGame = function () {
  displayMainImage();
  displayCurrentYear();
  displayBirthYear();
  displayAttempts(`Attempts: ${tries}`);
  displayHighScore();
};

const resetGame = function () {
  tries = 10;
  win = false;
  birthYear = generateRandomBirthYear();
  currentAge = currentYear - birthYear;
  document.querySelector(".guess").value = "";
  displayStatus("");
  displayAttempts(`Attempts: ${tries}`);
  displayEnding("");
  displayCurrentYear();
  displayBirthYear();
  displayMainImage();
  statusColor("white", "white");
  showInformation(false);
};

const checkInput = function () {
  const guess = Number(guessTextBox.value);

  if (tries > 0 && !win) {
    if (guess <= 0) {
      displayStatus("Enter a non-zero positive number please.");
    } else if (guess === currentAge) {
      displayStatus("EXCELLENT!!! You got it right 🥳");
      statusColor("#2dff54", "#87eba4");
      showInformation(true);
      win = true;
    } else if (guess < currentAge) {
      displayStatus("I am older than that! ⬆️");
      tries--;
    } else if (guess > currentAge) {
      displayStatus("I am younger than that! ⬇️");
      tries--;
    }
  }

  if (tries === 0) {
    displayStatus("You ran out of attempts...");
    statusColor("red", "#eb879c");
  }

  if (tries === 0 || win) {
    if (tries > highScore) {
      highScore = tries;
    }
    displayHighScore();
    displayEnding("Please press the reset button to restart the game");
  }

  displayAttempts(`Attempts: ${tries}`);
};

const showInformation = function (win) {
  if (win) {
    figureName.classList.remove("hidden");
    figureDescription.classList.remove("hidden");
  } else {
    figureName.classList.add("hidden");
    figureDescription.classList.add("hidden");
  }
};

const displayMainImage = function () {
  const personIndex = Math.trunc(Math.random() * 3);
  let century;
  let centuryGroup;
  const figureGroup = [...figures];

  century = Math.floor((birthYear - 1) / 100) + 1;

  centuryGroup = figureGroup[century - 1];

  mainImage.src = `./century${century}/${centuryGroup[personIndex].name}/pfp.jpg`;

  figureName.textContent = centuryGroup[personIndex].name;

  figureDescription.textContent = centuryGroup[personIndex].description;
};

const displayHighScore = function () {
  document.querySelector(".highscore").textContent = `${highScore}`;
};

const displayCurrentYear = function () {
  document.querySelector(".current-year").textContent = `${currentYear}`;
};

const displayBirthYear = function () {
  document.querySelector(".born-year").textContent = birthYear;
};

const generateRandomBirthYear = function () {
  return Math.trunc(Math.random() * currentYear) + 1;
};

const displayStatus = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayAttempts = function (message) {
  document.querySelector(".attempts").textContent = message;
  document.querySelector(".attempts").style.color = tries > 0 ? "green" : "red";
};

const displayEnding = function (message) {
  document.querySelector(".ending").textContent = message;
};

const statusColor = function (buttonColor, backgroundColor) {
  guessTextBox.style.backgroundColor = buttonColor;
  document.body.style.backgroundColor = backgroundColor;
};

// End of functions

const mainImage = document.querySelector(".figure-photo");
const figureName = document.querySelector(".figure-name");
const figureDescription = document.querySelector(".figure-description");
const guessTextBox = document.querySelector(".guess");
const submitButton = document.querySelector(".check");
const resetButton = document.querySelector(".reset");
const date = new Date();
const currentYear = date.getFullYear();
let highScore = 0;
let win = false;
let tries = 10;
let birthYear = generateRandomBirthYear();
let currentAge = currentYear - birthYear;

guessTextBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkInput();
  }
});

submitButton.addEventListener("click", function () {
  checkInput();
});

resetButton.addEventListener("click", function () {
  resetGame();
  console.log(`answer: ${currentAge}`); // Uncomment to debug and see answers in console :)
});

startGame();
console.log(`answer: ${currentAge}`); // Uncomment to debug and see answers in console :)
