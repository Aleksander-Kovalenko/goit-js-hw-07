const fieldRef = document.getElementById('validation-input');

const validValue = fieldRef.dataset.length;
fieldRef.addEventListener('blur', event => {
  const val = event.target.value.length === +validValue;
  if (val) {
    fieldRef.setAttribute('class', 'valid');
  } else {
    fieldRef.setAttribute('class', 'invalid');
  }
});
