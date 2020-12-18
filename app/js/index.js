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
      cardFragment.appendChild(mainItem);
    });
    let list = document.querySelector('.main-items');
    list.appendChild(cardFragment);
  }
  createItems();

  /* ----------------------------filter begin----------------------- */

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


/* -----------------------------filter end----------- */


};
xmlHTTP.open('GET', 'http://localhost:3000/api/catalog.json', true);
xmlHTTP.send();

/* данные карточек временное хранение
{
    "id": 2,
    "title": "Характеристика Афганская борзая",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 18,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 15000,
    "p": "P",
    "srcCard": "assets/image1.jpeg",
    "alt": "image"
  },
  {
    "id": 3,
    "title": "Характеристика Барбет",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 10,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 15000,
    "p": "P",
    "srcCard": "assets/image2.jpeg",
    "alt": "image"
  },
  {
    "id": 4,
    "title": "Характеристика Бассет",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 12,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 10000,
    "p": "P",
    "srcCard": "assets/image3.jpeg",
    "alt": "image"
  },
  {
    "id": 5,
    "title": "Характеристика Легавой",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 14,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 39000,
    "p": "P",
    "srcCard": "assets/image4.jpeg",
    "alt": "image"
  },
  {
    "id": 6,
    "title": "Характеристика Веттерхун",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 12000,
    "p": "P",
    "srcCard": "assets/image5.jpeg",
    "alt": "image"
  },
  {
    "id": 7,
    "title": "Характеристика Древера",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 17000,
    "p": "P",
    "srcCard": "assets/image6.jpeg",
    "alt": "image"
  },
  {
    "id": 8,
    "title": "Характеристика Ирландский терьер",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 15000,
    "p": "P",
    "srcCard": "assets/image7.jpeg",
    "alt": "image"
  },
  {
    "id": 9,
    "title": "Характеристика Амереканский кокер",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 10000,
    "p": "P",
    "srcCard": "assets/image9.jpeg",
    "alt": "image"
  },
  {
    "id": 10,
    "title": "Характеристика Английский Кокер",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 8000,
    "p": "P",
    "srcCard": "assets/image10.jpeg",
    "alt": "image"
  },
  {
    "id": 11,
    "title": "Характеристика Дункер",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 20000,
    "p": "P",
    "srcCard": "assets/image11.jpeg",
    "alt": "image"
  },
  {
    "id": 12,
    "title": "Характеристика Спаниель",
    "typeName": "тип",
    "sizeName": "Размер",
    "mainName": "Основные черты",
    "frequentName": "Частые заболевания",
    "intelligenceName": "Интеллект",
    "priceName": "Стоимость",
    "cardTypes": [1, 2],
    "size": 16,
    "kg": "кг",
    "cardFeatures": [5, 6, 1, 2],
    "cardFrequentIllnesses": [1, 2],
    "Intelligence": "45%",
    "btnTake": "Забрать",
    "btnAddCard": "Добавить в корзину",
    "priceCard": 5000,
    "p": "P",
    "srcCard": "assets/image12.jpeg",
    "alt": "image"
  } */
