// Seleccionar elementos del DOM

// Botones
const newGameButton = document.querySelector('.btn--new')
const rollDiceButton = document.querySelector('.btn--roll')
const holdButton = document.querySelector('.btn--hold')
// Campos
let p0ScoreField = document.getElementById('score--0')
let p1ScoreField = document.getElementById('score--1')
let p0CurrentScoreField = document.getElementById('current--0')
let p1CurrentScoreField = document.getElementById('current--1')
// Imagen Dado
let dice = document.querySelector('.dice')
let diceNumber = 0

// Iniciar marcadores

const p0InitScore = 0
const p1InitScore = 0

const p0InitCurrentScore = 0
const p1InitCurrentScore = 0

// Llamar a la funcion INIT que haga:
// Dado invisible
// Score1 y 2 a 0
// Y current Scores a 0

newGameButton.addEventListener('click', () => {
  dice.style.opacity = 0

  p0ScoreField.textContent = p0InitScore
  p1ScoreField.textContent = p1InitScore

  p0CurrentScoreField.textContent = p0InitCurrentScore
  p1CurrentScoreField.textContent = p1InitCurrentScore
})

// Boton Roll Dice

// Función Roll Dice

TODO: rollDiceButton.addEventListener('click', () => {
  // Muestra dado
  dice.style.opacity = 100

  // Sacar numero
  diceNumber = Math.trunc(Math.random() * 6) + 1

  // Mostrar datos
  dice.src = `dice-${diceNumber}.png`

  //Si dado es 1
  if (diceNumber === 1) {
  } else {
    p0CurrentScoreField.textContent = diceNumber
  }
})

// Boton Hold
