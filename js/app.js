const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const voice = document.getElementById("voice");
const container = document.getElementById("container");
const audioVolum = document.getElementById("audioVolum");
const cover = document.getElementById("cover");

let indexConten = 0;
const musics = [
  "Abrobey- Qimmat Dunyo",
  "Jah Khalib - Медина",
  "Konsta-Qahramonlar",
  "Sherali Jo'rayev - Inson o'zing",
];

function changeMusic(index) {
  cover.src = `../images/${musics[index]}.jpg`;
  audio.src = `../music/${musics[index]}.mp3`;
}

changeMusic(indexConten);

function nextMusic() {
  if (musics.length - 1 <= indexConten) {
    indexConten = 0;
  } else {
    indexConten++;
  }

  changeMusic(indexConten);
  play();
}


// // musiqani ortga qaytarish uchun
// function prevMusic() {
//   if (musics.length - 1 <= indexConten) {
//     indexConten = 0;
//   } else {
//     indexConten++;
//   }

//   changeMusic(indexConten);
//   play();
// }

audio.volume = voice.value / 100;

voice.addEventListener("input", () => {
  audio.volume = voice.value / 100;
  audioVolum.textContent = voice.value;
});

function play() {
  container.classList.add("playing");
  audio.play();
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function pause() {
  container.classList.remove("playing");
  audio.pause();
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

playBtn.addEventListener("click", () => {
  const isPlaying = container.classList.contains("playing");

  if (isPlaying) {
    pause();
  } else {
    play();
  }
});

forwardBtn.addEventListener("click", nextMusic);
// backwardBtn.addEventListener("click", prevMusic);
