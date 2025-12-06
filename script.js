const sounds = {
  dog: new Audio("sounds/dog.mp3"),
  clap: new Audio("sounds/clap.mp3"),
  pop: new Audio("sounds/pop.mp3"),
  laugh: new Audio("sounds/laugh.mp3"),
  bell: new Audio("sounds/bell.mp3"),   
  horn: new Audio("sounds/horn.mp3")    
};

const buttons = document.querySelectorAll(".btn");
const volumeSlider = document.getElementById("vol");
const muteBtn = document.getElementById("muteBtn");

let muted = false;

// function to stop all sounds
function stopAllSounds() {
  for (let key in sounds) {
    sounds[key].pause();
    sounds[key].currentTime = 0;
  }
}

// play sound on button click (only one at a time)
buttons.forEach(btn => {
  btn.addEventListener("click", function () {

    // stop any sound that is already playing
    stopAllSounds();

    let soundName = btn.getAttribute("data-sound");
    let audio = sounds[soundName];

    audio.play();
  });
});

// control volume
volumeSlider.addEventListener("input", function () {
  let vol = volumeSlider.value;

  for (let key in sounds) {
    sounds[key].volume = vol;
  }
});

// mute button
muteBtn.addEventListener("click", function () {
  muted = !muted;

  for (let key in sounds) {
    sounds[key].muted = muted;
  }

  muteBtn.innerText = muted ? "🔊 Unmute" : "🔇 Mute";
});
