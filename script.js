onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const music = document.getElementById("bg-music");

// Try to autoplay unmuted first (works if browser allows it)
music.muted = false;
music.volume = 0.3;
music.play().catch(() => {
  // Browser blocked it — wait for first click then unmute
  music.muted = true;
  music.play();

  const unlock = () => {
    music.muted = false;
    music.volume = 0.3;
    document.removeEventListener("click", unlock);
  };

  document.addEventListener("click", unlock);
  });
