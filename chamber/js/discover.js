// get the stored value in localStorage
let lastvisit = Number(window.localStorage.getItem("last-visit"));

if (lastvisit != 0) {

  let thisvisit = Date.now();

  let FACTOR = 1000;

  let secondsBetween = (thisvisit - lastvisit) / FACTOR;

  document.querySelector('.lastvisit').textContent = 'It has been ' + secondsBetween + ' seconds since your last vist.';

  window.localStorage.setItem(lastvisit, thisvisit);

  thisvisit = NULL;
  
} else {

  window.localStorage.setItem('last-visit', Date.now());
  document.querySelector('.lastvisit').textContent = 'This is your first visit!';

}