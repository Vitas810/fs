xmlHttp = new XMLHttpRequest();
xmlHttp.onload = function (ev) {

const totalPriceWrapper = document.querySelector('.results_price');

const getItemSubTotalPrice = input => {
  return Number(input.value) * Number(input.dataset.price);
}
const settotalprice = value => {
  totalPriceWrapper.textContent = value;
  totalPriceWrapper.dataset.value = value;
}

const init = () => {
  let totalCost = 0;

  [...document.querySelectorAll('.basket-item')].forEach(basketItem => {
    totalCost += getItemSubTotalPrice(basketItem.querySelector('.basket-item__result'));
  });
  
  settotalprice(totalCost);
  
}

  const calculateSeparateItem = (basketItem, action) => {
    const input = basketItem.querySelector('.basket-item__result');
    switch (action) { 
      case 'plus':
        input.value++;
        settotalprice(Number(totalPriceWrapper.dataset.value) + Number(input.dataset.price));
        break;
      case 'minus':
        input.value--;
        settotalprice(Number(totalPriceWrapper.dataset.value) - Number(input.dataset.price));
        break;
    }
    basketItem.querySelector('.basket-item__price').textContent = getItemSubTotalPrice(input)
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

  init();


  let arrayitemBasket = [];
	let btnBasket = document.querySelectorAll('.main-items__button');
	for (let btnItem of btnBasket) {
		btnItem.addEventListener('click', addToCartClicked)
	}

	function addToCartClicked(event) {
		let countCart = 0;
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let price = shopItem.getElementsByClassName('main-items__price')[0].innerText
    addItemToCart(price)
		//updateCartTotal()
		
}

function addItemToCart(price) {
	let basketCountlElement = document.querySelector('.cart_content');
	let totalPtice = document.querySelector('.total-price');
	arrayitemBasket.push(price);

	let totalSumm = arrayitemBasket.reduce((sum, arg) => {
		return parseInt(sum) + (parseInt(arg) || 0);
	})

	basketCountlElement.innerText = `Корзина (${arrayitemBasket.length})`;
	totalPtice.innerText = `Сумма (${totalSumm})`;

}

};
xmlHttp.open('GET', 'http://localhost:3000/api/catalog.json', true);
xmlHttp.send();