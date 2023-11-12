let searchParams = new URLSearchParams(window.location.search);
let paramsCreatorId = searchParams.get("id");
let count = JSON.parse(localStorage.getItem("count")) ?? [];
const loaderElement = document.querySelector(".Loader");
const ChainId_Btn = document.querySelector(".Chain-Id-Btn");

const Follow_Btn = document.querySelector(".Follow-Btn");
const PlusIcon = document.querySelector(".Plus");
const FollowIcon = document.querySelector(".Follow");

if (count > 0) {
  PlusIcon.style.display = "none";
  FollowIcon.style.display = "initial";
} else if (count == 0) {
  PlusIcon.style.display = "initial";
  FollowIcon.style.display = "none";
}

Follow_Btn.addEventListener("click", () => {
  if (count == 0) {
    PlusIcon.style.display = "none";
    FollowIcon.style.display = "initial";
    Toastify({
      text: "Follow That Fella! ;)",
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
  } else {
    Toastify({
      text: "I understand that you love this guy too much but you can only follow once",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "grey",
      },
    }).showToast();
  }

  count = 1;
  localStorage.setItem("count", JSON.stringify(count));
});

getDataForCreators();

function getDataForCreators() {
  showLoader(true);
  fetch(`http://localhost:3000/api/creators/${paramsCreatorId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((creator) => {
      fillArtistInfo(creator);
      fillArtistNFTs(creator);
    });
  showLoader(false);
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
  creator.nfts.forEach((nft) => {
    const NFT_Card = document.createElement("div");
    NFT_Card.className = "NFT-Card";

    const Image = document.createElement("div");
    Image.className = "Image";

    const ImageElement = document.createElement("img");
    ImageElement.src = "../../../" + nft.imgPath;
    Image.append(ImageElement);

    const NFT_Info = document.createElement("div");
    NFT_Info.className = "NFT-Info ";

    const Artist_Info = document.createElement("div");
    Artist_Info.className = "Artist-Info";

    const NFT_Name = document.createElement("h1");
    NFT_Name.textContent = nft.name;

    const Artist_Avatar_And_Name = document.createElement("div");
    Artist_Avatar_And_Name.className = "Artist-AvatarAndName";

    const Artist_Avatar = document.createElement("div");
    Artist_Avatar.className = "Avatar";

    const Avatar_Image = document.createElement("img");
    Avatar_Image.src = "../../../" + creator.profileImgPath;

    Artist_Avatar.append(Avatar_Image);

    const Artist_Name = document.createElement("h1");
    Artist_Name.textContent = creator.name;

    Artist_Avatar_And_Name.append(Artist_Avatar, Artist_Name);

    Artist_Info.append(NFT_Name, Artist_Avatar_And_Name);

    const Additional_Info = document.createElement("div");
    Additional_Info.className = "Additional-Info";

    const Price = document.createElement("div");
    Price.className = "Price";

    const Price_Key = document.createElement("h1");
    Price_Key.textContent = "Price";

    const Price_Value = document.createElement("p");
    Price_Value.textContent = nft.price.value + "" + nft.price.currency;

    Price.append(Price_Key, Price_Value);

    const HighestBid = document.createElement("div");
    HighestBid.className = "Highest-Bid";

    const Bid_Key = document.createElement("h1");
    Bid_Key.textContent = "Highest Bid";

    const Bid_Value = document.createElement("p");
    Bid_Value.textContent = nft.highestBid.value + "" + nft.highestBid.currency;

    HighestBid.append(Bid_Key, Bid_Value);

    Additional_Info.append(Price, HighestBid);

    NFT_Info.append(Artist_Info, Additional_Info);

    NFT_Card.append(Image, NFT_Info);

    NFT_Cards_Section.append(NFT_Card);
  });
}

function fillArtistAvatar(creator) {
  const Avatar = document.querySelector(".Avatar");
  const ProfileIcon = document.createElement("img");

  ProfileIcon.src = "../../../" + creator.profileImgPath;
  Avatar.appendChild(ProfileIcon);
}

function fillArtistChainId(creator) {
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
  IconElements.src = "../../assets/icons/Icons-SocialMedia.svg";
  Icons.append(IconElements);

  Web_Links.append(Links_Key, Icons);

  Artist_Info.append(Web_Links);
}

function showLoader(show) {
  loaderElement.style.display = show ? "grid" : "none";
}
