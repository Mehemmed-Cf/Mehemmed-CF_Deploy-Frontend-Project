const Marketplace_Link = document.querySelector("#MarketPlaceLink");
const bars_Btn = document.querySelector(".Bars_Btn");
const Navigation_Links_Button = document.querySelector(
  ".NavigationLinksAndButton"
);
const SignUp_Btn = document.querySelector(".Bars_Btn");
const SignUpBtn = document.querySelector(".SignUp-Btn");
const Logo = document.querySelector(".Logo");
const Rankings_Link = document.querySelector("#Rankings");

EmailValidation();

function EmailValidation() {
  const EMAIL_REGEX =
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/i;

  const subscribeForms = document.querySelectorAll(".Subscribe-Form");

  subscribeForms.forEach((subscribeForm) => {
    const emailInput = subscribeForm.querySelector(".Subscribe-Input");
    const errorMessage = subscribeForm.querySelector(".Error-Message");
    const subscribeBtn = subscribeForm.querySelector(".Subscribe-Btn");

    emailInput.addEventListener("keyup", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        errorMessage.classList.remove("True");
        errorMessage.classList.add("False");
        errorMessage.textContent = `You have an invisible email? That's cool`;
        return;
      }

      if (!EMAIL_REGEX.test(email)) {
        errorMessage.classList.remove("True");
        errorMessage.classList.add("False");

        if (!/@/.test(email)) {
          errorMessage.textContent = "Email should contain an @ symbol.";
        } else if (email.includes(" ")) {
          errorMessage.textContent = "Email cannot contain spaces.";
        } else if (!/[a-zA-Z]/.test(email)) {
          errorMessage.textContent = "Email should contain letters.";
        }

        errorMessage.textContent = "Please enter a valid email address.";
      } else {
        errorMessage.classList.remove("False");
        errorMessage.classList.add("True");
        errorMessage.textContent = "We Will hack your Information, Thanks ;)";
      }
    });

    subscribeBtn.addEventListener("click", () => {
      if (errorMessage.classList.contains("True")) {
        Toastify({
          text: "Congratulations , You Subscribed! ;)",
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

    document.addEventListener("click", (e) => {
      e.stopPropagation();

      errorMessage.textContent = "";
    });
  });
}

toggleNavbarAndRotateBtn();

function toggleNavbarAndRotateBtn() {
  document.addEventListener("click", () => {
    if (bars_Btn.classList.contains("Rotate")) {
      bars_Btn.classList.remove("Rotate");
      bars_Btn.classList.add("Rotate-Back");

      Navigation_Links_Button.classList.remove("Navbar-Open");
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

  bars_Btn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (bars_Btn.classList.contains("Rotate")) {
      Navigation_Links_Button.classList.add("Navbar-Open");
    } else if (bars_Btn.classList.contains("Rotate-Back")) {
      Navigation_Links_Button.classList.remove("Navbar-Open");
    }
  });
}

SignUpBtn.addEventListener("click", () => {
  window.open(
    "http://127.0.0.1:5500/client/Pages/CreateAccount/index.html",
    "_self"
  );
});

Rankings_Link.addEventListener("click", () => {
  window.open(
    "http://127.0.0.1:5500/client/Pages/Rankings/index.html",
    "_self"
  );
});

Logo.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/client/Pages/Home/index.html", "_self");
});

Marketplace_Link.addEventListener("click", () => {
  window.open(
    "http://127.0.0.1:5500/client/Pages/Marketplace/index.html",
    "_self"
  );
});
