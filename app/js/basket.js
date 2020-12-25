 import { getData } from "./getData.js";
 import { addItemToCart, getItemSubTotalPrice, updateCartTotal, deleteItemAll } from "./utils.js";

 getData('http://localhost:3000/api/catalog.json').then(data => {
   
class CartBasketCount {
  constructor () {
    this.price = '';
    this.title = '';
    this.imageSrc = '';
  }

  initBasket () {
    let arrayitemBasket = [];   
    let btnBasket = document.querySelectorAll('.main-items__button');
    for (let btnItem of btnBasket) {
      btnItem.addEventListener('click', event => {
      let button = event.target;
      let shopItem = button.parentElement.parentElement;
      this.price = shopItem.getElementsByClassName('main-items__price')[0].innerText;
      this.title = shopItem.getElementsByClassName('main-items__title')[0].innerText;
      this.imageSrc = shopItem.querySelector('img').src;
      arrayitemBasket.push(this.price);
      addItemToCart(this.title, this.imageSrc,this.price, arrayitemBasket);
      updateCartTotal();    
      })
    }
    const calculateSeparateItem = (basketItem, action) => {
      const input = basketItem.querySelector('.basket-item__result'); 
      switch (action) { 
        case 'plus':
          input.value++;
          input.dataset.value = input.value;
          updateCartTotal()
          break;
        case 'minus':
          input.value--;    
          input.dataset.value = input.value;
          updateCartTotal()    
          break;
      }
      basketItem.querySelector('.basket-item__price').textContent = getItemSubTotalPrice(input);
    }
    document.querySelector('.basket-items').addEventListener('click', event => {
      if(event.target.classList.contains('btn-minus')) {
        const input = event.target.closest('.basket-item').querySelector('.basket-item__result');
        if (Number(input.value )!== 0) {
          calculateSeparateItem(
            event.target.closest('.basket-item'),
            'minus'
          );
        }
      }
      if(event.target.classList.contains('btn-plus')) {
        calculateSeparateItem(
          event.target.closest('.basket-item'),
          'plus'
        );
      }
    });

    deleteItemAll ();
  }

}
let totalBsk = new CartBasketCount();
totalBsk.initBasket();

}).catch(error => {
  console.error(error);
})
