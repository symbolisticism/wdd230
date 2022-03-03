const requestURL = 'data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['businesses'];
    prophets.forEach(displayBusinesses);
  });
  
function displayBusinesses(business) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');
  let birthdate = document.createElement('div');
  let birthplace = document.createElement('div');

  // give the card a class
  card.setAttribute('class', 'cardclass');

  birthdate.setAttribute('class', 'birth');
  birthplace.setAttribute('class', 'birth');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${business.name}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', business.icon);
  portrait.setAttribute('alt', `Picture of ${business.name}`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}