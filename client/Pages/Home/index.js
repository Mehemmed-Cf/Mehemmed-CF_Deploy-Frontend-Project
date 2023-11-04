const bars_Btn = document.querySelector(".Bars_Btn");
const Navigation_Links_Button = document.querySelector(
  ".NavigationLinksAndButton"
);
const SignUpBtn = document.querySelector(".SignUp-Btn");
const MarketPlaceLink = document.querySelector("#MarketPlaceLink");
const Rankings = document.querySelector("#Rankings");
const ConnectAWallet = document.querySelector("#ConnectAWallet");

ToggleOpen();

function ToggleOpen() {
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

  bars_Btn.addEventListener("click", (e) => {
    e.stopPropagation();

    MarketPlaceLink.style.display = "initial";
    SignUpBtn.style.display = "initial";
  });
}

SignUpBtn.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/client/Pages/CreateAccount/index.html");
});

const response = fetch("http://localhost:3000/api/creators", {
  method: "GET",
});

const data = response;

console.log(data);

const ArtistContainer = document.querySelector(".Artist-Cards");

const ArtistCards = document.querySelectorAll(".Artist-Card");

ArtistCards.forEach((ArtistCard) => {
  const Artist_Avatar = document.querySelector(".Artist-Avatar");
  const Artist_Info = document.querySelector(".Artist-Info");
  const Ranking_Number = document.querySelector(".Ranking-Number");

  const Image = document.createElement("img");

  Image.src = `{data.}`;
});
