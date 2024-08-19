"use strict";

// FOOTER FUNCTIONALITY
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;

// EXPERIENCE FUNCTIONALITY
const experiences = document.querySelectorAll(".experience__title");

const experiencePhotoBox = document.querySelector(
  ".experience__visual-photobox"
);
const experienceImage = document.getElementById("experienceImgEl");

const experienceDescriptionBox = document.querySelector(
  ".experience__visual-descriptionbox"
);
const experienceItems = document.querySelectorAll(
  ".experience__visual-descriptionbox-item"
);
const experienceDescription = document.querySelector(
  ".experience__visual-descriptionbox-description"
);

const expandButton = document.querySelector(".experience__visual-button");
const photoBoxExpand = "experience__visual-photobox--expand";
const descriptionBoxExpand = "experience__visual-descriptionbox--expand";
let currentExperience = "default";

experiences.forEach(function (experience) {
  experience.addEventListener("mouseover", function (e) {
    e.preventDefault();
    expandButton.textContent = `Open details`;
    flipCard(0);
    experienceImage.src = `./assets/svg/${experience.textContent.toLowerCase()}.svg`;
    currentExperience = experience.textContent.toLowerCase();
    // Hide all experiences again
    experienceItems.forEach((item) => item.classList.add("u-hidden"));
  });
});

function flipCard(page) {
  if (page === 0) {
    experiencePhotoBox.classList.remove(photoBoxExpand);
    experienceDescriptionBox.classList.remove(descriptionBoxExpand);
  } else if (page === 1) {
    // Only show text for recently hovered experience
    document
      .querySelector(`.experience__visual-descriptionbox-${currentExperience}`)
      .classList.remove("u-hidden");
    experiencePhotoBox.classList.add(photoBoxExpand);
    experienceDescriptionBox.classList.add(descriptionBoxExpand);
  }
}

expandButton.addEventListener("click", function (e) {
  e.preventDefault();
  const state = expandButton.textContent.split(" ")[0].toLowerCase();
  if (state === "close") {
    flipCard(0);
    expandButton.textContent = `Open details`;
    setTimeout(function () {
      // Hide all experiences again
      experienceItems.forEach((item) => item.classList.add("u-hidden"));
    }, 300);
    return;
  }

  flipCard(1);
  expandButton.textContent = `Close details`;
});
