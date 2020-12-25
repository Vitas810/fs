import { createCards } from "./renderCart.js";

let xml = new XMLHttpRequest();
xml.onload = function (ev) {
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

  createCards(
    cardElem,
    arrayTypes,
    arrayFeatures,
    arrayFrequentIllnesses
  );
};
xml.open('GET', 'http://localhost:3000/api/card.json', true);
xml.send();
