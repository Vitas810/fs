export function addItemToCart(title, imageSrc, price, arrayitemBasket) {
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
  export const getItemSubTotalPrice = input => {
    return Number(input.value) * Number(input.dataset.price);
  }
 export function updateCartTotal() {
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
 export function deleteItemAll () {
    document.querySelector('.basket-all__delete').addEventListener('click', event => {
      let itemDel = document.querySelectorAll('.basket-item');
      Object.values(itemDel).map(e => {
        e.remove()
      })
      updateCartTotal()
    });
  }