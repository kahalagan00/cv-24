"use strict";

// Updates year in the footer
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;

// EXPERIENCE FUNCTIONALITY
const experiences = document.querySelectorAll(".experience__title");

// const workExperienceBox = document.querySelector(
//   ".experience__visual-descriptionbox-work"
// );
// const technologiesExperience = document.querySelector(
//   ".experience__visual-descriptionbox-technologies"
// );
// const educationExperience = document.querySelector(
//   ".experience__visual-descriptionbox-education"
// );
// const languagesExperience = document.querySelector(
//   ".experience__visual-descriptionbox-languages"
// );

const experiencePhotoBox = document.querySelector(
  ".experience__visual-photobox"
);
const experienceImage = document.getElementById("experienceImgEl");

const experienceDescriptionBox = document.querySelector(
  ".experience__visual-descriptionbox"
);
const experienceDescription = document.querySelector(
  ".experience__visual-descriptionbox-description"
);

const expandButton = document.querySelector(".btn");
const photoBoxExpand = "experience__visual-photobox--expand";
const descriptionBoxExpand = "experience__visual-descriptionbox--expand";

experiences.forEach(function (experience) {
  experience.addEventListener("mouseover", function (e) {
    e.preventDefault();
    console.log(experience.textContent);

    experiencePhotoBox.classList.remove(photoBoxExpand);
    experienceDescriptionBox.classList.remove(descriptionBoxExpand);
    experienceImage.src = `./assets/svg/${experience.textContent.toLowerCase()}.svg`;
    const experienceItems = document.querySelectorAll(
      ".experience__visual-descriptionbox-item"
    );
    experienceItems.forEach((item) => item.classList.add("u-hidden"));
  });

  experience.addEventListener("click", function (e) {
    e.preventDefault();
    experiencePhotoBox.classList.add(photoBoxExpand);
    experienceDescriptionBox.classList.add(descriptionBoxExpand);
    const selected = experience.textContent.toLowerCase();
    console.log(selected);

    document
      .querySelector(`.experience__visual-descriptionbox-${selected}`)
      .classList.remove("u-hidden");
  });
});

// expandButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(`Expand button clicked`);
//   experiencePhotoBox.classList.add(photoBoxExpand);
//   experienceDescriptionBox.classList.add(descriptionBoxExpand);
//   experienceDescription.textContent = selectedDescription;
// });
