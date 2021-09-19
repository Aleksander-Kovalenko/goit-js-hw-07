const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
].map((e) => {
  const item = document.createElement("li");
  const text = document.createElement("p");
  text.textContent = e;
  item.append(text);

  return item;
});

const list = document.getElementById("ingredients").append(...ingredients);
