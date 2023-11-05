getDataFromServer();

function getDataFromServer() {
  fetch("http://localhost:3000/api/creators", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let searchParams = new URLSearchParams(window.location.search);

      let paramsCreatorId = searchParams.get("id");

      let creator = data.find((c) => paramsCreatorId == c.id);

      fillArtistInfo(creator);
      fillArtistNFTs(creator);
    });
}

const Artist_Info = document.querySelector(".Artist-Info");

function fillArtistInfo(creator) {
  fillArtistAvatar(creator);
  fillArtistChainId(creator);
  fillArtistName(creator);
  fillArtistStats(creator);
  fillArtistBio(creator);
}

function fillArtistNFTs(creator) {}

function fillArtistAvatar(creator) {
  const Avatar = document.querySelector(".Avatar");
  const ProfileIcon = document.createElement("img");

  ProfileIcon.src = "../../../" + creator.profileImgPath;
  Avatar.appendChild(ProfileIcon);
}

function fillArtistChainId(creator) {
  const ChainId = document.querySelector(".Chain-Id-Btn");
  const chainIDContent = document.createElement("p");
  chainIDContent.textContent = creator.chainId;
  ChainId.appendChild(chainIDContent);
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
