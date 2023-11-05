const login_Btn = document.querySelector(".Login-Btn");

const userNameInput = document.querySelector(".UserName-Input");
const passwordInput = document.querySelector(".Password-Input");

const userErrorMessage = document.querySelector(".User-Error-Message");
const passwordErrorMessage = document.querySelector(".Password-Error-Message");

async function LoginUser(username, password) {
  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (response.status >= 200 && response.status <= 300) {
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
  } else {
    Toastify({
      text: " We are sorry , We could not log you in :(",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "red",
      },
    }).showToast();
  }
}

LoginValidation();

function LoginValidation() {
  login_Btn.addEventListener("click", () => {
    username = userNameInput.value;
    password = passwordInput.value;

    LoginUser(username, password);
  });
}
