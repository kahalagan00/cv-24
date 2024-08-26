"use strict";

// FOOTER FUNCTIONALITY
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;

// UTILITY CLASSES
const HIDE = "u-hidden";

// HEADER SECTION
const LONG_DEV_INTRO = "Hello! I am Joshmar 👋🏻";
const SHORT_DEV_INTRO = "Hi! I'm Josh 👋🏻";
const headerIntro = document.querySelector(
  ".header__introductionbox"
).firstElementChild;
console.log(headerIntro);

function updateSize() {
  if (Number(window.innerWidth) <= 1200) {
    headerIntro.textContent = SHORT_DEV_INTRO;
    console.log("went here!");
  } else {
    headerIntro.textContent = LONG_DEV_INTRO;
  }
}

window.addEventListener("resize", updateSize);
