const cat = document.querySelector('.catalog-top');
const button = document.querySelector('.button');
const line = document.querySelector('.line');
const breadCrumbs = document.querySelector('.bread-crumbs');

button.addEventListener('click', (el) => {
  el.preventDefault();
  cat.classList.toggle('visible');
  line.classList.toggle('novisible');
  breadCrumbs.classList.toggle('novisible');
});

