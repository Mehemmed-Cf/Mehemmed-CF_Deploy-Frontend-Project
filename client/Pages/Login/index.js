const login_Btn = document.querySelector(".Login-Btn");

const userNameInput = document.querySelector(".UserName-Input");
const passwordInput = document.querySelector(".Password-Input");

const userErrorMessage = document.querySelector(".User-Error-Message");
const passwordErrorMessage = document.querySelector(".Password-Error-Message");

const buttonLoader = document.querySelector(".Button-Loader");

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

  const data = await response.json();

  if (response.status >= 200 && response.status <= 300) {
    window.open("http://127.0.0.1:5500/client/Pages/Home/index.html", "_self");
  } else {
    Toastify({
      text: data.error,
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
    showButtonLoader(true);

    username = userNameInput.value;
    password = passwordInput.value;

    LoginUser(username, password);

    showButtonLoader(false);
  });
}

function showButtonLoader(show) {
  buttonLoader.style.display = show ? "grid" : "none";
}
