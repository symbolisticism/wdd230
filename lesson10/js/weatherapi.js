const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5861897&q=Fairbanks&units=imperial&appid={ecad1d9a62121200969c1545c636b510}';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });