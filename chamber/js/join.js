let timeAtLoad = new Date().toISOString();

timeAtLoad = timeAtLoad.substring(0, 16);

document.querySelector('.time').textContent = timeAtLoad;

console.log(timeAtLoad);