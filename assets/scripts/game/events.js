'use strict'

const ui = require('./ui')
const api = require('./api')
const gameStore = require('../game-store.js')

const startNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  ui.resetBoard()
  addHandlers()
}

const populateSquare = function () {
  console.log('what is click count', gameStore.game.clickCount)
  $(this).css('background-color', 'pink')
  const index = parseInt($(this).attr('id'))
  if (gameStore.game.clickCount % 2 === 1) {
    this.innerHTML = 'x'
    const value = 'x'
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': false
      }
    }
    api.updateBoard(data)
      .then(ui.newMoveSuccess)
      .catch(ui.newMoveFailure)
  } else {
    this.innerHTML = 'o'
    const value = 'o'
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': false
      }
    }
    api.updateBoard(data)
    .then(ui.newMoveSuccess)
    .catch(gameStore.game.cells)
  }
}

const addHandlers = () => {
  $('#0').one('click', populateSquare)
  $('#1').one('click', populateSquare)
  $('#2').one('click', populateSquare)
  $('#3').one('click', populateSquare)
  $('#4').one('click', populateSquare)
  $('#5').one('click', populateSquare)
  $('#6').one('click', populateSquare)
  $('#7').one('click', populateSquare)
  $('#8').one('click', populateSquare)
}

const addNewGameHandler = () => {
  $('#new-game-button').on('click', startNewGame)
}

module.exports = {
  addHandlers,
  addNewGameHandler
}
