function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  buttonChange: document.querySelector(".change-color"),
  textSpan: document.querySelector(".color")
}

refs.buttonChange.addEventListener("click", (event) => {
  const bgColor = getRandomHexColor();
  refs.body.style.backgroundColor = bgColor;
  refs.textSpan.innerHTML = bgColor;
})
