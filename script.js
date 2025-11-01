const playButton = document.getElementById("playButton");
const teaser = document.getElementById("teaser");
const videoContainer = document.getElementById("videoContainer");

// poți apăsa oriunde pe clip, nu doar exact pe buton
videoContainer.addEventListener("click", () => {
  teaser.play();
  teaser.muted = false;
  playButton.style.display = "none";
});
