"use strict";

const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = date.getFullYear();

const DEVELOPER_INTRO = "Hello! I'm Joshmar";
const titleToType = document.getElementById("demo-typer");
let i = 0;
let reverse = false;
let speed = 50;

const typeWriter = function () {
  if (i < DEVELOPER_INTRO.length) {
    titleToType.innerHTML += DEVELOPER_INTRO.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

typeWriter();
