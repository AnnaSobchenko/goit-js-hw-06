const refs = {
    fontSizeEl: document.querySelector("#font-size-control"),
    textEl: document.querySelector("#text")
}
refs.fontSizeEl.addEventListener("input", (event) => {    
    refs.textEl.style.fontSize = `${refs.fontSizeEl.value}px`;
})
refs.textEl.style.fontSize = `${refs.fontSizeEl.value}px`;