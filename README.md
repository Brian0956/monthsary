<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>My little poem</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Poppins:wght@300;400&display=swap" rel="stylesheet">

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #fdf6f0, #f7e7e1);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b2e2e;
  padding: 40px 20px;
}

/* Tap overlay */
#musicPrompt {
  position: fixed;
  inset: 0;
  background: rgba(120, 80, 80, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  cursor: pointer;
}

#tapHeart {
  font-size: 4rem;
  animation: pulse 1.2s infinite;
  margin-bottom: 15px;
}

#musicPrompt h2 {
  font-family: 'Playfair Display', serif;
  color: #fff;
}

/* Card */
.card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 25px;
  padding: 40px;
  max-width: 550px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

h2 {
  font-weight: 300;
  margin-bottom: 20px;
}

.heart {
  font-size: 3rem;
  margin: 15px 0;
  animation: pulse 1.2s infinite;
}

p {
  line-height: 1.7;
  margin-bottom: 20px;
}

.counter {
  font-weight: 500;
  margin-bottom: 25px;
}

/* Floating hearts (subtle now) */
.floating-hearts span {
  position: absolute;
  bottom: -40px;
  font-size: 18px;
  animation: floatUp 10s linear infinite;
  opacity: 0.3;
}

/* Animations */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes floatUp {
  from { transform: translateY(0); }
  to { transform: translateY(-120vh); opacity: 0; }
}
</style>
</head>

<body>

<audio id="bgMusic" loop crossorigin="anonymous">
  <source src="https://raw.githubusercontent.com/Brian0956/monthsary/b4433e975a7736164a86599a8ce1c0baae8f7a82/I%20Like%20You%20So%20Much%2C%20Youll%20Know%20It.mp3" type="audio/mpeg">
</audio>

<div id="musicPrompt" onclick="startExperience()">
  <div id="tapHeart">🤍</div>
  <h2>Tap to open 💫</h2>
</div>

<div class="floating-hearts">
  <span style="left: 10%;">♡</span>
  <span style="left: 40%; animation-delay: 2s;">♡</span>
  <span style="left: 70%; animation-delay: 4s;">♡</span>
</div>

<div class="card">

  <div class="heart">🤍</div>

  <div class="counter" id="counter"></div>

  <p>
    Hi Audiee! I'll keep this simple… or at least I'll try.
    <br><br>
    I didn't expect to look at you romantically at first, but here we are. And honestly? I wouldn't change it for anything.
    <br><br>
    I just want you to know I'm genuinely happy to have you in my life — the kind of happy that makes everything feel lighter.
    <br><br>
    The way we clicked so naturally, like we've known each other forever, still surprises me. And how much we have in common? That just makes everything better.
    <br><br>
    I hope we keep this going — more late talks, more laughs, more moments that become memories. Because with you, it's always worth it.
    <br><br>
    I really like you. More than I expected to.
    <br><br>
    I like the way you make me smile for no reason, the way you stay in my thoughts, and how you became my favorite person to talk to.
    <br><br>
    You're slowly becoming my favorite habit… and I don't want to break it anytime soon.
    <br><br>
    So yeah… I really like you. And I'm hoping you like me just as much too 💕
  </p>

</div>
<script>
const startDate = new Date(2026, 0, 1);
const music = document.getElementById("bgMusic");

function startExperience() {
  const overlay = document.getElementById("musicPrompt");
  overlay.style.opacity = "0";
  setTimeout(() => overlay.style.display = "none", 500);

  music.play().catch(() => {});
}

function updateCounter() {
  const now = new Date();
  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();
  if (now.getDate() < startDate.getDate()) months--;


}

updateCounter();
</script>

</body>
</html>
