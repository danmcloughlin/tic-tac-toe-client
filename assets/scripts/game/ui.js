'use strict'

const gameStore = require('../game-store.js')

const resetBoard = function () {
  $('#0').empty().css('background-color', 'transparent')
  $('#1').empty().css('background-color', 'transparent')
  $('#2').empty().css('background-color', 'transparent')
  $('#3').empty().css('background-color', 'transparent')
  $('#4').empty().css('background-color', 'transparent')
  $('#5').empty().css('background-color', 'transparent')
  $('#6').empty().css('background-color', 'transparent')
  $('#7').empty().css('background-color', 'transparent')
  $('#8').empty().css('background-color', 'transparent')
}

const newGameSuccess = (data) => {
  console.log(data)
  gameStore.game = data.game
  gameStore.game.clickCount = 1
}

const newGameFailure = (error) => {
  console.error(error)
}

const newMoveSuccess = (data) => {
  gameStore.game.clickCount++
  console.log('gameStore.game ', gameStore.game)
}

const newMoveFailure = (error) => {
  console.error(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  newMoveSuccess,
  newMoveFailure,
  resetBoard
}
