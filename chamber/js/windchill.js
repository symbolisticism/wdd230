function windchill() {
  let temperature = parseFloat(document.querySelector(".temperature").value);
  let windspeed = parseFloat(document.querySelector(".windspeed").value);
  let windchill;

  if (temperature <= 50 && windspeed > 3) {
    windchill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windspeed, 0.16) +
      0.4275 * temperature * Math.pow(windspeed, 0.16);
    
    document.querySelector('.windchill').innerHTML = `${windchill}&#8457;`;
    
  } else {
    windchill = 'N/A';
    document.querySelector('.windchill').textContent = windchill;
  }
}
