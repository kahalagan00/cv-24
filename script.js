"use strict";

// Updates year in the footer
const footerDate = document.querySelector(".footer-date");
const date = new Date();
footerDate.textContent = `© ${date.getFullYear()}`;
