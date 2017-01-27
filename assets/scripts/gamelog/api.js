'use strict';

const config = require('../config');

const getGames = function() {
  return $.ajax({
    url: config.apiOrigin +'/games',
    method: 'GET',
  });
};

const getGame = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET',
  });
};

const createGame = function() {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
  });
};

const updateGame = function(id, data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'PATCH',
    data,
  });
};

module.exports = {
  getGames,
  getGame,
  createGame,
  updateGame,
};
