const playButton = document.getElementById("playButton");
const teaser = document.getElementById("teaser");

playButton.addEventListener("click", () => {
  teaser.play();
  teaser.muted = false;
  playButton.style.display = "none";
});
