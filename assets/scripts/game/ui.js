'use strict'

const newGameSuccess = (data) => {
  console.log(data)
}

const newGameFailure = (error) => {
  console.error(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
