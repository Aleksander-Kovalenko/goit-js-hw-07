// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.
const refs = {
  inputField: document.getElementById("validation-input"),
};

refs.inputField.addEventListener("blur", calculateSymbol);

function calculateSymbol(e) {
  const maxLength = refs.inputField.getAttribute("data-length");
  const userVal = e.target.value.length;
  console.log(userVal);
  const validName = userVal == maxLength;
  if (!validName) {
    refs.inputField.classList.add("invalid");
  } else {
    refs.inputField.classList.remove("invalid");
    refs.inputField.classList.add("valid");
  }
}
