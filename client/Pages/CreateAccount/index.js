AccountValidation();

function AccountValidation() {
  const USERNAME_REGEX = /^[a-zA-Z]{3,}$/;

  const EMAIL_REGEX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

  const CreateAccountBtn = document.querySelector(".CreateAccount-Btn");

  const userNameInput = document.querySelector(".UserName-Input");
  const emailInput = document.querySelector(".Email-Input");
  const passwordInput = document.querySelector(".Password-Input");
  const confirmPasswordInput = document.querySelector(
    ".Confirm_Password-Input"
  );

  const userErrorMessage = document.querySelector(".User-Error-Message");
  const emailErrorMessage = document.querySelector(".Email-Error-Message");
  const passwordErrorMessage = document.querySelector(
    ".Password-Error-Message"
  );
  const confirmPasswordErrorMessage = document.querySelector(
    ".ConfirmPassword-Error-Message"
  );

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
        emailErrorMessage.textContent =
          "Email is not in a correct format, please check again";

        if (!/[a-zA-Z]/.test(email)) {
          emailErrorMessage.textContent = "Email should contain letters";
        } else if (!/@/.test(email)) {
          emailErrorMessage.textContent = "Email should contain an @ symbol";
        } else if (email.includes(" ")) {
          emailErrorMessage.textContent = "Email cannot contain spaces";
        }
      } else {
        emailErrorMessage.classList.remove("False");
        emailErrorMessage.classList.add("True");
        emailErrorMessage.textContent = "Nice Email ;)";
      }
    }, 500);
  });

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
          "password is not in a correct format, please check again";

        if (!/ *[A-Za-z] /.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "password should contain at least one lowercase and one uppercase letter";
        } else if (!/ *\d /.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "password should contain at least one digit";
        } else if (!/ *[@$!%*?&] /.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "password should contain at least one special character";
        } else if (!/ [A-Za-z\d@$!%*?&]{8,10}/.test(password)) {
          passwordErrorMessage.classList.remove("True");
          passwordErrorMessage.classList.add("False");
          passwordErrorMessage.textContent =
            "password should contain at least 8-10 characters";
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
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordErrorMessage.classList.remove("True");
        confirmPasswordErrorMessage.classList.add("False");
        confirmPasswordErrorMessage.textContent = "Passwords do not match";
      }
    }, 500);
  });
  CreateAccountBtn.addEventListener("click", () => {
    if (
      !userNameInput.value === "" &&
      !emailInput.value === "" &&
      !passwordInput.value === ""
    ) {
      Toastify({
        text: "Your account was successfully Created , Welcome To NFT Marketplace!!;)",
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
    }
  });
}
