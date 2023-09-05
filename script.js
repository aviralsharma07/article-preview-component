const shareButton = document.querySelector(".share-button");
const sharePopup = document.querySelector(".share-popup");

shareButton.addEventListener("click", () => {
  sharePopup.classList.toggle("show-popup");
  shareButton.style.backgroundColor = "hsl(212, 23%, 69%)";
});

// Close the popup when clicking outside of it
document.addEventListener("click", (event) => {
  if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
    sharePopup.classList.remove("show-popup");
  }
});
