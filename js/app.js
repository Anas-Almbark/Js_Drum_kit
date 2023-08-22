const sounds = {
  A: "sounds/clap.wav",
  S: "sounds/hihat.wav",
  D: "sounds/kick.wav",
  F: "sounds/openhat.wav",
  G: "sounds/boom.wav",
  H: "sounds/ride.wav",
  J: "sounds/snare.wav",
  K: "sounds/tom.wav",
  L: "sounds/tink.wav",
};

let audio = document.getElementById("audio");
document.addEventListener("keypress", function (e) {
  for (let sound in sounds) {
    if (e.key.toUpperCase() === sound || e.key.toLowerCase() === sound) {
      audio.src = sounds[sound];
      audio.play();
    }
  }
});
