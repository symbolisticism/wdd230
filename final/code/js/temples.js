const requestURL =
  "https://symbolisticism.github.io/wdd230/final/code/js/temples.json";

const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject;
    businesses.forEach(displayTemples);
  });

function displayTemples(temple) {
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
  title.textContent = `${temple.name}`;
  title.setAttribute("class", "line");

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  picture.setAttribute("src", temple.src);
  picture.setAttribute("alt", `Picture of ${temple.name}`);
  picture.setAttribute("loading", "lazy");
  picture.setAttribute("class", "cardimg");

  // Add/append the section(card) with all elements
  card.appendChild(picture);
  card.append(title);
  card.append(address);
  card.append(phone);
  card.append(anchor);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}