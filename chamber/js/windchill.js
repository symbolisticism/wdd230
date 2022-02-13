let temperature = parseFloat(document.querySelector(".temperature").textContent); 
let windspeed = parseFloat(document.querySelector(".windspeed").textContent);
let windchill = '';

if (temperature <= 50 && windspeed > 3) {
  windchill = windchill(temperature, windspeed);
  windchill = `${windchill} &#176;F`
} else {
  windchill = 'N/A'; 
}

// output
document.querySelector('.windchill').innerHTML = windchill;

function windchill(temp, speed) {
  return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
}