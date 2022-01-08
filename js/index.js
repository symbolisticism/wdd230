// JavaScript that controls the display of when the site was last updated
document.querySelector('#lastmod').textContent = `Last Updated: ${document.lastModified}`;

// updates the copyright year of the site
const d = new Date();
const year = d.getFullYear();

document.querySelector('#copyrightyear').textContent = year;
