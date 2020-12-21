let xmlHTTP = new XMLHttpRequest();
xmlHTTP.onload = function (ev) {
  let cardItems = JSON.parse(ev.target.responseText);

  function getUrlId(){
      let urlId = window.location.search; 
      let arrayId = []; 
      arrayId = (urlId.substring(3));  
      arrayId = parseInt(arrayId, 10)
      return arrayId;
  }
  const cardTypesList = [
    { id: 1, label: 'Охотничьи' },
    { id: 2, label: 'Компаньоны' },
    { id: 3, label: 'Декоративные' },
    { id: 4, label: 'Служебные' },
  ];
  const cardFeaturesList = [
    { id: 5, label: 'Отсутствует чувство страха' },
    { id: 6, label: 'Мало линяет' },
    { id: 7, label: 'Отличное здоровье' },
    { id: 8, label: 'Хорошее послушание' },
    { id: 9, label: 'Очень преданная' },
    { id: 10, label: 'Дружелюбная' },
    { id: 11, label: 'Подходит для охоты' },
    { id: 12, label: 'Мало лает' },
  ];
  const cardFrequentIList = [
    { id: 13, label: 'Глухота ' },
    { id: 14, label: 'Паралич гортани' },
  ];

  let arrayTypes = [];
  let arrayFeatures = [];
  let arrayFrequentIllnesses = [];
  let searchId = getUrlId();
  let cardElem = cardItems.find(item => item.id === searchId)
  //console.log('cardElem',cardElem.cardTypes);

  cardElem.cardTypes.forEach(id => {
    const types = cardTypesList.find((types) => types.id === id);
      if (!types) return;
      arrayTypes.push(types.label);
  });
  
  cardElem.cardFeatures.forEach(id => {
    const features = cardFeaturesList.find((features) => features.id === id);
      if (!features) return;
         arrayFeatures.push(features.label);
  });
  cardElem.cardFrequentIllnesses.forEach(id => {
    const FrequentIllnesses = cardFrequentIList.find((FrequentIllnesses) => FrequentIllnesses.id === id);
      if (!FrequentIllnesses) return;
         arrayFrequentIllnesses.push(FrequentIllnesses.label);
  });

  function createCards(cardElem) {
    let cardFragment = document.createDocumentFragment();
    let temlateCard = document.querySelector('#cardElement');
    const mainCard = temlateCard.content.cloneNode(true); 
    mainCard.querySelector('.bread-crumbs__title').textContent = cardElem.name;
    mainCard.querySelector('img').src = cardElem.srcCard;
    mainCard.querySelector('img').alt = cardElem.alt;
    mainCard.querySelector('.card-optins__title').textContent = cardElem.titleOption + ' ' + cardElem.name;
    mainCard.querySelector('.types_title1').textContent = cardElem.typeName;
    mainCard.querySelector('.types_value1').textContent = arrayTypes;
    mainCard.querySelector('.types_title2').textContent = cardElem.sizeName;
    mainCard.querySelector('.types_value2').textContent = cardElem.size + cardElem.kg;
    mainCard.querySelector('.types_title3').textContent = cardElem.mainName;
    mainCard.querySelector('.types_value3').textContent = arrayFeatures;
    mainCard.querySelector('.types_title4').textContent = cardElem.frequentName;
    mainCard.querySelector('.types_value4').textContent = arrayFrequentIllnesses;
    mainCard.querySelector('.types_title5').textContent = cardElem.intelligenceName;
    mainCard.querySelector('.types_value5').textContent = cardElem.Intelligence;
    mainCard.querySelector('.types_title6').textContent = cardElem.priceName;
    mainCard.querySelector('.types_value6').textContent = cardElem.priceCard + cardElem.p;
    mainCard.querySelector('.card-options_button').textContent = cardElem.btnAddCard;
    mainCard.querySelector('.btn-take').textContent = cardElem.btnTake;
    cardFragment.appendChild(mainCard);
    let list = document.querySelector('.cardTemplate');
    list.appendChild(cardFragment);
    console.log(cardElem.name);
  }

  createCards(cardElem);
};
xmlHTTP.open('GET', 'http://localhost:3000/api/card.json', true);
xmlHTTP.send();
