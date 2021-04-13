const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const listEl = document.querySelector('#ingredients');

  const createItems = function (listArray) {
    return listArray.map(element => {
      const listItemEl = document.createElement('li');
      listItemEl.textContent = element;
      return listItemEl;
    });
  };
  const listItemsEl = createItems(ingredients);
  listEl.prepend(...listItemsEl);