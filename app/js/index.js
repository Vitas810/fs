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


const template = document.querySelector('.main-items')
const setItems = {
  allItem: [
    {
      title: 'Айну',
      price: 12000,
      photo: 'assets/image.jpeg'
    },
    {
      title: 'Афганская борзая',
      price: 15000,
      photo: 'assets/image1.jpeg'
    },
    {
      title: 'Барбет',
      price: 15000,
      photo: 'assets/image2.jpeg'
    },
    {
      title: 'Бассет',
      price: 10000,
      photo: 'assets/image3.jpeg'
    },
    {
      title: 'Легавой',
      price: 39000,
      photo: 'assets/image4.jpeg'
    }
  ]
}

const showAllPosts = () => {

Array.prototype.randomItem = function() {
  return this[Math.floor(Math.random()*this.length)];
}


  let postsHTML = '';

  setItems.allItem.forEach((post) => {
    const { title, price, photo } = post;

    postsHTML += `
          <li class="main-item">
            <div class="main-item__img">
              <img src="${photo}" alt="Картинка собаки" />
            </div>
            <div class="item-block">
              <h3 class="main-items__title">${title}</h3>
              <span class="main-items__price">${price}₽</span>
              <button class="button main-items__button">В корзину</button>
            </div>
          </li>
    `;
  });
  template.innerHTML = postsHTML;
};


showAllPosts()