"use strict";

// FOOTER FUNCTIONALITY
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;

// EXPERIENCE FUNCTIONALITY
const experiences = document.querySelectorAll(".experience__list-item");
const expPhotoBox = document.querySelector(".experience__visual-photobox");
const expImage = document.querySelector(".experience__photo");
const expDescriptionBox = document.querySelector(
  ".experience__visual-descriptionbox"
);
const expDescriptions = document.querySelectorAll(".experience__description");
const expandButton = document.querySelector(".experience__button");

let specific_exp = `work`;

expandButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`Button clicked!`);

  if (expandButton.textContent[0] === "O") {
    expandButton.textContent = "Close details";
  } else expandButton.textContent = "Open details";

  expPhotoBox.classList.toggle("experience__visual-photobox--expand");
  expDescriptionBox.classList.toggle(
    "experience__visual-descriptionbox--expand"
  );

  expDescriptions.forEach((description) =>
    description.classList.remove("experience__description--active")
  );

  document
    .querySelector(`.experience__description-${specific_exp}`)
    .classList.add("experience__description--active");
});

experiences.forEach(function (exp) {
  exp.addEventListener("mouseover", function (e) {
    e.preventDefault();
    expPhotoBox.classList.remove("experience__visual-photobox--expand");
    expDescriptionBox.classList.remove(
      "experience__visual-descriptionbox--expand"
    );
    specific_exp = exp.firstElementChild.textContent.toLowerCase();
    expImage.src = `/assets/svg/${specific_exp}.svg`;
  });
});
