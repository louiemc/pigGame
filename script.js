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

// // Set the initial conditions of score0El and score1El
// score0El.textContent = 0;
// score1El.textContent = 0;
// // Add the hidden class to the dice
// diceEl.classList.add("hidden");

// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;
// const scores = [0, 0];

// Declaring variables outside the function
let scores, currentScore, activePlayer, playing;
// New Game Function
function newGame() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // set all scores back to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  // sett all current scores back to 0
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Add the hidden class to the dice
  diceEl.classList.add("hidden");

  // remove the winner class
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  // remove the active class from both players (bc don't know who is the active player)
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  // now, set internal state variables back to initial state
  // scores back to 0
  // current score back to 0
  // active player set back to first player
  // setting playing back to true
}
newGame();

// Switch Player Function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // change the active player status
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // use the active class for the current player
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // all logic will be excuted if we are playing
  if (playing) {
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
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // // change the active player status
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // // use the active class for the current player
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

// holding score functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // add current score to acitve player's score
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);

    // display the score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if the player's score is  >= 100, if so finish the game
    if (scores[activePlayer] >= 100) {
      // finish game
      playing = false;
      // remove the dice image after the player wins
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // // switch players - copied from the code above
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // // change the active player status
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // // use the active class for the current player
      // player0El.classList.toggle("player--active");
      // player1El.classList.toggle("player--active");
      switchPlayer();
    }
  }
});

// Reset game functionality
btnNew.addEventListener("click", function () {
  // // remove the winner class
  // player0El.classList.remove("player--winner");
  // player1El.classList.remove("player--winner");
  // // set all scores back to 0
  // score0El.textContent = 0;
  // score1El.textContent = 0;
  // // sett all current scores back to 0
  // current0El.textContent = 0;
  // current1El.textContent = 0;
  // // remove the active class from both players (bc don't know who is the active player)
  // player0El.classList.add("player--active");
  // player1El.classList.remove("player--active");
  // // now, set internal state variables back to initial state
  // // scores back to 0
  // // current score back to 0
  // // active player set back to first player
  // // setting playing back to true
});
