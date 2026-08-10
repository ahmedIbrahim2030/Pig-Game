'use strict';

//Selecting Elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
//another method to get element by id

const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const btnNew = document.querySelector('.btn--new');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

//Starting Condition

score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add('hidden');

// const scores = [0, 0];

// let currentScore = 0;

// let activePlayer = 0;

// let playing = true;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Generate Random Dice Roll

btnRoll.addEventListener('click', function () {
  //1.Generating a radom dice roll

  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display the dice

    diceEl.classList.remove('hidden');

    diceEl.src = `./images/dice-${dice}.png`;

    //3.Check for rolled 1: if true , switch to next player

    if (dice !== 1) {
      //add dice to current score

      scores[activePlayer] += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        scores[activePlayer];
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //1. Add current score to active player's score

  if (playing) {
    scores[activePlayer] += currentScore;
    // score[1] = score[1] += currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      //Finsh the Game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      //Switch to the next player

      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});
