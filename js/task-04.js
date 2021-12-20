let counterValue = +document.querySelector("#value.textContent");
const vvvv=document.querySelector("#value")
console.log(vvvv);

const buttonDecr = document.querySelector(
    "button[data-action='decrement']")
const buttonIncr = document.querySelector(
    "button[data-action='increment']")

const handleClickDecr = () => {   
   return  counterValue -= 1;
    // console.log(counterValue);    
};
const handleClickIncr = () => {    
    return counterValue += 1;
    // console.log(counterValue);
}    

buttonDecr.addEventListener("click", handleClickDecr);
buttonIncr.addEventListener("click", handleClickIncr);

console.log(vvvv.textContent=counterValue);