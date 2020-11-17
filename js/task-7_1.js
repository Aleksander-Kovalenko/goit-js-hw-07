const nameList = document.querySelectorAll('.item');

nameList.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
  console.log(
    `Количество элементов: ${element.lastElementChild.children.length}`,
  );
});
