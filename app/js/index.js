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


const setItems = {
  allItem: [
    {
      title: 'Айну',
      price: 12000,
      src: 'assets/image.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Афганская борзая',
      price: 15000,
      src: 'assets/image1.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Барбет',
      price: 15000,
      src: 'assets/image2.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Бассет',
      price: 10000,
      src: 'assets/image3.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Легавой',
      price: 39000,
      src: 'assets/image4.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Веттерхун',
      price: 12000,
      src: 'assets/image5.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Древера',
      price: 17000,
      src: 'assets/image6.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Ирландский терьер',
      price: 15000,
      src: 'assets/image7.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Амереканский кокер',
      price: 10000,
      src: 'assets/image9.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Английский Кокер',
      price: 8000,
      src: 'assets/image10.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Дункер',
      price: 20000,
      src: 'assets/image11.jpeg',
      alt: 'image',
      button: 'В корзину'
    },
    {
      title: 'Спаниель',
      price: 5000,
      src: 'assets/image12.jpeg',
      alt: 'image',
      button: 'В корзину'
    }
  ]
}

let randomItems = setItems.allItem.sort(() => Math.random() - 0.5);

function createItems() {
  let cardFragment = document.createDocumentFragment();
  let temlateItems = document.querySelector('#cardProduct');
  randomItems.forEach( element => {
    const mainItem = temlateItems.content.cloneNode(true)
    mainItem.querySelector('img').src = element.src;
    mainItem.querySelector('img').alt = element.alt;
    mainItem.querySelector('h3').textContent =element.title;
    mainItem.querySelector('.main-items__price').textContent =element.price;
    mainItem.querySelector('.main-items__button').textContent =element.button;
    cardFragment.appendChild(mainItem);
  });
  let list  = document.querySelector('.main-items');
  list.appendChild(cardFragment);

}

createItems();

