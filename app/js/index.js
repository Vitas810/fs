import { getData } from "./getData.js";
import { createItems } from "./render.js";
import { filterCart } from "./filter.js";

  getData('http://localhost:3000/api/catalog.json').then(data => {
	let allItems = data;
	const cat = document.querySelector('.catalog-top');
	const button = document.querySelector('.button');
	const line = document.querySelector('.line');
	const breadCrumbs = document.querySelector('.bread-crumbs');
	const btnBasketOpen = document.querySelector('.open-basket');
	const basket = document.querySelector('.basket');
	const btnBasketClouse = document.querySelector('.basket-clouse');

	btnBasketOpen.addEventListener('click', event => basket.classList.toggle('visible'))
	btnBasketClouse.addEventListener('click', event => basket.classList.toggle('visible'))

	button.addEventListener('click', (el) => {
		el.preventDefault();
		cat.classList.toggle('visible');
		line.classList.toggle('novisible');
		breadCrumbs.classList.toggle('novisible');
	});

	createItems(allItems);
	filterCart(allItems);

}).catch(error => {
	console.error(error);
})
	


