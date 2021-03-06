/* script for hamburger menu */
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

/* dynamically updated copyright year */
const d = new Date();
const year = d.getFullYear();

document.getElementById('copyrightyear').textContent = year;

/* dynamically update the last modification */
document.querySelector('#lastmod').textContent = `Last Modification: ${document.lastModified}`;

/* dynamically updates the date in the header */
const datefield = document.getElementById("date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	d
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// script for banner that invites people to the chamber meeting
window.onload = function() {

  const banner = document.getElementById('chamber-meeting')

  if (d.getDay() != 1 && d.getDay() != 2)
    banner.style.display = 'none';
  else
    banner.style.display = 'block';
  
}