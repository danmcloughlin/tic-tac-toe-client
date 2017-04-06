'use strict'

const gameStore = require('../game-store.js')

const newGameSuccess = (data) => {
  console.log(data)
  gameStore.game = data.game
}

const newGameFailure = (error) => {
  console.error(error)
}

const newMoveSuccess = (data) => {
  console.log(data)
}

const newMoveFailure = (error) => {
  console.error(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  newMoveSuccess,
  newMoveFailure
}
