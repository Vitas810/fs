let xmlHTTP = new XMLHttpRequest();
xmlHTTP.onload = function (ev) {
  //console.log(ev.target.responseText);
  let allItems = JSON.parse(ev.target.responseText);

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
      mainItem.querySelector('.main-items__button').textContent = element.button;
      mainItem.querySelector('.item-block-link').href = element.href + '?id' + element.id;
      //console.log('href :',element.href + '?id' + element.id);
      cardFragment.appendChild(mainItem);
    });
    let list = document.querySelector('.main-items');
    list.appendChild(cardFragment);
  }
  createItems();

};
xmlHTTP.open('GET', 'http://localhost:3000/api/catalog.json', true);
xmlHTTP.send();
