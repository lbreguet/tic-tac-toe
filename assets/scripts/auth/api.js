'use strict';

const config = require('../config');

const store = require('../store');

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data,
  });
};

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data,
  });
};

const changePassword = function (data) {
  console.log(store);
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data,
  });
};

const signOut = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  });
};

// GETS FULL LIST OF GAMES FOR USER
const getGames = function () {
  return $.ajax({
    url: `${config.apiOrigin}/games`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

// STARTS A NEW GAME FOR USER
const createGames = function () {
  return $.ajax({
    url: `${config.apiOrigin}/games`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

// SAVES GAMES FOR USER
const saveGames = function (data) {
  return $.ajax({
    url: `${config.apiOrigin}/games/21331`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  createGames,
  saveGames
};
