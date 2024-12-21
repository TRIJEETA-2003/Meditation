let minutesInput = document.getElementById("minutesInput");
let secondsInput = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let timerInterval = null;
let totalSeconds = getInputSeconds();
const audio = new Audio("../assets/music/focus_gamma.mp3");
audio.loop = true;

// Start Timer
startBtn.addEventListener("click", () => {
  if (timerInterval === null) {
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    minutesInput = document.getElementById("minutesInput");
    secondsInput = document.getElementById("secondsInput");
    totalSeconds = getInputSeconds();
    audio.play();
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateInputs(totalSeconds);
      } else {
        stopTimer();
        alert("Time's up!");
      }
    }, 1000);
  }
});

// Stop Timer
stopBtn.addEventListener("click", stopTimer);

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
    audio.pause();
    audio.currentTime = 0;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
  }
}

// Reset Timer
resetBtn.addEventListener("click", () => {
  stopTimer();
  totalSeconds = 60; // Default to 1 minute
  updateInputs(totalSeconds);
  minutesInput.disabled = false;
  secondsInput.disabled = false;
});

// Helper Functions
function getInputSeconds() {
  const minutes = parseInt(minutesInput.value, 10) || 0;
  const seconds = parseInt(secondsInput.value, 10) || 0;
  return minutes * 60 + seconds;
}

function updateInputs(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  minutesInput.value = minutes;
  secondsInput.value = seconds;
}

