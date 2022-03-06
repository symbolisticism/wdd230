const requestURL =
  "https://symbolisticism.github.io/wdd230/chamber/js/data.json";
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject;
    businesses.forEach(displayBusinesses);
  });

function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let title = document.createElement("div");
  let picture = document.createElement("img");
  let address = document.createElement("div");
  let phone = document.createElement("div");
  let anchor = document.createElement("a");

  // give the card a class
  card.setAttribute("class", "cardclass");

  // get the title
  title.textContent = `${business.name}`;
  title.setAttribute("class", "line");

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  picture.setAttribute("src", business.icon);
  picture.setAttribute("alt", `Picture of ${business.name}`);
  picture.setAttribute("loading", "lazy");
  picture.setAttribute("class", "cardimg");

  // pouplate the address using the JSON file
  address.textContent = `${business.address}`;
  address.setAttribute("class", "line");

  // pouplate the phone number using the JSON file
  phone.textContent = `${business.phone}`;
  phone.setAttribute("class", "line");

  // make the anchor tag
  anchor.setAttribute(
    "href",
    "https://symbolisticism.github.io/wdd230/chamber"
  );
  anchor.setAttribute("target", "_blank");
  anchor.setAttribute("class", "line");
  anchor.textContent = `${business.url}`;

  // Add/append the section(card) with all elements
  card.appendChild(picture);
  card.append(title);
  card.append(address);
  card.append(phone);
  card.append(anchor);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}

/* script for grid and list views */
function toggleList() {
  document.querySelector(".cards").classList.add("on");

  document.querySelector(".listview").style.backgroundColor = "#999";

  document.querySelector(".gridview").style.backgroundColor = "white";

  let cards = document.querySelectorAll(".cardclass");

  cards.forEach(function (card) {
    card.style.border = "none";
    card.style.width = "auto";
    card.style.display = "flex";
    card.style.flexDirection = "row";
    card.style.justifyContent = 'space-around';
    let images = document.querySelectorAll(".cardimg");
    images.forEach(function (img) {
      img.style.display = "none";
    });

  });

  let lines = document.querySelectorAll(".line");

  lines.forEach(function (line) {
    line.style.display = "inline";
  });
}

const z = document.querySelector(".listview");
z.onclick = toggleList;

function toggleGrid() {
  document.querySelector(".cards").classList.remove("on");

  document.querySelector(".gridview").style.backgroundColor = "#999";

  document.querySelector(".listview").style.backgroundColor = "white";

  let cards = document.querySelectorAll(".cardclass");

  cards.forEach(function (card) {
    card.style.border = "4px outset #502419";
    card.style.minWidth = "321.28px";
    card.style.width = "auto";
    card.style.display = "flex";
    card.style.flexDirection = "column";
  });

  let images = document.querySelectorAll(".cardimg");

  images.forEach(function (img) {
    img.style.display = "block";
    img.style.margin = "0 auto";
  });

  let lines = document.querySelectorAll(".line");

  lines.forEach(function (line) {
    line.style.display = "block";
  });
}

const w = document.querySelector(".gridview");
w.onclick = toggleGrid;

let width = window.innerWidth;

if (width > 624 && width < 1200) {
  toggleList();
}