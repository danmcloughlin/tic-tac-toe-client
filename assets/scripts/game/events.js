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
    .catch(ui.newMoveFailure)
  }
  $(this).off('click')
}

const addHandlers = () => {
  $('#0').on('click', populateSquare)
  $('#1').on('click', populateSquare)
  $('#2').on('click', populateSquare)
  $('#3').on('click', populateSquare)
  $('#4').on('click', populateSquare)
  $('#5').on('click', populateSquare)
  $('#6').on('click', populateSquare)
  $('#7').on('click', populateSquare)
  $('#8').on('click', populateSquare)
  $('#new-game-button').on('click', startNewGame)
}

module.exports = {
  addHandlers
}
