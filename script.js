// Seleccionamos los elementos del DOM a utilizar

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

let currentScore, scores, activePlayer

// Función para inicializar a 0 la partida

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

// Implementamos botón de lanzar dado. Añadido eventlistener.

btnRoll.addEventListener('click', () => {
  // Número aleatorio del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  // Ver dado
  diceEl.style.display = 'block'
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    switchtPlayer()
  } else {
    // Sumar tirada al current score
    currentScore += dice
    // TODO: Seleccionar de forma dinámica el textContent
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore
  }
})

// Asociamos la funcion INIT al botón nueva partida
btnNew.addEventListener('click', init)

btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer]
  // Finalizar la partida
  if (scores[activePlayer] >= 100) {
    // Acabar el juego y añadimos al jugador activo la clase winner
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner')
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active')
    // Escondemos el dado
    diceEl.style.display = 'none'
  } else {
    // Cambio de jugador
    switchtPlayer()
  }
})

// Función cambiar jugador

function switchtPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer === 0 ? 1 : 0

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
