function showDate() {

  let d = new Date();
  let timeAtLoad = `${d.getMonth()} ${d.getDate()}, ${d.getFullYear()}`;

  let time = document.querySelector('.time');

  document.querySelector('.time').textContent = timeAtLoad;


}