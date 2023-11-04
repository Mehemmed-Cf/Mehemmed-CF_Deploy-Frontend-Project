const login_Btn = document.querySelector(".Login-Btn");

const userNameInput = document.querySelector(".UserName-Input");
const passwordInput = document.querySelector(".Password-Input");

const userErrorMessage = document.querySelector(".User-Error-Message");
const passwordErrorMessage = document.querySelector(".Password-Error-Message");

// async function LoginUser(username, password) {
//   const response = await fetch("http://localhost:3000/api/login", {
//     method: "POST",
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

function LoginUser(username, password) {
  fetch("http://localhost:3000/api/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
}

function LoginValidation() {
  login_Btn.addEventListener("click", () => {
    username = userNameInput.value;
    password = passwordInput.value;

    LoginUser(username, password);
    Toastify({
      text: "Congratulations , Your are Logged in successfully ;)",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "green",
      },
    }).showToast();
  });
}

LoginValidation();
