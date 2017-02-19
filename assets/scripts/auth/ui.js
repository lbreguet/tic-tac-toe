'use strict';

// const success = (data) => {
//   // handles success
//   if (data) {
//     console.log(data);
//   }
// };

const signUpSuccess = () => {
  $('#sign-up').hide();
  $('.email-input').val('');
  $('.password-input').val('');
  // if (data) {
  //   console.log(data);
  // }
};

const signInSuccess = () => {
  $('.email-input').val('');
  $('.password-input').val('');
  $('.win').show();
  $('#sign-up').show().hide();
  $('#sign-in').hide();
  $('#new-game').show();
  $('#game-log').show();
  $('#change-password').show();
  $('#sign-out').show();
  // $('#board').show();
  // if (data) {
  //   console.log(data);
  // }
};

const changePasswordSuccess = () => {
  $('.old-password').val('');
  $('.new-password').val('');
};

const signOutSuccess = () => {
  $('#sign-out').hide();
  $('#change-password').hide();
  $('#new-game').hide();
  $('#game-log').hide();
  $('.win').hide().val('');
  $('#board').hide();
  $('.games-played').hide().val('');
  $('#sign-in').show();
  $('#sign-up').show();
  // if (data) {
  //   console.log(data);
  // }
};

const createGameSuccess = () => {
  $('#board').show();
  $('.games-played').hide();
  // if (data) {
  //   console.log(data);
  // }
};

const showGameSuccess = (data) => {
  $('.games-played').show();
  $('.games-played').text('You\'ve played ' + data.games.length + ' times!');
  // if (data) {
  //   console.log(data);
  // }
};

// const failure = (error) => {
//   // handles error
//   console.error(error);
// };

// const

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  // success,
  changePasswordSuccess,
  // failure,
  createGameSuccess,
  showGameSuccess
};
