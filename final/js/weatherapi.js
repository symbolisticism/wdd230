const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=76.6122&lon=39.2904&units=Imperial&appid=ecad1d9a62121200969c1545c636b510";

const time = new Date();
const date = time.getDate();
const month = time.getMonth();

document.querySelector('.tomorrow').innerText = `${month}/${date + 1}`;
document.querySelector('.overmorrow').innerText = `${month}/${date + 2}`;
document.querySelector('.doubleovermorrow').innerText = `${month}/${date + 3}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector(".temperature").textContent =
      Math.round(jsObject.current.temp);
      const iconsrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
      const desc = jsObject.current.weather[0].description;
      document.querySelector("#weathericon").setAttribute("src", iconsrc);
      document.querySelector("#weathericon").setAttribute("alt", desc);
      document.querySelector("figcaption").textContent = desc;
      document.querySelector('.windspeed').innerHTML = `Wind speed: ${jsObject.current.wind_speed.toFixed(1)} mph`;
      document.querySelector('.humidity').innerHTML = `Humidity: ${jsObject.current.humidity} g.kg<sup>-1</sup>`;
      
      const tomorrowiconsrc = `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
      const tomorrowdesc = jsObject.daily[0].weather[0].description;
      
      const overmorrowiconsrc = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
      const overmorrowdesc = jsObject.daily[1].weather[0].description;
      
      const doubleovermorrowiconsrc = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
      const doubleovermorrowdesc = jsObject.daily[2].weather[0].description;
    
      document.querySelector("#tomorrowweathericon").setAttribute("src", tomorrowiconsrc);
      document.querySelector("#tomorrowweathericon").setAttribute("alt", tomorrowdesc);
      document.querySelector(".tomorrowfig").textContent = tomorrowdesc;
      
      document.querySelector("#overmorrowweathericon").setAttribute("src", overmorrowiconsrc);
      document.querySelector("#overmorrowweathericon").setAttribute("alt", overmorrowdesc);
      document.querySelector(".overmorrowfig").textContent = overmorrowdesc;
      
      document.querySelector("#doubleovermorrowweathericon").setAttribute("src", doubleovermorrowiconsrc);
      document.querySelector("#doubleovermorrowweathericon").setAttribute("alt", doubleovermorrowdesc);
      document.querySelector(".doubleovermorrowfig").textContent = doubleovermorrowdesc;
    
    let t = jsObject.current.temp;
    let w = jsObject.current.wind_speed;
    if (t <= 10 && w > 4.83) {
      const windchill =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(w, 0.16) +
        0.4275 * t * Math.pow(w, 0.16);
      document.querySelector(".windchill").innerHTML = `Windchill: ${Math.round(
        windchill
      )}&#176;C`;
    } else {
      document.querySelector(".windchill").innerHTML = "N/A";
    }
  });