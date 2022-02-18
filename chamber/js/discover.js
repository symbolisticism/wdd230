// get the stored value in localStorage
let lastvisit = Number(window.localStorage.getItem('lastvisit'));

let thisvisit = Date.now();

if (lastvisit != 0) {


  let FACTOR = 86400000;

  let daysBetween = (thisvisit - lastvisit) / FACTOR;

  document.querySelector('.lastvisit').textContent = 'It has been ' + daysBetween.toFixed(0) + ' day(s) since your last visit. Welcome back!';

  
} else {
  
  window.localStorage.setItem('lastvisit', Date.now());
  document.querySelector('.lastvisit').textContent = 'This is your first visit! Find something you\'ll love!';
  
}

  window.localStorage.setItem('lastvisit', thisvisit);