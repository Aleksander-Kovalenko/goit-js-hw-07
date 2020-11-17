const nameRef = document.getElementById('name-input');
const helloRef = document.getElementById('name-output');

nameRef.addEventListener('input', event => {
  helloRef.textContent =
    event.target.value === '' ? 'незнакомец' : event.target.value;
});
