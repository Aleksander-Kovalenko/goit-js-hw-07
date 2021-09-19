// Напиши скрипт создания и очистки коллекции элементов. Пользователь
//  вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// 1. Получить поле input, кнопки button  с DOM
// 2. Создать функцию createBoxes(amount)
// 3. createBoxes(amount) создает div в зависимости от ввыеденого к-ва э-ов пользователем
// 4. Передавать значнеие поля input аргументом функции createBoxes
// 5. Проводить очистку поля по нажатию Очистить

// 6. Задать ширину высоту на создаваемые Боксы

// 7. Увеличитвать каждового следующего бокса на +10px
// 8. Написать функцию рандом для выбора цвета бокса rgb

const refs = {
  //   input: document.querySelector('input[type="number"]'),
  boxCollection: document.getElementById("boxes"),
  creatCollect: document.querySelector('button[data-action="render"]'),
  clearCollect: document.querySelector('button[data-action="destroy"]'),
};

refs.creatCollect.addEventListener("click", onHandBtnCreat);
refs.clearCollect.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  return (refs.boxCollection.innerHTML = "");
}
function onHandBtnCreat() {
  const inp = document.querySelector('input[type="number"]').value;
  return createBoxes(inp);
}

function createBoxes(amount) {
  let width = 20;
  let height = 20;

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");

    newBox.style.width = `${width + i * 10}px`;
    newBox.style.height = `${height + i * 10}px`;
    randColor(newBox);

    refs.boxCollection.appendChild(newBox);
  }

  return refs.boxCollection;
}

function randColor(elem) {
  /*СОЗДАЕМ ПЕРЕМЕННЫЕ
elem - элемент которому будем менять задний фон
code_color - получаем элемент в который будет выводить код цвета
r,g,b - отвечают за кодировку и вместе выводят цвет
color - в нее записываем полную строку значения цвета
*/
  //   var element = document.querySelector(elem),
  // code_color = document.querySelector(".code_color"),
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return (elem.style.background = color);
  //   code_color.innerText = color;
}
