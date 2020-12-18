// const cardItems = [
//   {
//     id: 1,
//     title: 'Характеристика Айну',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 15,
//     kg: 'кг',
//     cardFeatures: [5, 6, 7, 8],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 12000,
//     p: 'P',
//     srcCard: 'assets/image.jpeg',
//     alt: 'image',
//   },
//   /*   {
//     id: 2,
//     title: 'Характеристика Афганская борзая',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 18,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 15000,
//     p: 'P',
//     srcCard: 'assets/image1.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 3,
//     title: 'Характеристика Барбет',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 10,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 15000,
//     p: 'P',
//     srcCard: 'assets/image2.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 4,
//     title: 'Характеристика Бассет',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 12,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 10000,
//     p: 'P',
//     srcCard: 'assets/image3.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 5,
//     title: 'Характеристика Легавой',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 14,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 39000,
//     p: 'P',
//     srcCard: 'assets/image4.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 6,
//     title: 'Характеристика Веттерхун',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 12000,
//     p: 'P',
//     srcCard: 'assets/image5.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 7,
//     title: 'Характеристика Древера',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 17000,
//     p: 'P',
//     srcCard: 'assets/image6.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 8,
//     title: 'Характеристика Ирландский терьер',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 15000,
//     p: 'P',
//     srcCard: 'assets/image7.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 9,
//     title: 'Характеристика Амереканский кокер',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 10000,
//     p: 'P',
//     srcCard: 'assets/image9.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 10,
//     title: 'Характеристика Английский Кокер',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 8000,
//     p: 'P',
//     srcCard: 'assets/image10.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 11,
//     title: 'Характеристика Дункер',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 20000,
//     p: 'P',
//     srcCard: 'assets/image11.jpeg',
//     alt: 'image',
//   },
//   {
//     id: 12,
//     title: 'Характеристика Спаниель',
//     typeName: 'тип',
//     sizeName: 'Размер',
//     mainName: 'Основные черты',
//     frequentName: 'Частые заболевания',
//     intelligenceName: 'Интеллект',
//     priceName: 'Стоимость',
//     cardTypes: [1, 2],
//     size: 16,
//     kg: 'кг',
//     cardFeatures: [5, 6, 1, 2],
//     cardFrequentIllnesses: [1, 2],
//     Intelligence: '45%',
//     btnTake: 'Забрать',
//     btnAddCard: 'Добавить в корзину',
//     priceCard: 5000,
//     p: 'P',
//     srcCard: 'assets/image12.jpeg',
//     alt: 'image',
//   }, */
// ];

let xmlHTTP = new XMLHttpRequest();
xmlHTTP.onload = function (ev) {
  //console.log(ev.target.responseText);
  let cardItems = JSON.parse(ev.target.responseText);

  const cardTypesList = [
    { id: 1, label: 'Охотничьи' },
    { id: 2, label: 'Компаньоны' },
    { id: 3, label: 'Декоративные' },
    { id: 4, label: 'Служебные' },
  ];
  const cardFeaturesList = [
    { id: 1, label: 'Отсутствует чувство страха' },
    { id: 2, label: 'Мало линяет' },
    { id: 3, label: 'Отличное здоровье' },
    { id: 4, label: 'Хорошее послушание' },
    { id: 5, label: 'Очень преданная' },
    { id: 6, label: 'Дружелюбная' },
    { id: 7, label: 'Подходит для охоты' },
    { id: 8, label: 'Мало лает' },
  ];
  const cardFrequentIList = [
    { id: 1, label: 'Глухота ' },
    { id: 2, label: 'Паралич гортани' },
  ];

  let arrayTypes = [];
  let arrayFeatures = [];
  let arrayFrequentIllnesses = [];

  cardItems.forEach((element) => {
    //console.log(Array.isArray(element.cardTypes));
    element.cardTypes.forEach((item) => {
      const types = cardTypesList.find((types) => types.id === item);
      if (!types) return;
      arrayTypes.push(types.label);
    });
    element.cardFeatures.forEach((el) => {
      const features = cardFeaturesList.find((features) => features.id === el);
      if (!features) return;
      arrayFeatures.push(features.label);

      //console.log(features.label);
    });
    element.cardFrequentIllnesses.forEach((el) => {
      const FrequentIllnesses = cardFrequentIList.find(
        (FrequentIllnesses) => FrequentIllnesses.id === el
      );
      if (!FrequentIllnesses) return;
      arrayFrequentIllnesses.push(FrequentIllnesses.label);
      //console.log(FrequentIllnesses.label);
    });
  });

  function createCards() {
    let cardFragment = document.createDocumentFragment();
    let temlateCard = document.querySelector('#cardElement');
    cardItems.forEach((element) => {
      const mainCard = temlateCard.content.cloneNode(true);
      mainCard.querySelector('img').src = element.srcCard;
      mainCard.querySelector('img').alt = element.alt;
      mainCard.querySelector('.card-optins__title').textContent = element.title;
      mainCard.querySelector('.types_title1').textContent = element.typeName;
      mainCard.querySelector('.types_value1').textContent = arrayTypes;
      mainCard.querySelector('.types_title2').textContent = element.sizeName;
      mainCard.querySelector('.types_value2').textContent =
        element.size + element.kg;
      mainCard.querySelector('.types_title3').textContent = element.mainName;
      mainCard.querySelector('.types_value3').textContent = arrayFeatures;
      mainCard.querySelector('.types_title4').textContent =
        element.frequentName;
      mainCard.querySelector(
        '.types_value4'
      ).textContent = arrayFrequentIllnesses;
      mainCard.querySelector('.types_title5').textContent =
        element.intelligenceName;
      mainCard.querySelector('.types_value5').textContent =
        element.Intelligence;
      mainCard.querySelector('.types_title6').textContent = element.priceName;
      mainCard.querySelector('.types_value6').textContent =
        element.priceCard + element.p;
      mainCard.querySelector('.card-options_button').textContent =
        element.btnAddCard;
      mainCard.querySelector('.btn-take').textContent = element.btnTake;
      cardFragment.appendChild(mainCard);
    });
    let list = document.querySelector('.card');
    list.appendChild(cardFragment);
  }
  createCards();
};
xmlHTTP.open('GET', 'http://localhost:3000/api/card.json', true);
xmlHTTP.send();
