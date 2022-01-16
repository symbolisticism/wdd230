// controls the "last updated" feature in the footer
document.querySelector('#lastmod').textContent = `Last Updated: ${document.lastModified}`;

// updates the copyright year
const d = new Date();
const year = d.getFullYear();

document.querySelector('#copyrightyear').textContent = year;