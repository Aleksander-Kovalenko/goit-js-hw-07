const refs = {
  categoriesList: document.getElementById("categories"),
};

console.log(`В списке ${refs.categoriesList.children.length} категории`);

const list = [...refs.categoriesList.children].forEach((el) =>
  console.log(`
  Категория:${el.firstElementChild.textContent}
  Количество элементов:${el.lastElementChild.children.length}`)
);
