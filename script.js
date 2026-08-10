'use strict';



//Selecting Elements

const score0El = document.querySelector('#score--0');
//another method to get element by id

const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('btn--hold');

const btnNew = document.querySelector("btn--new");

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');

score0El.textContent = 0;

score1El.textContent = 0;

diceEl.classList.add('hidden');

let currentScore = 0;


//Generate Random Dice Roll






btnRoll.addEventListener('click',function () {
//1.Generating a radom dice roll

const dice = Math.trunc(Math.random() * 6) + 1;


//2.Display the dice

diceEl.classList.remove('hidden');

// dice.src = `dice-${dice}.png`;

diceEl.src = `./images/dice-${dice}.png`




//3.Check for rolled 1: if true , switch to next player

if (dice !== 1) {
//add dice to current score

    currentScore +=  dice;
    current0El.textContent = currentScore; //Change later
    //switch to next player
}


});





