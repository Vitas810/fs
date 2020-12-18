
  /* TODO исправить всплывашку */
  const elementCounterClick = document.querySelectorAll(
    'input[name=type], input[name=features]'
  );
  const elemCount = document.querySelector('.filter-counters');
  for (let buttonItem of elementCounterClick) {
    buttonItem.addEventListener('click', (evt) => {
      filterCounter.style.display = 'block';
      filterCounter.style.top = evt.pageY - 15 + 'px';
      filterCounter.style.left = evt.pageX + 100 + 'px';

      let typeValues = [];
      let elemTypeValues = document.querySelectorAll(
        'input[name=type]:checked'
      );
      typeValues = [].map.call(elemTypeValues, (evt) => {
        typeValues = evt.value;
        return typeValues;
      });
      let featuresValues = [];
      let elemFeaturesValues = document.querySelectorAll(
        'input[name=features]:checked'
      );
      featuresValues = [].map.call(elemFeaturesValues, (evt) => {
        featuresValues = evt.value;
        return featuresValues;
      });

      let count = 0;

      for (let i = 0; i < allItems.length; i++) {
        if (typeValues.includes(allItems[i].hunting)) {
          count++;
        }
      }
      elemCount.innerHTML = 'Найдено ' + count;
      const filterShow = document.querySelector('.filter-show');
      filterShow.addEventListener('click', (event) => {});
    });
  }

  /* const linkCard = document.querySelector('.item-block-link');
linkCard.addEventListener('click', event => {

}) */