'use strict';

const success = (data) => {
  // handles success
  if (data) {
    console.log(data);
  }
};

const signUpSuccess = (data) => {

  if (data) {
    console.log(data);
  }
};

const signInSuccess = (data) => {
  $('#sign-up').val('');
  $('#sign-in').val('');
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#new-game').show();
  $('#game-log').show();
  $('#change-password').show();
  $('#sign-out').show();
  $('#board').show();
  if (data) {
    console.log(data);
  }
};

const signOutSuccess = (data) => {
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#new-game').hide();
  $('#game-log').hide();
  $('#board').hide();
  $('#sign-in').show();
  $('#sign-up').show();
  if (data) {
    console.log(data);
  }
};

const failure = (error) => {
  // handles error
  console.error(error);
};

// const

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  success,
  failure,
};
