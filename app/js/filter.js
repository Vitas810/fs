import { createItems } from "./render.js";

export function filterCart(elements) {
	const elementCounterClick = document.querySelectorAll('input[name=type], input[name=features]');
	const elemCount = document.querySelector('.filter-counters');
	const filterCounter = document.querySelector('.filter-counter-elem');

	for (let buttonItem of elementCounterClick) {
		buttonItem.addEventListener('click', (evt) => {
			filterCounter.style.display = 'block';
			filterCounter.style.top = evt.pageY - 15 + 'px';
			filterCounter.style.left = evt.pageX + 100 + 'px';

			setTimeout(event => {
				filterCounter.style.display = 'none';
			}, 8000);

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
			elements.forEach(item => {
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