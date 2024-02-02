// seleccionar elementos del DOM

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')

// const btnHold = document.getElementsByClassName('btn--hold')[0]

let currentScore, scores, activePlayer

const init = function () {
  currentScore = 0
  activePlayer = 0
  scores = [0, 0]
  diceEl.style.display = 'none'
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')
}

init()

console.log(btnNew, btnRoll, btnHold)

btnRoll.addEventListener('click', () => {
  // sacas un número del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  // mostrar el dado
  diceEl.style.display = 'block'
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    switchtPlayer()
  } else {
    // sumar el dado al current score
    currentScore += dice
    // TODO: seleccionar de forma dinámica el textContent
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore
    // current0El.textContent = currentScore
  }
})

// Asociamos la funcion INIT al botón nueva partida
btnNew.addEventListener('click', init)

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer]
  // Finaliza la partida?
  if (scores[activePlayer] >= 10) {
    // Acaba el juego y le añadimos al jugador activo la clase winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner')
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active')
    // Esconde el dado
    diceEl.style.display = 'none'
  } else {
    // Cambio de jugador
    switchtPlayer()
  }
})

function switchtPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  // más sencillo que con if-else
  player0El.classList.toggle('player--active')
  player1El.classList.toggle('player--active')

  // if (activePlayer === 0) {
  //   player0El.classList.add('player--active')
  //   player1El.classList.remove('player--active')
  // } else {
  //   player1El.classList.add('player--active')
  //   player0El.classList.remove('player--active')
  // }
}
