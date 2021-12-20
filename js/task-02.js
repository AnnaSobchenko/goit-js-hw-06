const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const liEl = document.createElement("li");
//     liEl.classList.add("item");
// liEl.textContent = ingredients.forEach(el => { return el });
    
// document.body.appendChild(liEl)

// function renderList() {
//   const listEl = document.querySelector("ul")
//   const ingrListEl = ingredients.map(ingredient => {
//     return `<li class="item">${ingredient}</li>`
//   }).join("");


// listEl.insertAdjacentHTML("afterbegin", ingrListEl);
// }
// renderList();
// -----------------------
const ulEl = document.querySelector("ul");

function renderList(arr,el) {
  const newArr = [];
   for (let i = 0; i < arr.length; i += 1) {
    console.log(i);
    const liEl = document.createElement("li");
    console.log(liEl);
    liEl.classList.add("item");
     liEl.textContent = ingredients[i];
     newArr.push(liEl);
  }
  return newArr;
}
const liArr = renderList(ingredients, ulEl);
ulEl.append(...liArr);


