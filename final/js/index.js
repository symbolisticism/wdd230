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

document.getElementById('copyright').textContent = year;