"use stric";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

// Set the initial conditions of score0El and score1El
score0El.textContent = 0;
score1El.textContent = 0;
// Add the hidden class to the dice
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  // this variable here will not be a global variable because each time we roll the dice we want to generate a new number
  // 2. Display the dice
  // remember the starting condition - we hid the dice by adding the hidden class, so we need to remove that
  diceEl.classList.remove("hidden");
  diceEl.src = `./images/dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    // Display the score
    // current0El.textContent = currentScore; // CHANGE LATER
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  // switch to next player
  // set previous player's current score to 0 first
  else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // change the active player status
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    // use the active class for the current player
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});

// holding score functionality
btnHold.addEventListener("click", function () {
  // add current score to acitve player's score
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);

  // display the score
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
});
