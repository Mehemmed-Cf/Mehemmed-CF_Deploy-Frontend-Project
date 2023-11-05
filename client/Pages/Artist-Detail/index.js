getDataForCreators();
getDataForNFTs();

function getDataForCreators() {
  fetch("http://localhost:3000/api/creators", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let searchParams = new URLSearchParams(window.location.search);

      let paramsCreatorId = searchParams.get("id");

      let creator = data.find((c) => paramsCreatorId == c.id);

      if (!creator) {
        window.open(
          `http://127.0.0.1:5500/client/Pages/Not-Found/index.html`,
          "_self"
        );
      }

      fillArtistInfo(creator);
      fillArtistNFTs(creator);
    });
}

function getDataForNFTs() {
  fetch("http://localhost:3000/api/nfts", {
    method: "GEt",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
const Artist_Info = document.querySelector(".Artist-Info");
const NFT_Cards_Section = document.querySelector(".NFT-Cards-Section");

function fillArtistInfo(creator) {
  fillArtistAvatar(creator);
  fillArtistChainId(creator);
  fillArtistName(creator);
  fillArtistStats(creator);
  fillArtistBio(creator);
  fillArtistLinks();
}

function fillArtistNFTs(creator) {
  const NFT_Card = document.createElement("div");
  NFT_Card.className = "NFT-Card";
}

function fillArtistAvatar(creator) {
  const Avatar = document.querySelector(".Avatar");
  const ProfileIcon = document.createElement("img");

  ProfileIcon.src = "../../../" + creator.profileImgPath;
  Avatar.appendChild(ProfileIcon);
}

function fillArtistChainId(creator) {
  const ChainId_Btn = document.querySelector(".Chain-Id-Btn");
  const chainIDContent = document.createElement("p");
  chainIDContent.textContent = creator.chainId;
  ChainId_Btn.appendChild(chainIDContent);

  ChainId_Btn.addEventListener("click", () => {
    navigator.clipboard.writeText(chainIDContent.textContent);
    Toastify({
      text: "Copy That Fella! ;)",
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

function fillArtistName(creator) {
  const Artist_Name = document.createElement("h1");
  Artist_Name.textContent = creator.name;
  Artist_Info.append(Artist_Name);
}

function fillArtistStats(creator) {
  const Artist_Stats = document.createElement("div");
  Artist_Stats.className = "Stats";

  Artist_Info.append(Artist_Stats);

  const Artist_Volume = document.createElement("div");
  Artist_Volume.className = "Volume";

  const Volume_Key = document.createElement("h1");
  Volume_Key.textContent = creator.volume;

  const Volume_Value = document.createElement("p");
  Volume_Value.textContent = "Volume";

  Artist_Volume.append(Volume_Key, Volume_Value);

  const NFTs_Sold = document.createElement("div");
  NFTs_Sold.className = "NFTs-Sold";

  const NFTs_Key = document.createElement("h1");
  NFTs_Key.textContent = creator.nftSold;

  const NFTs_Value = document.createElement("p");
  NFTs_Value.textContent = "NFTs Sold";

  NFTs_Sold.append(NFTs_Key, NFTs_Value);

  const Artist_Followers = document.createElement("div");
  Artist_Followers.className = "Followers";

  const Followers_Key = document.createElement("h1");
  Followers_Key.textContent = creator.followers;

  const Followers_Value = document.createElement("p");
  Followers_Value.textContent = "Followers";

  Artist_Followers.append(Followers_Key, Followers_Value);

  Artist_Stats.append(Artist_Volume, NFTs_Sold, Artist_Followers);
}

function fillArtistBio(creator) {
  const Artist_Bio = document.createElement("div");
  Artist_Bio.className = "Bio";

  const Bio_Key = document.createElement("h1");
  Bio_Key.textContent = "Bio";

  const Bio_Value = document.createElement("p");
  Bio_Value.textContent = creator.bio;

  Artist_Bio.append(Bio_Key, Bio_Value);

  Artist_Info.append(Artist_Bio);
}

function fillArtistLinks() {
  const Web_Links = document.createElement("div");
  Web_Links.className = "Web-Links";

  const Links_Key = document.createElement("h1");
  Links_Key.textContent = "Links";

  const Icons = document.createElement("div");
  Icons.className = "Icons";

  const IconElements = document.createElement("img");
  IconElements.src = "../assets/icons/Icons-SocialMedia.svg";
  Icons.append(IconElements);

  Web_Links.append(Links_Key, Icons);

  Artist_Info.append(Web_Links);
}
