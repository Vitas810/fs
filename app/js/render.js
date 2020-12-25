export function createItems(block) {
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