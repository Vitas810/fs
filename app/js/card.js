
const cardItems = [
    {
      id: 1,
      title: 'Характеристика Айну',
      typeName: 'тип',
      sizeName: 'Размер',
      mainName: 'Основные черты',
      frequentName: 'Частые заболевания',
      intelligenceName: 'Интеллект',
      priceName: 'Стоимость',
      cardTypes: [1,2],
      size: 15,
      kg: 'кг',
      cardFeatures: [5,6,7,8],
      cardFrequentIllnesses: [1,2],
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: 12000,
      p: 'P',
      srcCard: 'assets/image.jpeg',
      alt: 'image',
    },
    /* {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    },
    {
      cardTypes: 'Охотничьи, Компаньоны',
      size: 'Охотничьи, Компаньоны',
      cardFeatures: 'Очень преданная, Дружелюбная, Подходит для охоты, Мало лает',
      FrequentIllnesses: 'Глухота, Паралич гортани',
      Intelligence: '45%',
      btnTake: 'Забрать',
      btnAddCard: 'Добавить в корзину',
      priceCard: '12000',
      srcCard: 'assets/image.jpeg'
    }, */
];

const cardTypesList = [
  {id : 1, label: 'Охотничьи'},
  {id : 2, label: 'Компаньоны'},
  {id : 3, label: 'Декоративные'},
  {id : 4, label: 'Служебные'},
]
const cardFeaturesList = [
  {id : 1, label: 'Отсутствует чувство страха'},
  {id : 2, label: 'Мало линяет'},
  {id : 3, label: 'Отличное здоровье'},
  {id : 4, label: 'Хорошее послушание'},
  {id : 5, label: 'Очень преданная'},
  {id : 6, label: 'Дружелюбная'},
  {id : 7, label: 'Подходит для охоты'},
  {id : 8, label: 'Мало лает'},
]
const cardFrequentIList = [
  {id : 1, label: 'Глухота '},
  {id : 2, label: 'Паралич гортани'},
]

let arrayTypes = []
let arrayFeatures = []
let arrayFrequentIllnesses = []

cardItems.forEach((element) => {  
  //console.log(Array.isArray(element.cardTypes));
    element.cardTypes.forEach(item => {
      const types = cardTypesList.find(types => types.id === item);
        if(!types) return;
        arrayTypes.push(types.label)
    });    
    element.cardFeatures.forEach(el => {
      const features = cardFeaturesList.find(features => features.id === el);
        if(!features) return;
        arrayFeatures.push(features.label)
       
        //console.log(features.label);
    });     
    element.cardFrequentIllnesses.forEach(el => {
      const FrequentIllnesses = cardFrequentIList.find(FrequentIllnesses => FrequentIllnesses.id === el);
        if(!FrequentIllnesses) return;
        arrayFrequentIllnesses.push(FrequentIllnesses.label)
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
      mainCard.querySelector('.types_value2').textContent = element.size + element.kg;
      mainCard.querySelector('.types_title3').textContent = element.mainName;
      mainCard.querySelector('.types_value3').textContent = arrayFeatures;
      mainCard.querySelector('.types_title4').textContent = element.frequentName;
      mainCard.querySelector('.types_value4').textContent = arrayFrequentIllnesses;
      mainCard.querySelector('.types_title5').textContent = element.intelligenceName;
      mainCard.querySelector('.types_value5').textContent = element.Intelligence;
      mainCard.querySelector('.types_title6').textContent = element.priceName;
      mainCard.querySelector('.types_value6').textContent = element.priceCard + element.p;
      mainCard.querySelector('.card-options_button').textContent = element.btnAddCard;
      mainCard.querySelector('.btn-take').textContent = element.btnTake;
      cardFragment.appendChild(mainCard);
    });
    let list = document.querySelector('.card');
    list.appendChild(cardFragment);
  }
  createCards();
