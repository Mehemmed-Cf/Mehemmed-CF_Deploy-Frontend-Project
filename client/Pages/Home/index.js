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

getDataFromServer();

function getDataFromServer() {
  fetch("http://localhost:3000/api/creators", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => fillArtistContainer(data));
}

function fillArtistContainer(data) {
  if (!data) return;

  data.forEach((creator) => addCreator(creator));
}

function addCreator(data) {
  const Artist_Cards = document.querySelector(".Artist-Cards");

  const ArtistCard = document.createElement("div");
  ArtistCard.classList.add("Artist-Card");

  const Artist_Avatar = document.createElement("div");
  Artist_Avatar.className = "Artist-Avatar";

  const Artist_Info = document.createElement("div");
  Artist_Info.className = "Artist-Info";

  const Artist_Ranking = document.createElement("div");
  Artist_Ranking.className = "Ranking-Number";

  const AvatarIcon = document.createElement("img");
  AvatarIcon.src = "../../../" + data.profileImgPath;
  Artist_Avatar.append(AvatarIcon);

  const CreatorName = document.createElement("h1");
  CreatorName.textContent = data.name;

  const Sales_Info = document.createElement("div");
  Sales_Info.className = "Sales-Info";
  const Sales_Info_Key = document.createElement("p");
  Sales_Info_Key.className = "Sales-Info_Key";
  Sales_Info_Key.textContent = "Total Sales:";
  const Sales_Info_Value = document.createElement("p");
  Sales_Info_Value.className = "Sales-Info_Value";
  Sales_Info_Value.textContent = `${data.totalSale.value} ${data.totalSale.currency}`;
  Sales_Info.append(Sales_Info_Key, Sales_Info_Value);

  Artist_Info.append(CreatorName, Sales_Info);

  if (data.id > 9) {
    const RankingNumber = document.createElement("p");
    RankingNumber.textContent = data.id;
    RankingNumber.className = "position-left-change";
    Artist_Ranking.append(RankingNumber);
  } else {
    const RankingNumber = document.createElement("p");
    RankingNumber.textContent = data.id;
    Artist_Ranking.append(RankingNumber);
  }

  ArtistCard.append(Artist_Avatar, Artist_Info, Artist_Ranking);
  Artist_Cards.append(ArtistCard);

  ArtistCard.addEventListener("click", () => {
    window.open(
      `http://127.0.0.1:5500/client/Pages/Artist-Detail/index.html?id=${data.id}`,
      "_self"
    );
  });
}
