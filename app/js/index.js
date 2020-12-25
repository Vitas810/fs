import { getData } from "./getData.js";

  getData('http://localhost:3000/api/catalog.json').then(data => {
   
	let allItems = data;

	const cat = document.querySelector('.catalog-top');
	const button = document.querySelector('.button');
	const line = document.querySelector('.line');
	const breadCrumbs = document.querySelector('.bread-crumbs');
	const filterCounter = document.querySelector('.filter-counter-elem');
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

	let randomItems = allItems.sort(() => Math.random() - 0.5);

	function createItems(block) {
		let cardFragment = document.createDocumentFragment();
		let temlateItems = document.querySelector('#cardProduct');
		block.forEach((element) => {
			const mainItem = temlateItems.content.cloneNode(true);
			mainItem.querySelector('img').src = element.src;
			mainItem.querySelector('img').alt = element.alt;
			mainItem.querySelector('h3').textContent = element.title;
			mainItem.querySelector('.main-items__price').textContent = element.price;
			mainItem.querySelector('.main-items__button').textContent = element.button;
			mainItem.querySelector('.item-block-link').href = element.href + '?id' + element.id;
			cardFragment.appendChild(mainItem);
		});
		let list = document.querySelector('.main-items');
		list.appendChild(cardFragment);
	}
	createItems(randomItems);

	let filterCart = () => {
			const elementCounterClick = document.querySelectorAll('input[name=type], input[name=features]');
	const elemCount = document.querySelector('.filter-counters');

	for (let buttonItem of elementCounterClick) {
		buttonItem.addEventListener('click', (evt) => {
			filterCounter.style.display = 'block';
			filterCounter.style.top = evt.pageY - 15 + 'px';
			filterCounter.style.left = evt.pageX + 100 + 'px';

      setTimeout(event => {
        filterCounter.style.display = 'none';
      },8000);
      
			let typeValues = [];
			let elemTypeValues = document.querySelectorAll('input[name=type]:checked');
			typeValues = [].map.call(elemTypeValues, (evt) => {
				typeValues = evt.value;
				return typeValues;
			});
			let featuresValues = [];
			let elemFeaturesValues = document.querySelectorAll('input[name=features]:checked');
			featuresValues = [].map.call(elemFeaturesValues, (evt) => {
				featuresValues = evt.value;
				return featuresValues;
			});

			let findElements = [];
			allItems.forEach(item => {
				//console.log('typeValues', typeValues);
				if (typeValues.includes(item.hunting || item.companions || item.decorative || item.service)) {
					findElements.push(item);
				}
				if (featuresValues.includes(item.noSensefear || item.littleSheds || item.excellentHealth || item.goodObedience || item.veryDevoted)) {
					findElements.push(item);
				}
			})

			findElements = findElements.filter(function (item, pos) {
				return findElements.indexOf(item) == pos;
			})
			elemCount.innerHTML = 'Найдено ' + findElements.length;

			
			console.log('findElements', findElements.length);
			const linkCard = document.querySelector('.filter-show');
			linkCard.addEventListener('click', event => {
				let elemDelete = document.querySelectorAll('.main-item');
				Object.values(elemDelete).map(e => {
					e.remove()
				})
			
				createItems(findElements)
			})

		});
	}
	}

filterCart()
}).catch(error => {
	console.error(error);
})
	


