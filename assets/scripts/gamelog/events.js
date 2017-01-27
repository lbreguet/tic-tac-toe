'use strict';

const api = require('./api');
const ui = require('./ui');

const getFormFields = require('../../../lib/get-form-fields');

const onGetGames = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  if (data.games.id.length === 0) {
    api.getGames()
    .then(ui.onGetGameSuccess)
    .catch(ui.onError);
  } else {
    api.getGame(data.games.id)
    .then(ui.onGetGameSuccess)
    .catch(ui.onError);
  }
};

const onCreateGame = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createGame(data)
  .then(ui.onCreateGameSuccess)
  .catch(ui.onError);
};

const onUpdateGame = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateGame(data.game.id, data)
  .then(ui.onUpdateGameSuccess)
  .catch(ui.onError);
};

const gameLogApi = {

};
