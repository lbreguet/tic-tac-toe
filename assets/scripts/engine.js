'use strict';

  const gameBoard = [
    '','','',
    '','','',
    '','',''
  ];

  const x = 'X';
  const o = 'O';


  const turn = function () {
    let currentPlayer = x;
    if (currentPlayer === x) {
      currentPlayer = o;
    } else {
      currentPlayer = x;
    } return currentPlayer;
  };

  const play = function () {
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[0] === x && gameBoard[1] === x && gameBoard[2] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[0] === x && gameBoard[4] === x && gameBoard[8] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[3] === x && gameBoard[4] === x && gameBoard[5] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[1] === x && gameBoard[4] === x && gameBoard[7] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[2] === x && gameBoard[4] === x && gameBoard[6] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[0] === x && gameBoard[3] === x && gameBoard[6] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[6] === x && gameBoard[7] === x && gameBoard[8] === x) {
        console.log('X wins, O loses!');
      } else if (gameBoard[2] === o && gameBoard[5] === o && gameBoard[8] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[0] === o && gameBoard[1] === o && gameBoard[2] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[0] === o && gameBoard[4] === o && gameBoard[8] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[3] === o && gameBoard[4] === o && gameBoard[5] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[1] === o && gameBoard[4] === o && gameBoard[7] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[2] === o && gameBoard[4] === o && gameBoard[6] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[0] === o && gameBoard[3] === o && gameBoard[6] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[6] === o && gameBoard[7] === o && gameBoard[8] === o) {
        console.log('O wins, X loses!');
      } else if (gameBoard[2] === o && gameBoard[5] === o && gameBoard[8] === o) {
        console.log('O wins, X loses!');
      } else {
        console.log('Tie Game!');
      }
    } return play;
  };

  const newGame = function () {
    if (play === 'O wins, X loses!' || 'X wins, O loses!' || 'Tie Game!') {
      return gameBoard;
    } else {
      return turn;
    }
  };

  const documentReady = $(document).ready(function() {
    $('#board .col-xs-4').append(gameBoard);
    $('.col-xs-4').click(function() {

    })
  });

module.exports = {
  documentReady,
  gameBoard,
  turn,
};
