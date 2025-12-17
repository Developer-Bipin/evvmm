let voted = false;

function vote(row){
  if(voted) return;
  voted = true;

  const beep = document.getElementById("beep");
  const bgSound = document.getElementById("bgSound");
  const overlay = document.getElementById("vvpatOverlay");

  // Disable vote buttons
  document.querySelectorAll(".vote-btn").forEach(btn=>{
    btn.disabled = true;
    btn.style.background = "#999";
  });

  // Bulb ON
  const bulb = document.getElementById("bulb"+row);
  if(bulb){
    bulb.style.background = "limegreen";
    bulb.style.boxShadow = "0 0 8px limegreen";
  }

  /* 🔊 STEP 1: PLAY BEEP */
  beep.currentTime = 0;
  beep.play().catch(()=>{});

  /* ⏱️ STEP 2: STOP BEEP AFTER 3 SECONDS */
  setTimeout(() => {
    beep.pause();
    beep.currentTime = 0;

    /* 📟 STEP 3: SHOW VVPAT IMAGE */
    overlay.style.display = "flex";

    /* 🔔 STEP 4: PLAY BACKGROUND SOUND */
    bgSound.currentTime = 0;
    bgSound.play().catch(()=>{});

  }, 3000);

  /* ❌ STEP 5: CLOSE VVPAT + STOP BG SOUND */
  setTimeout(() => {
    overlay.style.display = "none";
    bgSound.pause();
    bgSound.currentTime = 0;
  }, 7000); // 3 sec beep + 4 sec VVPAT
}
