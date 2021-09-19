const refs = {
  inputField: document.getElementById("name-input"),
  textField: document.getElementById("name-output"),
};

refs.inputField.addEventListener("input", onInputValue);

function onInputValue(e) {
  refs.textField.textContent = "" ? "незнакомец" : e.target.value;
}
