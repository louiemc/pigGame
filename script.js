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

