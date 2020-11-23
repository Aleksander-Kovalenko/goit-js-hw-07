const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');
const valRef = document.getElementById('value');
const clearRef = document.querySelector('.clear');
let counterValue = 0;

decrementRef.addEventListener('click', handlerDecrement);
incrementRef.addEventListener('click', handlerIncrement);
clearRef.addEventListener('click', handlerClear);

function handlerDecrement() {
  valRef.textContent = counterValue > 0 ? counterValue-- : counterValue;
}
function handlerIncrement() {
  counterValue++;
  valRef.textContent = counterValue;
}
function handlerClear() {
  counterValue = 0;
  valRef.textContent = counterValue;
}
