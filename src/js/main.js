import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

import { getParkData } from './parkService.mjs';

const parkData = getParkData();

// 1. Update the disclaimer link and text
const disclaimerLink = document.querySelector(".disclaimer > a");
disclaimerLink.href = parkData.url;
disclaimerLink.innerHTML = parkData.fullName;

// 2. Update the page title (the text in the browser tab)
document.title = parkData.fullName;

// 3. Update the hero image (using the first image in the data list)
const heroImage = document.querySelector(".hero-banner > img");
// Assuming the data structure follows the standard NPS API format
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

// 4. Update the park name, designation, and states using a template
function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);