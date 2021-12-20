const ulCategoryEl = document.querySelectorAll("#categories ul");
console.log("Number of categories:", ulCategoryEl.length);


// const catItemEl = document.querySelectorAll("li.item>h2").forEach(el =>console.log(`category:${el.outerText}`) )
// const liItemEl = document.querySelectorAll("li.item>ul").forEach(el => console.log(`elements: ${el.querySelectorAll("li").length}`) )



const li1ItemEl = document.querySelectorAll("li.item").forEach(el => {console.log("");
    console.log(`Category: ${el.firstElementChild.outerText}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})
