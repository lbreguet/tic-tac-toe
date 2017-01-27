'use strict';

const onGetGameSuccess = function(data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }
};

const onError = function(response) {
  console.error(response);
};

const onCreateGameSuccess = function() {
  console.log('Game Created');
};

const onUpdateGameSuccess = function() {
  console.log('Game Updated');
};

module.exports= {
  onGetGameSuccess,
  onError,
  onCreateGameSuccess,
  onUpdateGameSuccess,
};
