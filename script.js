'use strict';

let activePlayer = 0;
let curScore = 0;
let scores = [0, 0];
let isPlaying = true;
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function disPic(number) {
  diceEl.src = `images/dice-${number}.png`;
  diceEl.classList.remove('hidden');
}

function addScore(diceNum) {
  curScore += diceNum;
  document.getElementById(`current--${activePlayer}`).textContent = curScore;
}
function changePlayer() {
  curScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
}

btnRollEl.addEventListener('click', function () {
  if (isPlaying) {
    const dice = Math.floor(Math.random() * 6) + 1;
    disPic(dice);
    dice !== 1 ? addScore(dice) : changePlayer();
  }
});
btnHoldEl.addEventListener('click', function () {
  if (isPlaying) {
    scores[activePlayer] += curScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      isPlaying = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else changePlayer();
  }
});
