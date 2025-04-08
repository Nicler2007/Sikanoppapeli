
let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
const winningScore = 100;

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").textContent = ["⚀","⚁","⚂","⚃","⚄","⚅"][dice-1];

    if (dice !== 1) {
    roundScore += dice;
    document.getElementById("roundScore").textContent = roundScore;
    } else {
    alert("Hups! Heitit ykkösen 😬");
    nextPlayer();
    }
}

function hold() {
    scores[activePlayer] += roundScore;

    document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
    alert(`Pelaaja ${activePlayer + 1} voittaa pelin! 🎉`);
    resetGame();
    } else {
    nextPlayer();
    }
}

function nextPlayer() {
    roundScore = 0;
    document.getElementById("roundScore").textContent = 0;

    document.getElementById(`player${activePlayer + 1}Name`).classList.remove("active-player");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`player${activePlayer + 1}Name`).classList.add("active-player");
}

function resetGame() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById("score1").textContent = 0;
    document.getElementById("score2").textContent = 0;
    document.getElementById("roundScore").textContent = 0;
    document.getElementById("dice").textContent = "🎲";
    document.getElementById("player1Name").classList.add("active-player");
    document.getElementById("player2Name").classList.remove("active-player");
}