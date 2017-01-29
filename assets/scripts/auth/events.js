'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const engine = require('../engine');
const api = require('./api');
const ui = require('./ui');

const store = require('../store');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.failure)
  ;
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store;
  })
  .then(ui.signInSuccess)
  .catch(ui.failure)
  ;
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.success)  .catch(ui.failure)
  ;
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .then(() => {
    delete store.user;
    return store;
  })
  .then(ui.signOutSuccess)
  .catch(ui.failure)
  ;
};

const onCreateGame = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createGame(data)
  .then((response) => {
    store.game = response.game;
  })
  .then(ui.createGameSuccess)
  .catch(ui.failure);
};

const onShowGame = function(event) {
  event.preventDefault();
  api.showGame()
  .then(ui.showGameSuccess)
  .catch(ui.failure);
};

// const onUpdateGame = function(event) {
//   event.preventDefault();
//   // let data = getFormFields(event.target);
//   api.updateGame(event.target.id, engine.currentPlayer)
//   .then(ui.success)
//   .catch(ui.failure);
// };

const addHandlers = () => {
  $('#sign-up').show();
  $('#sign-in').show();
  $('#board').hide();
  $('#new-game').hide();
  $('#game-log').hide();
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#new-game').on('click', onCreateGame);
  $('.cbtn').on('click', onShowGame);
  // $('.box').on('click', onUpdateGame);
};

module.exports = {
  addHandlers,
};
