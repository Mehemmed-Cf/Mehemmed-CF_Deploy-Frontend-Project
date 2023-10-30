const bars_Btn = document.querySelector(".Bars_Btn");

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
