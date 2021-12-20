const valueEl=document.querySelector("#value");
const counterEl=document.querySelector("#counter")

let counterValue = 0;

counterEl.addEventListener("click", handleClick)

function handleClick(event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.attributes["data-action"].value === "increment") {
            counterValue += 1;
        } else {
            counterValue -= 1;
        }
        valueEl.innerHTML = counterValue;
        }
    }
