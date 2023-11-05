getDataFromServer();

function getDataFromServer() {
  fetch("http://localhost:3000/api/creators", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      let searchParams = new URLSearchParams(window.location.search);

      let paramsCreatorId = searchParams.get("{id}");

      let creator = data.find((c) => paramsCreatorId == c.id);

      fillArtistInfo(creator);
    });
}

function fillArtistInfo(creator) {
  const Avatar = document.querySelector(".Avatar");
  const ProfileIcon = document.createElement("img");

  ProfileIcon.src = creator.profileImgPath;
  Avatar.appendChild(ProfileIcon);

  const ChainId = document.querySelector(".Chain-Id-Btn");
  const chainIDContent = document.createElement("p");
  chainIDContent.textContent = creator.chainId;
  ChainId.appendChild(chainIDContent);
}
