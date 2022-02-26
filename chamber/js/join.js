  
  // let d = Date();
  // let timeAtLoad = `${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}`;

  // let time = document.querySelector('.time');

  // document.querySelector('.time').textContent = timeAtLoad;

let timeAtLoad = new Date().toISOString();

timeAtLoad = timeAtLoad.substring(0, 16);

document.querySelector('.time').textContent = timeAtLoad;

console.log(timeAtLoad);