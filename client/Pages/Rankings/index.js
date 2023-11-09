const Ranking_Items = document.querySelector(".Ranking-Items");
const loaderElement = document.querySelector(".Loader");

getDataForCreators();

function getDataForCreators() {
  showLoader(true);
  fetch(`http://localhost:3000/api/creators`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((creator) => {
      fillItemRanking(creator);
    });
  showLoader(false);
}

function fillItemRanking(data) {
  if (!data) return;

  data.forEach((creator) => addCreatorItem(creator));
}

function addCreatorItem(creator) {
  const Ranking_Item = document.createElement("div");
  Ranking_Item.className = "Ranking-Item";
  Ranking_Item.classList.add("Container");

  const RankAndArtist = document.createElement("div");
  RankAndArtist.className = "RankAndArtist";

  const Ranking_Number = document.createElement("div");
  Ranking_Number.className = "Ranking-Number";

  const Ranking_Number_Element = document.createElement("p");
  Ranking_Number_Element.textContent = creator.id;

  const Artist_Card = document.createElement("div");
  Artist_Card.className = "Artist-Card";

  const Artist_Avatar = document.createElement("div");
  Artist_Avatar.className = "Artist-Avatar";

  const Avatar = document.createElement("div");
  Avatar.className = "Avatar";

  const AvatarElement = document.createElement("img");
  AvatarElement.src = "../../../" + creator.profileImgPath;

  const Artist_Info = document.createElement("div");
  Artist_Info.className = "Artist-Info";

  const Artist_Name = document.createElement("h1");
  Artist_Name.textContent = creator.name;

  Artist_Info.append(Artist_Name);

  Avatar.append(AvatarElement);

  Artist_Avatar.append(Avatar);

  Ranking_Number.append(Ranking_Number_Element);

  Artist_Card.append(Artist_Avatar, Artist_Info);

  const Stats = document.createElement("div");
  Stats.className = "Stats";

  const Change = document.createElement("div");
  Change.className = "Change";

  const ChangeElement = document.createElement("p");
  ChangeElement.textContent = "+" + creator.totalSale.value;

  Change.append(ChangeElement);

  const NFTs_Sold = document.createElement("div");
  NFTs_Sold.className = "NFTs-Sold";

  const NFts_Sold_Element = document.createElement("p");
  NFts_Sold_Element.textContent = creator.nftSold;

  NFTs_Sold.append(NFts_Sold_Element);

  const Volume = document.createElement("div");
  Volume.className = "Volume";

  const Volume_Element = document.createElement("p");
  Volume_Element.textContent = creator.volume;

  Volume.append(Volume_Element);

  Stats.append(Change, NFTs_Sold, Volume);

  RankAndArtist.append(Ranking_Number, Artist_Card, Stats);

  const Delete_Btn = document.createElement("button");
  Delete_Btn.className = "Delete-Btn";
  Delete_Btn.textContent = "Delete";

  Ranking_Item.append(RankAndArtist, Delete_Btn);

  Ranking_Items.append(Ranking_Item);

  if (creator.id > 9) {
    Ranking_Number_Element.classList.add("position-left-change");
  }

  Artist_Card.addEventListener("click", () => {
    window.open(
      `http://127.0.0.1:5500/client/Pages/Artist-Detail/index.html?id=${creator.id}`,
      "_self"
    );
  });

  Delete_Btn.addEventListener("click", () => {
    deleteCreatorItem(creator, Ranking_Item);
  });
}

function deleteCreatorItem(creator, Item) {
  if (
    confirm(
      `Are you sure you want to delete the creator with the id ${creator.id}`
    )
  ) {
    fetch(`http://localhost:3000/api/creators/${creator.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        Item.remove();
        Toastify({
          text: "You Just threw a big pile of effort into the trash! ;)",
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
}

function showLoader(show) {
  loaderElement.style.display = show ? "grid" : "none";
}
