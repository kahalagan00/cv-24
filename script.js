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
    // console.log(selection);
    // console.log(currentDescription);
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
const INTERESTS_MAP = new Map([
  ["video games", "games"],
  ["resistance training", "resistance"],
  ["language learning", "languages"],
]);
const SVG_SELECT_ACTIVE = "interests__menubox--active";
const TEXT_SELECT_ACTIVE = "interests__menutext--active";
const menuSelectSvg = document.querySelectorAll(".interests__menubox");
const menuSelectText = document.querySelectorAll(".interests__menutext");
const interestArtboxes = document.querySelectorAll(".interests__artbox");
const interestArtsAll = document.querySelectorAll(".interests__art");
const interestArtsGames = document.querySelectorAll(".interests__art-games");
const interestArtsResistance = document.querySelectorAll(
  ".interests__art-resistance"
);
const interestArtsLanguages = document.querySelectorAll(
  ".interests__art-languages"
);
const gamesCarouselBtnLeft = document.querySelectorAll(".carousel-btn-game")[0];
const gamesCarouselBtnRight =
  document.querySelectorAll(".carousel-btn-game")[1];
const resistanceCarouselBtnLeft = document.querySelectorAll(
  ".carousel-btn-resistance"
)[0];
const resistanceCarouselBtnRight = document.querySelectorAll(
  ".carousel-btn-resistance"
)[1];
const languagesCarouselBtnLeft = document.querySelectorAll(
  ".carousel-btn-languages"
)[0];
const languagesCarouselBtnRight = document.querySelectorAll(
  ".carousel-btn-languages"
)[1];
let carouselOffset = 0; // Determines the translateX offset for the carousels
let wideScreen = Number(window.innerWidth) <= 720 ? false : true;

const removeAllSvgActive = function () {
  menuSelectSvg.forEach((svg) => svg.classList.remove(SVG_SELECT_ACTIVE));
};

const removeAllTextActive = function () {
  menuSelectText.forEach((text) => text.classList.remove(TEXT_SELECT_ACTIVE));
};

const hideAllArtboxes = function () {
  interestArtboxes.forEach((artbox) => artbox.classList.add(HIDE));
};

const grabArt = function (key) {
  // console.log("GRABBING THE ART");
  switch (INTERESTS_MAP.get(key)) {
    case "games":
      return interestArtsGames;

    case "resistance":
      return interestArtsResistance;

    case "languages":
      return interestArtsLanguages;
  }
};

const changeArtbox = function (key) {
  const artbox = document.querySelector(
    `.interests__artbox-${INTERESTS_MAP.get(key)}`
  );
  // console.log(`Changing Artbox to ${key}`);
  hideAllArtboxes();
  artbox.classList.remove(HIDE);
};

const shiftArt = function (arts) {
  // Records the initial translateX position of the first image
  // The next images determines their positions base on this value
  let firstInitial;
  if (Number(window.innerWidth) <= 720) {
    arts.forEach((art, i) => {
      if (i === 0) {
        firstInitial = -50 - 200 * (i + carouselOffset);
        art.style.transform = `translateX(${
          -50 - 200 * (i + carouselOffset)
        }%)`;
      } else {
        art.style.transform = `translateX(${firstInitial + 200 * i}%)`;
      }
    });
  }
};

const shiftArtsLeft = function (arts) {
  if (carouselOffset - 1 >= 0) {
    carouselOffset--;
  }
  shiftArt(arts);
};

const shiftArtsRight = function (arts) {
  if (carouselOffset + 1 < 3) {
    carouselOffset++;
  }
  shiftArt(arts);
};

//When the page loads initially make sure the images are lined up
const alignArts = function (arts) {
  if (Number(window.innerWidth) <= 720) {
    arts.forEach((art, i) => {
      art.style.transform = `translateX(${-50 + 200 * i}%)`;
    });
  } else {
    arts.forEach((art) => {
      art.style.transform = `translateX(0%)`;
    });
  }
};

const alignArtsAll = function () {
  alignArts(interestArtsGames);
  alignArts(interestArtsResistance);
  alignArts(interestArtsLanguages);
};

// Initializations
alignArtsAll();

menuSelectSvg.forEach((svg) => {
  svg.addEventListener("click", function (e) {
    e.preventDefault();
    carouselOffset = 0;
    removeAllSvgActive();
    svg.classList.add(SVG_SELECT_ACTIVE);

    // Make sure text options are selected in the desktop version as well
    removeAllTextActive();
    menuSelectText.forEach((text) => {
      if (text.dataset.name === svg.dataset.name) {
        text.classList.add(TEXT_SELECT_ACTIVE);
      }
    });

    const key = svg.dataset.name.toLowerCase();
    // Get data name from the element
    // Show correct interest artbox depending on what interest is selected
    changeArtbox(key);

    alignArts(grabArt(key));
  });
});

menuSelectText.forEach((text) => {
  text.addEventListener("click", function (e) {
    e.preventDefault();
    carouselOffset = 0;
    removeAllTextActive();
    text.classList.add(TEXT_SELECT_ACTIVE);

    // Make sure icons are selected in the mobile version as well
    removeAllSvgActive();
    menuSelectSvg.forEach((svg) => {
      if (svg.dataset.name === text.dataset.name) {
        svg.classList.add(SVG_SELECT_ACTIVE);
      }
    });

    const key = text.dataset.name.toLowerCase();
    // Show correct interest artbox depending on what interest is selected
    changeArtbox(key);

    alignArts(grabArt(key));
  });
});

// Carousel implementation activate when screen width is <= 720px
// During resize
window.addEventListener("resize", function (e) {
  // Checks if the screen recently went from >720 to <=720 and vice-versa
  if (wideScreen && Number(window.innerWidth) <= 720) {
    alignArtsAll();
    wideScreen = false;
  } else if (!wideScreen && Number(window.innerWidth) > 720) {
    alignArtsAll();
    wideScreen = true;
  }
});

// Buttons functionality
gamesCarouselBtnLeft.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsLeft(interestArtsGames);
});
gamesCarouselBtnRight.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsRight(interestArtsGames);
});

resistanceCarouselBtnLeft.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsLeft(interestArtsResistance);
});

resistanceCarouselBtnRight.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsRight(interestArtsResistance);
});

languagesCarouselBtnLeft.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsLeft(interestArtsLanguages);
});

languagesCarouselBtnRight.addEventListener("click", function (e) {
  e.preventDefault();
  shiftArtsRight(interestArtsLanguages);
});

/////////////////////////////////////////////////////////////////////////
// NAVBAR SECTION
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

/////////////////////////////////////////////////////////////////////////
// FOOTER SECTION
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;
