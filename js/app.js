const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const voice = document.getElementById("voice");
const container = document.getElementById("container");
const audioVolum = document.getElementById("audioVolum");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const proccessContainer = document.querySelector(".proccess-container");
const voiceProccess = document.getElementById("voice-proccess");

let indexConten = 0;
const musics = [
  "Abrobey- Qimmat Dunyo",
  "Jah Khalib - Медина",
  "Konsta-Qahramonlar",
  "Где ты теперь и с кем",
  "ჩუბინა ( @Kxan_Muz )",
  "I wanna be yours",
  "Summertime sadness ( @Kxan_Muz )",
  "как ты там ( speed up )",
];

function changeMusic(index) {
  cover.src = `../images/${musics[index]}.jpg`;
  audio.src = `../music/${musics[index]}.mp3`;
  title.textContent = musics[index];
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

function prevMusic() {
  if (musics.length - 1  <= indexConten) {
    indexConten = 0;
  } else {
    indexConten--;
  }

  changeMusic(indexConten);
  play();
}

audio.volume = voice.value / 100;

voice.addEventListener("input", () => {
  audio.volume = voice.value / 100;
  audioVolum.textContent = voice.value;
});

audioVolum.style.cssText = `
font-size:19px;
font-family: "Lora";
padding-left: 20px;
font-weight: 700;
 text-align: center;
`;

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

cover.addEventListener("click", () => {
  const isPlaying = container.classList.contains("playing");

  if (isPlaying) {
    pause();
  } else {
    play();
  }
});

function playingMusic() {
  let duration = audio.duration;
  let currentTime = audio.currentTime;
  proccessContainer.style.width = `${(currentTime / duration) * 100}%`;
}

forwardBtn.addEventListener("click", nextMusic);
backwardBtn.addEventListener("click", prevMusic);
audio.addEventListener("ended", nextMusic);
audio.addEventListener("timeupdate", playingMusic);
