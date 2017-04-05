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

module.exports = {
  populateSquare,
  clickCount
}
