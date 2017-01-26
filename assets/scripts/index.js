'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const game = require('./engine');

$(() => {
  setAPIOrigin(location, config);
  $('#board').prepend(game.board);
  game.turns();
  $('#1').on('click', function() {
    if ($('#1').html() === '') {
      $('#1').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#2').on('click', function() {
    if ($('#2').html() === '') {
      $('#2').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#3').on('click', function() {
    if ($('#3').html() === '') {
      $('#3').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#4').on('click', function() {
    if ($('#4').html() === '') {
      $('#4').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#5').on('click', function() {
    if ($('#5').html() === '') {
      $('#5').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#6').on('click', function() {
    if ($('#6').html() === '') {
      $('#6').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#7').on('click', function() {
    if ($('#7').html() === '') {
      $('#7').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#8').on('click', function() {
    if ($('#8').html() === '') {
      $('#8').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#9').on('click', function() {
    if ($('#9').html() === '') {
      $('#9').text(game.turns);
    } else {
      console.log('Error');
    }
  });
  $('#new-game').on('click', function() {
    $('#board').append(game.resetGame());
  });
  game.checkWins();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});
