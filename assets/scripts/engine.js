'use strict';

let board = [
  '','','',
  '','','',
  '','',''
];

const player1 = 'X';
const player2 = 'O';

let currentPlayer = player1;
let turn = 0;



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
  } else if (board[0] === player2 && board[1] === player2 && board[2] === player2 ||
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

const turns = function(index) {
  if (board[index] === '') {
    if ( currentPlayer === player1) {
      board[index] = currentPlayer;
      currentPlayer = player2;
    } else {
      board[index] = currentPlayer;
      currentPlayer = player1;
    }
  } else {
    console.log('Has been filled!');
  }
};

const resetGame = function () {
  board = [
    '','','',
    '','','',
    '','',''
  ];
};


module.exports = {
  checkWins,
  board,
  currentPlayer,
  turns,
  resetGame
};
