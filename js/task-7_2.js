const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const shopListRef = document.getElementById('ingredients');

const shopElem = ingredients.map(elem => {
  const newTeg = document.createElement('li');
  newTeg.textContent = elem;

  return newTeg;
});

shopListRef.append(...shopElem);
