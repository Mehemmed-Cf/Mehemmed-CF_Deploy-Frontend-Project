const NFT_Cards_Section = document.querySelector(".NFT-Cards_Section");

getDataForNFTs();

async function getDataForNFTs() {
  // showLoader(true);

  const response = await fetch("http://localhost:3000/api/nfts", {
    method: "GET",
    pageSize: 6,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function showLoader(show) {
  loaderElement.style.display = show ? "grid" : "none";
}
