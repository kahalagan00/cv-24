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

const expLotties = document.querySelectorAll(".experience__description-lottie");

let specific_exp = `default`;

expandButton.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`Button clicked!`);

  if (expandButton.textContent[0] === "O") {
    expandButton.textContent = "Close details";

    setTimeout(() => {
      document
        .querySelector(`.experience__description-${specific_exp}`)
        .classList.add("experience__description--active");
      expLotties.forEach((lottie) =>
        lottie.classList.remove("experience__description-lottie-hidden")
      );
    }, 200);
  } else {
    setTimeout(() => {
      expLotties.forEach((lottie) =>
        lottie.classList.add("experience__description-lottie-hidden")
      );
      expDescriptions.forEach((description) =>
        description.classList.remove("experience__description--active")
      );
    }, 200);

    expandButton.textContent = "Open details";
  }

  expPhotoBox.classList.toggle("experience__visual-photobox--expand");
  expDescriptionBox.classList.toggle(
    "experience__visual-descriptionbox--expand"
  );
});

experiences.forEach(function (exp) {
  exp.addEventListener("click", function (e) {
    e.preventDefault();
    experiences.forEach(function (exp2) {
      if (exp2 !== exp) {
        exp2.classList.remove("experience__list-item--active");
      }
    });
    exp.classList.add("experience__list-item--active");

    expandButton.textContent = "Open details";
    expPhotoBox.classList.remove("experience__visual-photobox--expand");
    expDescriptionBox.classList.remove(
      "experience__visual-descriptionbox--expand"
    );

    specific_exp = exp.firstElementChild.textContent
      .toLowerCase()
      .split(" ")
      .join("")
      .split("\n")
      .join("");

    if (specific_exp === "experience") specific_exp = "default";

    console.log(`<--${specific_exp}-->`);

    expImage.src = `/assets/svg/${specific_exp}.svg`;
  });
});
