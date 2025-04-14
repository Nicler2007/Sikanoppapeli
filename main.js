

let gameMode = 1; // 1 = yksi noppa, 2 = kaksi noppaa

    function startGame(mode) {
      gameMode = mode;
      document.getElementById("modeSelect").classList.add("hidden");
      if (mode === 1) initGameOneDie();
      else initGameTwoDice();
    }

    // ==================== YKSI NOPPA ====================
    let scores1, round1, active1;

    function initGameOneDie() {
      document.getElementById("game1").classList.remove("hidden");
      scores1 = [0, 0]; round1 = 0; active1 = 0;
      updateUI1();
    }

    function rollOneDie() {
      const roll = Math.floor(Math.random() * 6) + 1;
      document.getElementById("die1").textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][roll-1];
      if (roll === 1) {
        round1 = 0;
        nextPlayer1();
      } else {
        round1 += roll;
        document.getElementById("round1").textContent = round1;
      }
    }

    function holdOneDie() {
      scores1[active1] += round1;
      if (scores1[active1] >= 100) {
        alert(`Pelaaja ${active1 + 1} voitti!`);
        location.reload();
      } else {
        round1 = 0;
        nextPlayer1();
      }
    }

    function nextPlayer1() {
      round1 = 0;
      active1 = active1 === 0 ? 1 : 0;
      updateUI1();
    }

    function updateUI1() {
      document.getElementById("p1Score1").textContent = scores1[0];
      document.getElementById("p2Score1").textContent = scores1[1];
      document.getElementById("round1").textContent = round1;
      document.getElementById("p1Name1").classList.toggle("active-player", active1 === 0);
      document.getElementById("p2Name1").classList.toggle("active-player", active1 === 1);
    }

    // ==================== KAKSI NOPPAA ====================
    let scores2, round2, active2, doublesCount;

    function initGameTwoDice() {
      document.getElementById("game2").classList.remove("hidden");
      scores2 = [0, 0]; round2 = 0; active2 = 0; doublesCount = 0;
      updateUI2();
    }

    function rollTwoDice() {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;

      document.getElementById("die2a").textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][d1-1];
      document.getElementById("die2b").textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][d2-1];

      if (d1 === 1 && d2 === 1) {
        round2 += 25;
        doublesCount++;
      } else if (d1 === 1 || d2 === 1) {
        alert("Yksi noppa näytti ykköstä – vuoro loppui!");
        nextPlayer2();
        return;
      } else if (d1 === d2) {
        round2 += (d1 + d2) * 2;
        doublesCount++;
        if (doublesCount >= 3) {
          alert("3 tuplaa peräkkäin – vuoro loppui!");
          nextPlayer2();
          return;
        }
      } else {
        round2 += d1 + d2;
        doublesCount = 0;
      }

      updateUI2();
    }

    function holdTwoDice() {
      scores2[active2] += round2;
      if (scores2[active2] >= 100) {
        alert(`Pelaaja ${active2 + 1} voitti!`);
        location.reload();
      } else {
        round2 = 0;
        doublesCount = 0;
        nextPlayer2();
      }
    }

    function nextPlayer2() {
      round2 = 0;
      doublesCount = 0;
      active2 = active2 === 0 ? 1 : 0;
      updateUI2();
    }

    function updateUI2() {
      document.getElementById("p1Score2").textContent = scores2[0];
      document.getElementById("p2Score2").textContent = scores2[1];
      document.getElementById("round2").textContent = round2;
      document.getElementById("doubles").textContent = doublesCount;
      document.getElementById("p1Name2").classList.toggle("active-player", active2 === 0);
      document.getElementById("p2Name2").classList.toggle("active-player", active2 === 1);
    }