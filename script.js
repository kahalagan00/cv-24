"use strict";

/////////////////////////////////////////////////////////////////////////
// UTILITY CLASSES
const HIDE = "u-hidden";

/////////////////////////////////////////////////////////////////////////
// HEADER SECTION
const LONG_DEV_INTRO = "Hello! I am Joshmar 👋🏻";
const SHORT_DEV_INTRO = "Hi! I'm Josh 👋🏻";
const headerIntro = document.querySelector(
  ".header__introductionbox"
).firstElementChild;

function updateSize() {
  if (Number(window.innerWidth) <= 1200) {
    headerIntro.textContent = SHORT_DEV_INTRO;
    // console.log("went here!");
  } else {
    headerIntro.textContent = LONG_DEV_INTRO;
  }
}

window.addEventListener("resize", updateSize);

/////////////////////////////////////////////////////////////////////////
// EXPERIENCE SECTION
const EXP_MAP = new Map([
  ["work", "work"],
  ["technical", "tech"],
  ["education", "edu"],
  ["languages", "lang"],
]);
// const EXP_WORK_KEY = ["work", "work"];
// const EXP_TECHNICAL_KEY = ["technical", "tech"];
// const EXP_EDUCATION_KEY = ["education", "edu"];
// const EXP_LANGUAGE_KEY = ["language", "lang"];
// const workDescription = document.querySelector(".experience__description-work");
// const techDescription = document.querySelector(".experience__description-tech");
// const eduDescription = document.querySelector(".experience__description-edu");
// const langDescription = document.querySelector(".experience__description-lang");
const allDescription = document.querySelectorAll(".experience__description");

const expTitles = document.querySelectorAll(".experience__title");

function removeAllTitleSelection() {
  expTitles.forEach((title) =>
    title.classList.remove("experience__title--active")
  );
}

function hideAllDescription() {
  allDescription.forEach((descrption) => {
    descrption.classList.add("u-hidden");
  });
}

expTitles.forEach(function (title) {
  title.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllTitleSelection();
    title.classList.add("experience__title--active");

    const selection = title.firstElementChild.textContent.toLowerCase();
    const currentDescription = document.querySelector(
      `.experience__description-${EXP_MAP.get(selection)}`
    );
    console.log(selection);
    console.log(currentDescription);
    hideAllDescription();
    currentDescription.classList.remove("u-hidden");
  });
});

/////////////////////////////////////////////////////////////////////////
// PROJECTS SECTION
// const projCardDescription = document.querySelector(
//   ".project__card-description"
// );
// const projCardPhotobox = document.querySelector(".project__card-photobox");

// projCardPhotobox.addEventListener("mouseover", function (e) {
//   e.preventDefault();
//   projCardDescription.classList.remove(HIDE);
// });

// projCardPhotobox.addEventListener("mouseout", function (e) {
//   e.preventDefault();
//   projCardDescription.classList.add(HIDE);
// });

/////////////////////////////////////////////////////////////////////////
// RESOURCES SECTION

/////////////////////////////////////////////////////////////////////////
// INTERESTS SECTION

/////////////////////////////////////////////////////////////////////////
// FOOTER SECTION
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;
