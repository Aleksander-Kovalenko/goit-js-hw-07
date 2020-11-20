const productListRef = document.getElementById('categories');
const itemProductRef = document.querySelectorAll('.item');

console.log(`В списке ${productListRef.childElementCount} категории`);
itemProductRef.forEach(elem => {
  console.log(
    `Категория: ${elem.firstElementChild.textContent} Количество элементов: ${elem.lastElementChild.childElementCount}`,
  );
});
