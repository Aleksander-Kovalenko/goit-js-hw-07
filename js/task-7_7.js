const inputValue = document.getElementById('font-size-control');
const spanText = document.getElementById('text');
inputValue.addEventListener('input', () => {
  spanText.setAttribute('style', `font-size: ${inputValue.value}px`);
});
