// const t = parseFloat(document.querySelector(".temperature").textContent);
// const w = parseFloat(document.querySelector(".windspeed").textContent);

const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Iverness&units=Metric&appid=ecad1d9a62121200969c1545c636b510";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = jsObject.main.temp;
    let w = jsObject.wind.speed;
    if (t <= 50 && w > 3) {
      const windchill =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(w, 0.16) +
        0.4275 * t * Math.pow(w, 0.16);
      document.querySelector(".windchill").innerHTML = `${Math.round(
        windchill
      )}&#176;F`;
    } else {
      document.querySelector(".windchill").innerHTML = "N/A";
    }
  });
