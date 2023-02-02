const h1 = document.getElementById('main-title');
h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = `${li.textContent} (Changed!)`;

const body = document.body;
body.style.backgroundColor = '#f1f1f1';

const listElements = document.querySelectorAll('li');

for (const item of listElements) {
  console.dir(item);
}
