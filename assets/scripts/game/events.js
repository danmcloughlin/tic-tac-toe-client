'use strict'

let clickCount = 1

const populateSquare = function () {
  $(this).css('background-color', 'pink')
  if (clickCount % 2 === 1) {
    this.innerHTML = 'x'
  } else if (clickCount % 2 === 0) {
    this.innerHTML = 'o'
  }
  clickCount++
  $(this).off('click')
}

const addHandlers = () => {
  $('#index-0').on('click', populateSquare)
  $('#index-1').on('click', populateSquare)
  $('#index-2').on('click', populateSquare)
  $('#index-3').on('click', populateSquare)
  $('#index-4').on('click', populateSquare)
  $('#index-5').on('click', populateSquare)
  $('#index-6').on('click', populateSquare)
  $('#index-7').on('click', populateSquare)
  $('#index-8').on('click', populateSquare)
}

module.exports = {
  clickCount,
  addHandlers
}
