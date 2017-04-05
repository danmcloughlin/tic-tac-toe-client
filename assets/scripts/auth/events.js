'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignUpConfirm = function (event) {
  $('#signUpModal').modal('hide')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  console.log('sign in ran!')
}

const onSignInConfirm = function (event) {
  $('#signInModal').modal('hide')
}

const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#signUpModal').on('submit', onSignUpConfirm)
  $('#signInModal').on('submit', onSignInConfirm)
}

module.exports = {
  addAuthHandlers
}
