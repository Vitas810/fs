xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function (ev) {

  class CartBasketCount {
    constructor () {

    }

    initBasket () {
      let arrayitemBasket = [];   
      let btnBasket = document.querySelectorAll('.main-items__button');
      console.log('click-btn', btnBasket[0])
      for (let btnItem of btnBasket) {
        btnItem.addEventListener('click', event => {
        let button = event.target;
        let shopItem = button.parentElement.parentElement;
        let price = shopItem.getElementsByClassName('main-items__price')[0].innerText;
        let title = shopItem.getElementsByClassName('main-items__title')[0].innerText;
        let imageSrc = shopItem.querySelector('img').src;
        arrayitemBasket.push(price);
        console.log('click',)
        addItemToCart(title, imageSrc,price)
        updateCartTotal()   
          
        })
      }
      function addItemToCart(title,imageSrc,price) {
        let basketCountlElement = document.querySelector('.cart_content');
        let totalPtice = document.querySelector('.total-price');      
        let cartElement = 
            ` 
              <div class="basket-item__checkbox filter-checkbox-other">
                <input type="checkbox" id="basket-checkbox1" />
                <label for="basket-checkbox1"></label>
              </div>
              <div class="basket-item__img">
                <img src="${imageSrc}" alt="image" />
              </div>
              <div class="basket-item__name">${title}</div>
              <div class="basket-item__buttons">
                <button class="basket-item__button btn-minus">-</button>
                <input type="number" class="basket-item__result" value="1" data-price="${price}" data-value="1" disabled>
                <button class="basket-item__button btn-plus">+</button>
              </div>
              <div class="basket-item__price">${price} </div>
              <button class="basket-btn-remove">
                <svg class="icon_delete_basket">
                  <use xlink:href="assets/icons.svg#delete_basket"></use>
                </svg>
              </button>
          `;

        let addCartBasket = false;
        [...document.querySelectorAll('.basket-item__name')].forEach(item => {
          if(item.innerText === title) { return addCartBasket = true}
        })

        if(addCartBasket === false) {
          let totalSumm = arrayitemBasket.reduce((sum, arg) => parseInt(sum) + (parseInt(arg) || 0))
          basketCountlElement.innerText = `Корзина (${arrayitemBasket.length})`;
          totalPtice.innerText = `Сумма (${totalSumm})`;
          let cartItem = document.createElement('li');
          cartItem.classList.add('basket-item') 
          cartItem.innerHTML = cartElement
          let list = document.querySelector('.basket-items');
          list.append(cartItem);
          } else {
            alert('Товар уже добавлен в корзину');
            return;
          }
      }
    
      const getItemSubTotalPrice = input => {
        return Number(input.value) * Number(input.dataset.price);
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
      
      function updateCartTotal() {
        let cartItemContainer = document.getElementsByClassName('basket-items')[0];
        let cartRows = cartItemContainer.getElementsByClassName('basket-item');
        let total = 0
        for (let i = 0; i < cartRows.length; i++) {
            let quantity = 0
            let cartRow = cartRows[i];
            let quantityElement = cartRow.getElementsByClassName('basket-item__result')[0];
            let price = quantityElement.dataset.price;
            quantity = quantityElement.dataset.value;
            total = total + (price * quantity);
           
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('results_price')[0].innerText = `${total} P`
      } 
      function deleteItemAll () {
        document.querySelector('.basket-all__delete').addEventListener('click', event => {
          let itemDel = document.querySelectorAll('.basket-item');
				  Object.values(itemDel).map(e => {
					  e.remove()
          })
          updateCartTotal()
        });
      }
      deleteItemAll ();

      function deleteItem () {
        let btnBasket1 = document.querySelectorAll('.basket-btn-remove');
        for (let btnItem of btnBasket1) {
          btnItem.addEventListener('click', event => {
            let delItem = document.querySelector('.basket-item');
            delItem.remove()
            updateCartTotal()
          })
        }
      }
      deleteItem ();
    }

  }
  let totalBsk = new CartBasketCount();
  totalBsk.initBasket();

};
xmlHttp.open('GET', 'http://localhost:3000/api/catalog.json', true);
xmlHttp.send();