  export function createCards(cardElem, arrayTypes, arrayFeatures, arrayFrequentIllnesses) {
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
  }