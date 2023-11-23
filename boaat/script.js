const locations = [
    {
      image: "access/location1.jpg",
      address: `"עולי הגרדום 22 ת"א"`
    },
    {
      image: "access/location2.jpg",
      address: "האלוף דוד 6 ראשון לציון"
    },
    {
      image: "access/location3.jpg",
      address: `"הרוגי המלכות 10 ת"א"`
    },
    {
      image: "access/location4.jpg",
      address: "רחוב האנפה 6 טירת הכרמל"
    },
    {
      image: "access/location5.jpg",
      address: "הברוש 8 באר יעקב"
    }
  ];  
  
const logos = [
    {
        src: "access/logo1.jpg",
        alt: "רם אדום"
    },
    {
        src: "access/logo2.jpg",
        alt: "ברומי פרוקים"
    },
    {
        src: "access/logo3.jpg",
        alt: "א.ח.ס כוח אדם ובניה"
    },
    {
        src: "access/logo4.jpg",
        alt: "פדלין לבניה"
    },
    {
        src: "access/logo5.jpg",
        alt: "רוטשטיין"
    },
    {
        src: "access/logo6.jpg",
        alt: "שטרן"
    },
    {
        src: "access/logo7.jpg",
        alt: "צרפתי צבי ובניו"
    },
  ];
  
  const locationCardContainer = document.querySelector(".gallery .card-container");

  for (const location of locations) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const image = document.createElement("img");
    image.src = location.image;
  
    const address = document.createElement("h3");
    address.textContent = location.address;
  
    card.appendChild(image);
    card.appendChild(address);
    locationCardContainer.appendChild(card);
  }
  const logoContainer = document.querySelector(".our-customers .card-container");

  for (const logo of logos) {
        const card = document.createElement("div");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = logo.src;
        image.alt = logo.alt;

        const companyName = document.createElement("h3");
        companyName.textContent = logo.alt;

        card.appendChild(image);
        card.appendChild(companyName);
        logoContainer.appendChild(card);
  }

  function createDots(number) {
    const dotsContainer = document.querySelectorAll('.carousel-dots');
    for (let i = 0; i < number; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        // Add event listener to each dot for navigation
        dotsContainer.appendChild(dot);
    }
}

createDots(locations.length );


document.getElementById('current-year').textContent = new Date().getFullYear();
