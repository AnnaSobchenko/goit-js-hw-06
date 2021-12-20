const inputEl = document.querySelector("#validation-input")

inputEl.addEventListener("blur", (event) => {
    
    if (event.currentTarget.value.length == 6) {
        console.log(1);
        // if (event.classList.contain("invalid")) { event.classList.remove("invalid")
        inputEl.classList.add("valid"); //}
        return
    } else { 
        console.log(2);
        // if (inputEl.classList.contain("valid")) { inputEl.classList.remove("valid") }
        inputEl.classList.add("invalid");
  }
});

inputEl.addEventListener("focus", (event) => {
    inputEl.classList.remove("invalid")
    inputEl.classList.remove("valid")
})