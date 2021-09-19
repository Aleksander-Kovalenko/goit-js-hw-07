// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const val = document.getElementById("value");
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

document.body.addEventListener("click", onTargetBtnClick);
let count = 0;
function onTargetBtnClick(e) {
  if (e.target === increment) {
    count += 1;
    val.textContent = count;
  } else {
    count = count;
    val.textContent = --count;
  }
}
