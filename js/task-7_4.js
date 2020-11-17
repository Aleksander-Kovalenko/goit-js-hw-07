const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');
const count = document.getElementById('value');

let countValue = 0;
count.textContent = countValue;

incBtn.addEventListener('click', () => {
  countValue += 1;
  count.textContent = countValue;
});
decBtn.addEventListener('click', () => {
  countValue > 0 ? (countValue -= 1) : countValue;
  count.textContent = countValue;
});
