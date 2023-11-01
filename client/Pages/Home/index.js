const bars_Btn = document.querySelector(".Bars_Btn");
const Navigation_Menu = document.querySelector(".Navigation_Menu");

function ToggleOpen() {
  bars_Btn.addEventListener("click", (e) => {
    e.stopPropagation();
    Navigation_Menu.classList.toggle(".Open");
  });

  document.addEventListener("click", () => {
    if (bars_Btn.classList.contains("Rotate")) {
      bars_Btn.classList.remove("Rotate");
      bars_Btn.classList.add("Rotate-Back");
    }
  });

  bars_Btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (bars_Btn.classList.contains("Rotate")) {
      bars_Btn.classList.remove("Rotate");
      bars_Btn.classList.add("Rotate-Back");
    } else {
      bars_Btn.classList.add("Rotate");
      bars_Btn.classList.remove("Rotate-Back");
    }
  });
}

const SignUpBtn = document.querySelector(".SignUp-Btn");

SignUpBtn.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/client/Pages/CreateAccount/index.html");
});

EmailValidation();

function EmailValidation() {
  const EMAIL_REGEX =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const subscribeForms = document.querySelectorAll(".Subscribe-Form");

  subscribeForms.forEach((subscribeForm) => {
    const emailInput = subscribeForm.querySelector(".Subscribe-Input");
    const errorMessage = subscribeForm.querySelector(".Error-Message");
    const subscribeBtn = subscribeForm.querySelector(".Subscribe-Btn");

    subscribeBtn.addEventListener("click", () => {
      if (emailInput.value === "") {
        errorMessage.classList.remove("True");
        errorMessage.classList.add("False");
        errorMessage.textContent = `You have an invisible email? That's cool`;
        return;
      }

      const email = emailInput.value.trim();

      if (!EMAIL_REGEX.test(email)) {
        errorMessage.classList.remove("True");
        errorMessage.classList.add("False");
        errorMessage.textContent =
          "Email is not in a correct format, please check again";

        if (!/[a-zA-Z]/.test(email)) {
          errorMessage.textContent = "Email should contain letters";
        } else if (!/@/.test(email)) {
          errorMessage.textContent = "Email should contain an @ symbol";
        } else if (email.includes(" ")) {
          errorMessage.textContent = "Email cannot contain spaces";
        }
      } else {
        errorMessage.classList.remove("False");
        errorMessage.classList.add("True");
        errorMessage.textContent =
          "Huge Thanks For Subscribing, you are our new pal!";
        Toastify({
          text: "You Subscribed! ;)",
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "green",
          },
        }).showToast();
      }
    });
  });
}

// function EmailValidation() {
//   const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const subscribeForm = document.getElementsByClassName(".Subscribe-Form");
//   const emailInput = document.getElementsByClassName(".Subscribe-Input");
//   const errorMessage = document.getElementsByClassName(".Error-Message");
//   const subscribeBtn = document.getElementsByClassName(".Subscribe-Btn");

//   subscribeBtn.addEventListener("click", () => {
//     if (emailInput.value === "") {
//       errorMessage.classList.remove("True");
//       errorMessage.classList.add("False");
//       errorMessage.textContent = `You have an invisible email? That's cool`;
//       return;
//     }

//     const email = emailInput.value.trim();

//     if (!EMAIL_REGEX.test(email)) {
//       errorMessage.classList.remove("True");
//       errorMessage.classList.add("False");

//       if (!email.includes("@")) {
//         errorMessage.textContent = "Email must contain the @ symbol";
//       } else if (email.startsWith("@") || email.endsWith("@")) {
//         errorMessage.textContent = "Email cannot start or end with @ symbol";
//       } else if (email.includes("..")) {
//         errorMessage.textContent =
//           "Email cannot contain consecutive periods (..)";
//       } else if (email.includes(" ")) {
//         errorMessage.textContent = "Email cannot contain spaces";
//       } else {
//         errorMessage.textContent =
//           "Email is not in a correct format, please check again";
//       }
//     } else {
//       errorMessage.classList.remove("False");
//       errorMessage.classList.add("True");
//       errorMessage.textContent =
//         "Huge Thanks For Subscribing, you are my new pal!";
//     }
//   });
// }
