'use strict'

const ui = require('./ui')
const api = require('./api')

const startNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

let clickCount = 1

const populateSquare = function () {
  $(this).css('background-color', 'pink')
  const index = parseInt($(this).attr('id'))
  if (clickCount % 2 === 1) {
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
    console.log(data)
  } else if (clickCount % 2 === 0) {
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
    console.log(data)
  }
  clickCount++
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
  clickCount,
  addHandlers
}
