'use strict';

const board = [
  '','','',
  '','','',
  '','',''
];

const player1 = 'x';
const player2 = 'o';

let currentPlayer = player1;

const turns = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  } else {
    return currentPlayer;
  }
};

const checkWins = function () {
  if (board[0] === player1 && board[1] === player1 && board[2] === player1 ||
  board[3] === player1 && board[4] === player1 && board[5] === player1 ||
  board[6] === player1 && board[7] === player1 && board[8] === player1 ||
  board[0] === player1 && board[4] === player1 && board[8] === player1 ||
  board[2] === player1 && board[4] === player1 && board[6] === player1 ||
  board[0] === player1 && board[3] === player1 && board[6] === player1 ||
  board[1] === player1 && board[4] === player1 && board[7] === player1 ||
  board[2] === player1 && board[5] === player1 && board[8] === player1) {
    $('.win').text('Player 1 is the Winner!');
  } else if (board[0] === player1 && board[1] === player1 && board[2] === player2 ||
  board[3] === player2 && board[4] === player2 && board[5] === player2 ||
  board[6] === player2 && board[7] === player2 && board[8] === player2 ||
  board[0] === player2 && board[4] === player2 && board[8] === player2 ||
  board[2] === player2 && board[4] === player2 && board[6] === player2 ||
  board[0] === player2 && board[3] === player2 && board[6] === player2 ||
  board[1] === player2 && board[4] === player2 && board[7] === player2 ||
  board[2] === player2 && board[5] === player2 && board[8] === player2) {
    $('.win').text('Player 2 is the Winner!');
  } else {
    $('.win').text('Cats Game!');
  }
};

const gameBoard = $('#board').append(board);





module.exports = {
  checkWins,
  board,
  gameBoard,
  currentPlayer,
  turns,
};
