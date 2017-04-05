'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')

// On document ready
$(() => {
  setAPIOrigin(location, config)
  $('#index-0').on('click', gameEvents.populateSquare)
  $('#index-1').on('click', gameEvents.populateSquare)
  $('#index-2').on('click', gameEvents.populateSquare)
  $('#index-3').on('click', gameEvents.populateSquare)
  $('#index-4').on('click', gameEvents.populateSquare)
  $('#index-5').on('click', gameEvents.populateSquare)
  $('#index-6').on('click', gameEvents.populateSquare)
  $('#index-7').on('click', gameEvents.populateSquare)
  $('#index-8').on('click', gameEvents.populateSquare)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
