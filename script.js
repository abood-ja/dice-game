'use strict';

let player = 0;
let score = 0;
let score1 = 0;
let score2 = 0;
// selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function disPic(number) {
  diceEl.src = `images/dice-${number}.png`;
  diceEl.classList.remove('hidden');
}

function addScore(diceNum) {
  score += diceNum;
  document.getElementById(`current--${player}`).textContent = score;
}
function changePlayer() {
  score = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  if (player === 0) player = 1;
  else player = 0;
}

btnRollEl.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  disPic(dice);
  console.log(dice);

  if (dice != 1) addScore(dice);
  else changePlayer();
});
