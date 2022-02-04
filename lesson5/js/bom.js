const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function () {
  let favchap = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = favchap;
  listItem.appendChild(listBtn);
  listBtn.textContent = '❌';
  list.appendChild(listItem);

  listBtn.setAttribute('ariaLabel', 'Delete');
  listBtn.setAttribute('title', 'Delete');

  listBtn.onclick = function (e) {
    list.removeChild(listItem);
    input.focus()
  }

  input.focus();
}