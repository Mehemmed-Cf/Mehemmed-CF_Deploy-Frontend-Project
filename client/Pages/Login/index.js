const login_Btn = document.querySelector(".Login-Btn");

const userNameInput = document.querySelector(".UserName-Input");
const passwordInput = document.querySelector(".Password-Input");

const userErrorMessage = document.querySelector(".User-Error-Message");
const passwordErrorMessage = document.querySelector(".Password-Error-Message");

async function LoginUser(username, password) {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    console.log(response);

    if (response.ok) {
      console.log("User Logged successfully:", data);
    }
  } catch {
    console.log("An error occurred trying to Login:", data);
  }
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
