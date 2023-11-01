function EmailValidation() {
  const EMAIL_REGEX =
    /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g;

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
      }
      Toastify({
        text: "You Subscribed! ;)",
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
  });
}
