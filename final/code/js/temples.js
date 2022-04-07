const requestURL =
  "https://symbolisticism.github.io/wdd230/final/code/js/temples.json";

const cards = document.querySelector(".temples");

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
  let size = document.createElement("p");
  let dedicated = document.createElement("p");
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let services = document.createElement('p');

  // give the card a class
  card.setAttribute("class", "cardclass");

  // get the title
  title.textContent = `${temple.name}`;
  title.style.fontWeight = "bold";

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  picture.setAttribute("src", temple.src);
  picture.setAttribute("alt", `Picture of ${temple.name}`);
  picture.setAttribute("loading", "lazy");
  picture.setAttribute("class", "cardimg");

  size.innerText = `Size: ${temple.size}`;

  address.innerText = `${temple.address}`;

  phone.innerText = `${temple.phone}`;

  email.innerText = `${temple.email}`;
  
  services.innerText = `${temple.services}`;
  
  dedicated.innerText = `Dedicated: ${temple.dedicated}`;

  // Add/append the section(card) with all elements
  card.appendChild(picture);
  card.append(title);
  card.append(size);
  card.append(address);
  card.append(phone);
  card.append(email);
  card.append(services);
  card.append(dedicated);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}