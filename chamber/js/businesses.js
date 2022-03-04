const requestURL = 'https://symbolisticism.github.io/wdd230/chamber/js/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });
  
function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let picture = document.createElement('img');
  let address = document.createElement('div');
  let phone = document.createElement('div');
  let url = document.createElement('div');


  // give the card a class
  card.setAttribute('class', 'cardclass');

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  picture.src = business.icon;
  console.log(business.icon);
  picture.setAttribute('alt', `Picture of ${business.name}`);
  picture.setAttribute('loading', 'lazy');

  // pouplate the address using the JSON file
  address.textContent = `${business.address}`;

  // pouplate the phone number using the JSON file
  phone.textContent = `${business.phone}`;

  // pouplate the url using the JSON file
  url.textContent = `${business.url}`;

  // Add/append the section(card) with all elements
  card.appendChild(picture);
  card.append(address);
  card.append(phone);
  card.append(url);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}