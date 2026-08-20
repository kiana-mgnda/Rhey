const PASSWORD = "Rheychelle";

const lockScreen = document.getElementById("lockScreen");
const site = document.getElementById("site");
const passwordInput = document.getElementById("passwordInput");
const enterBtn = document.getElementById("enterBtn");
const error = document.getElementById("error");
const readBtn = document.getElementById("readBtn");




    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.value = melody[step % melody.length];

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.55);

    osc.connect(gain);
    gain.connect(master);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.58);

    step++;
  };

  

function stopMusic() {
  playing = false;
  clearInterval(musicTimer);
  musicStatus.textContent = "Soundtrack paused.";
  musicBtn.textContent = "♫ Tap to Play";
}

function unlock() {
  if (passwordInput.value === PASSWORD) {
    lockScreen.classList.add("hidden");
    site.classList.remove("hidden");
    window.scrollTo(0, 0);
  } else {
    error.textContent = "Wrong password. Try again.";
    passwordInput.select();
  }
}

enterBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlock();
});

readBtn.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({ behavior: "smooth" });
});

