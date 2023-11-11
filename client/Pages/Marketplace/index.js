const NFT_Cards_Section = document.querySelector(".NFT-Cards_Section");

function getDataForNFTs() {
  showLoader(true);
}

function showLoader(show) {
  loaderElement.style.display = show ? "grid" : "none";
}
