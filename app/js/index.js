let xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function (ev) {
  //console.log(ev.target.responseText);
  let allItems = JSON.parse(ev.target.responseText);
  let randomItems = allItems.sort(() => Math.random() - 0.5);

  function createItems() {
    let cardFragment = document.createDocumentFragment();
    let temlateItems = document.querySelector('#cardProduct');
    randomItems.forEach((element) => {
      const mainItem = temlateItems.content.cloneNode(true);
      mainItem.querySelector('img').src = element.src;
      mainItem.querySelector('img').alt = element.alt;
      mainItem.querySelector('h3').textContent = element.title;
      mainItem.querySelector('.main-items__price').textContent = element.price;
      mainItem.querySelector('.main-items__button').textContent =
        element.button;
      cardFragment.appendChild(mainItem);
    });
    let list = document.querySelector('.main-items');
    list.appendChild(cardFragment);
  }
  createItems();

  const cat = document.querySelector('.catalog-top');
  const button = document.querySelector('.button');
  const line = document.querySelector('.line');
  const breadCrumbs = document.querySelector('.bread-crumbs');
  const filterCounter = document.querySelector('.filter-counter-elem');

  button.addEventListener('click', (el) => {
    el.preventDefault();
    cat.classList.toggle('visible');
    line.classList.toggle('novisible');
    breadCrumbs.classList.toggle('novisible');
  });

  /* TODO исправить всплывашку */
  const elementCounterClick = document.querySelectorAll(
    'input[name=type], input[name=features]'
  );
  const elemCount = document.querySelector('.filter-counters');
  for (let buttonItem of elementCounterClick) {
    buttonItem.addEventListener('click', (evt) => {
      filterCounter.style.display = 'block';
      filterCounter.style.top = evt.pageY - 15 + 'px';
      filterCounter.style.left = evt.pageX + 100 + 'px';

      let typeValues = [];
      let elemTypeValues = document.querySelectorAll(
        'input[name=type]:checked'
      );
      typeValues = [].map.call(elemTypeValues, (evt) => {
        typeValues = evt.value;
        return typeValues;
      });
      let featuresValues = [];
      let elemFeaturesValues = document.querySelectorAll(
        'input[name=features]:checked'
      );
      featuresValues = [].map.call(elemFeaturesValues, (evt) => {
        featuresValues = evt.value;
        return featuresValues;
      });

      let count = 0;

      for (let i = 0; i < allItems.length; i++) {
        if (typeValues.includes(allItems[i].hunting)) {
          count++;
        }
      }
      elemCount.innerHTML = 'Найдено ' + count;
      const filterShow = document.querySelector('.filter-show');
      filterShow.addEventListener('click', (event) => {});
    });
  }

  /* const linkCard = document.querySelector('.item-block-link');
linkCard.addEventListener('click', event => {

}) */
};
xmlhttp.open('GET', 'http://localhost:3000/api/catalog.json', true);
xmlhttp.send();
