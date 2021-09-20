const refs = {
  inputField: document.getElementById("name-input"),
  textField: document.getElementById("name-output"),
};

refs.inputField.addEventListener("input", onInputValue);

function onInputValue(e) {
  const val = e.target.value;
  refs.textField.textContent = val === "" ? "незнакомец" : e.target.value;
}
