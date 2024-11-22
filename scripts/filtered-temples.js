// get the last modified date
let lastModified = document.lastModified

document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

// store elements that are going to be used
const mainnav = document.querySelector('.menu')
const hambutton = document.querySelector('.menu_button');

// 
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');

  if (hambutton.innerHTML == "=")
    hambutton.innerHTML = "x";
  else
    hambutton.innerHTML = "=";
});

// temple object array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

function renderTemple(temple) {
  console.log(temple);
  // Long Code Method
  // const templeList = document.getElementById("templeList");
  // const templeDiv = document.createElement("div");
  // const templeImg = document.createElement("img");
  // const templeName = document.createElement("p");
  // const templeLoc = document.createElement("p");
  // const templeDed = document.createElement("p");
  // const templeArea = document.createElement("p");

  // templeDiv.classList = ["temple_div"];

  // templeImg.src = temple.imageUrl;
  // templeImg.loading = "lazy";
  // templeImg.width = "400";
  // templeImg.height = "250";
  // templeImg.alt = temple.templeName;

  // templeName.textContent = temple.templeName;
  // templeLoc.innerHTML = "<strong>Location: </strong>" + temple.location;
  // templeDed.textContent = temple.dedicated;
  // templeArea.textContent = temple.area;

  // templeDiv.appendChild(templeImg);
  // templeDiv.appendChild(templeName);
  // templeDiv.appendChild(templeLoc);
  // templeDiv.appendChild(templeDed);
  // templeDiv.appendChild(templeArea);

  // templeList.appendChild(templeDiv);

  // Short Code Method - Preferable
  document.getElementById("templeList").innerHTML += `<div class="temple_div">
    <img src="${temple.imageUrl}" loading="lazy" width="400" height="250" alt="${temple.templeName}">
    <p><strong>${temple.templeName}</strong></p>
    <p><strong>Location: </strong>${temple.location}</p>
    <p><strong>Dedicated: </strong>${temple.dedicated}</p>
    <p><strong>Area: </strong>${temple.area}</p>
  </div>`;
}

temples.forEach(renderTemple);

const oldLink = document.querySelector("#old")
const newLink = document.querySelector("#new")
const largeLink = document.querySelector("#large")
const smallLink = document.querySelector("#small")
const homeLink = document.querySelector("#home")

homeLink.addEventListener("click", () => {
  document.getElementById("templeList").innerHTML = "";
  temples.forEach(renderTemple);
});

oldLink.addEventListener("click", () => {
  document.getElementById("templeList").innerHTML = "";
  const oldTemples = temples.filter(temple => temple.dedicated.includes("18"));
  oldTemples.forEach(renderTemple);
});

newLink.addEventListener("click", () => {
  document.getElementById("templeList").innerHTML = "";
  const newTemples = temples.filter(temple => temple.dedicated.includes("20"));
  newTemples.forEach(renderTemple);
});

largeLink.addEventListener("click", () => {
  document.getElementById("templeList").innerHTML = "";
  const largeTemples = temples.filter(temple => temple.area > 90000);
  largeTemples.forEach(renderTemple);
});

smallLink.addEventListener("click", () => {
  document.getElementById("templeList").innerHTML = "";
  const smallTemples = temples.filter(temple => temple.area < 10000);
  smallTemples.forEach(renderTemple);
});