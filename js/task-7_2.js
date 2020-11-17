const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const productList = ingredients.map(element => {
  const listRef = document.createElement('li');
  listRef.innerHTML = element;

  return listRef;
});

ingredientsRef.append(...productList);
console.log(ingredientsRef);
