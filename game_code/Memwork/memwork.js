"use strict";

const startGame = function () {
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  level = 0;
};

const checkAnswer = function (currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("GAME OVER. Press any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
};

const nextSequence = function () {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
};

const animatePress = function (currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

const playSound = function (name) {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
};

const startOver = function () {
  level = 0;
  gamePattern = [];
  started = false;
};

/* End of functions */

const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern;
let userClickedPattern;
let started;
let level;

startGame();

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// alert(
//   "How to play : Click on the proper tiles shown. For each level, you have to perform the past sequence correctly along with the new one shown."
// );
