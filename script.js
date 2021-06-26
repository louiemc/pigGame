"use stric";

// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Set the initial conditions of score0El and score1El
score0El.textContent = 0;
score1El.textContent = 0;
// Add the hidden class to the dice
diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // this variable here will not be a global variable because each time we roll the dice we want to generate a new number
  // 2. Display the dice
  // remember the starting condition - we hid the dice by adding the hidden class, so we need to remove that
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
  } else {
    // switch to next player
  }
});
