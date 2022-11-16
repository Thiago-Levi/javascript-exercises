const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");

const testUsername = (username) => /^[a-zA-Z]{6,12}$/.test(username);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isAValidUserName = testUsername(event.target.username.value);

  if (isAValidUserName) {
    feedback.textContent = "username válido.";
    return;
  }
  feedback.textContent =
    "O username deve conter: entre 6 a 12 caracteres e deve conter apenas letras.";
});

// form.username.addEventListener("keyup", (event) => {
//   const isAValidUserName = testUsername(event.target.value);

//   if (isAValidUserName) {
//     form.username.setAttribute("class", "success");
//     return;
//   }
//   form.username.setAttribute("class", "error");
// });
