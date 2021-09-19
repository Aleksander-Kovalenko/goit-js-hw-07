const refs = {
  rang: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.rang.addEventListener("input", onRang);

function onRang(e) {
  refs.text.style.fontSize = `${e.target.value}px`;
}
