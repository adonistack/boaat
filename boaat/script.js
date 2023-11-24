
import { locations } from './data/locations.js';
import { logos } from './data/logos.js';

  const locationCardContainer = document.querySelector(".gallery .card-container");
  const logoCardContainer = document.querySelector(".our-customers .card-container");
  
  function createAndAppendCard(container, data, isLocation = true) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const image = document.createElement("img");
    image.src = isLocation ? data.image : data.src;
    image.alt = data.alt || '';

    const tagName = document.createElement("div")
    tagName.classList.add("tag")
  
    const textElement = document.createElement("h3");
    textElement.textContent = isLocation ? data.address : data.alt;
  
    // Append the h3 to the new div
  tagName.appendChild(textElement);

  // Append the image and the new div to the card
  card.appendChild(image);
 if (isLocation) {
    card.appendChild(tagName);
  }

  // Append the card to the container
  container.appendChild(card);
  }
  
  locations.forEach(location => createAndAppendCard(locationCardContainer, location));
  logos.forEach(logo => createAndAppendCard(logoCardContainer, logo, false));
  
  function scrollCards(container) {
    const firstCard = container.firstElementChild;
    container.appendChild(firstCard.cloneNode(true));
    container.removeChild(firstCard);
  }
  
  setInterval(() => scrollCards(locationCardContainer), 2300);
  setInterval(() => scrollCards(logoCardContainer), 2300);
  

document.getElementById('current-year').textContent = new Date().getFullYear();


document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cleanUp = document.querySelector('.clean-up');
        const cleanDown = document.querySelector('.clean-down');

        if (cleanUp && cleanDown) {
          cleanUp.classList.add('animate');
          cleanDown.classList.add('animate');
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 // Adjust as needed
  });

  const section = document.querySelector('.why-choose-us');
  if (section) {
    observer.observe(section);
  }
});
