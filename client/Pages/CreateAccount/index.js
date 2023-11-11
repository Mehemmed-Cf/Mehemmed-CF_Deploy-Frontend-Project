const USERNAME_REGEX = /^[a-zA-Z]{3,}$/;

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

const CreateAccountBtn = document.querySelector(".CreateAccount-Btn");

const userNameInput = document.querySelector(".UserName-Input");
const emailInput = document.querySelector(".Email-Input");
const passwordInput = document.querySelector(".Password-Input");
const confirmPasswordInput = document.querySelector(".Confirm_Password-Input");

const userErrorMessage = document.querySelector(".User-Error-Message");
const emailErrorMessage = document.querySelector(".Email-Error-Message");
const passwordErrorMessage = document.querySelector(".Password-Error-Message");
const confirmPasswordErrorMessage = document.querySelector(
  ".ConfirmPassword-Error-Message"
);

const buttonLoader = document.querySelector(".Button-Loader");

function UserNameValidation() {
  userNameInput.addEventListener("keyup", () => {
    setTimeout(() => {
      if (userNameInput.value === "") {
        userErrorMessage.classList.remove("True");
        userErrorMessage.classList.add("False");
        userErrorMessage.textContent = `You have an invisible username? That's cool`;
        return;
      }

      const username = userNameInput.value.trim();

      if (!USERNAME_REGEX.test(username)) {
        userErrorMessage.classList.remove("True");
        userErrorMessage.classList.add("False");
        userErrorMessage.textContent =
          "Username is not in a correct format, It should contain at least 3 letters";
      } else {
        userErrorMessage.classList.remove("False");
        userErrorMessage.classList.add("True");
        userErrorMessage.textContent = "Nice Username ;)";
      }
    }, 500);
  });
}

function EmailValidation() {
  emailInput.addEventListener("keyup", () => {
    setTimeout(() => {
      if (emailInput.value === "") {
        emailErrorMessage.classList.remove("True");
        emailErrorMessage.classList.add("False");
        emailErrorMessage.textContent = `You have an invisible email? That's cool`;
        return;
      }

      const email = emailInput.value.trim();

      if (!EMAIL_REGEX.test(email)) {
        emailErrorMessage.classList.remove("True");
        emailErrorMessage.classList.add("False");
        emailErrorMessage.textContent = "Email is not in a correct format";

        if (!/[a-zA-Z]/.test(email)) {
          emailErrorMessage.classList.remove("True");
          emailErrorMessage.classList.add("False");
          emailErrorMessage.textContent = "Email should contain letters.";
        } else if (!/@/.test(email)) {
          emailErrorMessage.classList.remove("True");
          emailErrorMessage.classList.add("False");
          emailErrorMessage.textContent = "Email should contain an @ symbol.";
        } else if (email.includes(" ")) {
          emailErrorMessage.classList.remove("True");
          emailErrorMessage.classList.add("False");
          emailErrorMessage.textContent = "Email cannot contain spaces.";
        }
      } else {
        emailErrorMessage.classList.remove("False");
        emailErrorMessage.classList.add("True");
        emailErrorMessage.textContent =
          "We Will hack your Information, Thanks ;)";
      }
    }, 500);
  });
}

function PasswordValidationAndConfirm() {
  passwordInput.addEventListener("keyup", () => {
    setTimeout(() => {
      if (passwordInput.value === "") {
        passwordErrorMessage.classList.remove("True");
        passwordErrorMessage.classList.add("False");
        passwordErrorMessage.textContent =
          "Also an invisible password? what are you invisible man or something?";
      }

      const password = passwordInput.value.trim();

      if (!PASSWORD_REGEX.test(password)) {
        passwordErrorMessage.classList.remove("True");
        passwordErrorMessage.classList.add("False");
        passwordErrorMessage.textContent =
          "Password is not in a correct format";

        if (!/[A-Z]/.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "Password should contain at least one uppercase letter.";
        } else if (!/[a-z]/.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "Password should contain at least one lowercase letter.";
        } else if (!/\d/.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "Password should contain at least one digit.";
        } else if (!/[@$!%*?&]/.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "Password should contain at least one special character.";
        } else if (password.length < 8 || password.length > 10) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "Password should be between 8 and 10 characters.";
        }
      } else {
        passwordErrorMessage.classList.remove("False");
        passwordErrorMessage.classList.add("True");
        passwordErrorMessage.textContent = "Strong Password!!";
      }
    }, 500);
  });

  confirmPasswordInput.addEventListener("keyup", () => {
    setTimeout(() => {
      if (!passwordErrorMessage.classList.contains("True")) {
        confirmPasswordErrorMessage.classList.remove("True");
        confirmPasswordErrorMessage.classList.add("False");
        confirmPasswordErrorMessage.textContent =
          "You do not seem like you have completed your password";
        return;
      }

      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordErrorMessage.classList.remove("True");
        confirmPasswordErrorMessage.classList.add("False");
        confirmPasswordErrorMessage.textContent = "Passwords do not match";
      } else {
        confirmPasswordErrorMessage.classList.remove("False");
        confirmPasswordErrorMessage.classList.add("True");
        confirmPasswordErrorMessage.textContent = "Good";
      }
    }, 500);
  });
}

function ValidateInputs() {
  UserNameValidation();
  EmailValidation();
  PasswordValidationAndConfirm();
}

function CheckAndSendToastForEmptyInputs() {
  if (
    userNameInput.value !== "" &&
    emailInput.value !== "" &&
    passwordInput.value !== ""
  ) {
  } else if (userNameInput.value === "") {
    userErrorMessage.classList.remove("True");
    userErrorMessage.classList.add("False");
    userErrorMessage.textContent = `You need to set a cool username!!`;
  }
  if (emailInput.value === "") {
    emailErrorMessage.classList.remove("True");
    emailErrorMessage.classList.add("False");
    emailErrorMessage.textContent = "You need to enter a valid email! ";
  }
  if (passwordInput.value === "") {
    passwordErrorMessage.classList.remove("True");
    passwordErrorMessage.classList.add("False");
    passwordErrorMessage.textContent = "You need to set a strong Password!!";
  }
}

async function RegisterUser(username, email, password) {
  showButtonLoader(true);
  const response = await fetch("http://localhost:3000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  if (response.status >= 200 && response.status <= 300) {
    Toastify({
      text: "Congratulations , Your Are Ready to see some Really good NFT's!!! ;)",
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
    showButtonLoader(false);
  } else {
    Toastify({
      text: "It seems like you have a problem with your registration please check Again ;(",
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
    showButtonLoader(false);
  }
}

AccountValidation();

function AccountValidation() {
  ValidateInputs();

  CreateAccountBtn.addEventListener("click", () => {
    CheckAndSendToastForEmptyInputs();

    if (
      userErrorMessage.classList.contains("True") &&
      emailErrorMessage.classList.contains("True") &&
      passwordErrorMessage.classList.contains("True") &&
      confirmPasswordErrorMessage.classList.contains("True")
    ) {
      username = userNameInput.value;
      email = emailInput.value;
      password = passwordInput.value;

      RegisterUser(username, email, password);
    } else {
      Toastify({
        text: "It seems like you have a problem with your registration please check Again ;(",
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
  });
}

function showButtonLoader(show) {
  buttonLoader.style.display = show ? "grid" : "none";
}
