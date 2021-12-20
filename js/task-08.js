// const form = document.querySelector(".login-form");
// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     // console.dir(event.currentTarget.elements)
//     console.log(formData);
//     formData.forEach((value, name)=> {
//         console.log(`${name}:${value}`);
//         // console.log(value);
//     })
// }
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}