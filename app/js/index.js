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

const setItems = {
  allItem: [
    {
      id: 1,
      title: 'Айну',
      price: 12000,
      src: 'assets/image.jpeg',
      alt: 'image',
      button: 'В корзину',
      hunting: 'hunting',
      companions: '',
      decorative: '',
      service: '',
      noSensefear: 'noSensefear',
      littleSheds: '',
      excellentHealth: '',
      goodObedience: '',
      veryDevoted: '',
    },
    {
      title: 'Афганская борзая',
      price: 15000,
      src: 'assets/image1.jpeg',
      alt: 'image',
      button: 'В корзину',
      hunting: 'hunting',
      companions: 1,
      decorative: 0,
    },
    {
      title: 'Барбет',
      price: 15000,
      src: 'assets/image2.jpeg',
      alt: 'image',
      button: 'В корзину',
      typeValue: 'Companions',
      traitsValue: 'no_sense_fear',
    },
    {
      title: 'Бассет',
      price: 10000,
      src: 'assets/image3.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Легавой',
      price: 39000,
      src: 'assets/image4.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Веттерхун',
      price: 12000,
      src: 'assets/image5.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Древера',
      price: 17000,
      src: 'assets/image6.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Ирландский терьер',
      price: 15000,
      src: 'assets/image7.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Амереканский кокер',
      price: 10000,
      src: 'assets/image9.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Английский Кокер',
      price: 8000,
      src: 'assets/image10.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Дункер',
      price: 20000,
      src: 'assets/image11.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
    {
      title: 'Спаниель',
      price: 5000,
      src: 'assets/image12.jpeg',
      alt: 'image',
      button: 'В корзину',
    },
  ],
};

let randomItems = setItems.allItem.sort(() => Math.random() - 0.5);

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
    let elemTypeValues = document.querySelectorAll('input[name=type]:checked');
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

    for (let i = 0; i < setItems.allItem.length; i++) {
      if (typeValues.includes(setItems.allItem[i].hunting)) {
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
