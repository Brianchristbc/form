const password1 = document.getElementById("user-password");
const password2 = document.getElementById("password-confirm");
const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  if (password1.value == password2.value) {
    password1,password2.setCustomValidity("")
  } else if (password1.value !== password2.value) {
    password2.setCustomValidity("Please ensure that your passwords are matching")
  }
})

const showPassword = document.querySelector('.show-password') 

showPassword.addEventListener('click', () => {
  if (showPassword.classList.contains("toggled")) {
    password1.setAttribute("type", "password");
    password2.setAttribute("type", "password");
    showPassword.classList.remove("toggled");
    showPassword.textContent = "SHOW PASSWORD";
    console.log(showPassword.classList);
  } else if (!showPassword.classList.contains("toggled")) {
    password1.setAttribute("type", "text");
    password2.setAttribute("type", "text");
    showPassword.classList.add("toggled");
    showPassword.textContent = "HIDE PASSWORD";
    console.log(showPassword.classList);
  }
})
