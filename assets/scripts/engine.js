'use strict';

let board = [
  '','','',
  '','','',
  '','',''
];

// let player1 = 'X';
// let player2 = 'O';

let currentPlayer = 'X';

const checkWins = function () {
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X' ||
  board[3] === 'X' && board[4] === 'X' && board[5] === 'X' ||
  board[6] === 'X' && board[7] === 'X' && board[8] === 'X' ||
  board[0] === 'X' && board[4] === 'X' && board[8] === 'X' ||
  board[2] === 'X' && board[4] === 'X' && board[6] === 'X' ||
  board[0] === 'X' && board[3] === 'X' && board[6] === 'X' ||
  board[1] === 'X' && board[4] === 'X' && board[7] === 'X' ||
  board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    $('.win').text('Player 1 is the Winner!');
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
  board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
  board[6] === 'O' && board[7] === 'O' && board[8] === 'O' ||
  board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
  board[2] === 'O' && board[4] === 'O' && board[6] === 'O' ||
  board[0] === 'O' && board[3] === 'O' && board[6] === 'O' ||
  board[1] === 'O' && board[4] === 'O' && board[7] === 'O' ||
  board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    $('.win').text('Player 2 is the Winner!');
  } else if (board.include('') === false){
    $('.win').text('Cats Game!');
    console.log('Cats Game!');
  }
};

const turns = function(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    checkWins();
    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else if (currentPlayer === 'O'){
      currentPlayer = 'X';
    }
  } else {
    console.log('Error');
  }
};

$('.box').on('click', function(event) {
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer);
  } turns(event.target.id);
  console.log(board);
});

const resetGame = function () {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.box').text('');
    $('.win').text('');
    currentPlayer = 'X';
  } $('.box').on('click', function(event) {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer);
    } turns(event.target.id);
    console.log(board);
  });
};

module.exports = {
  checkWins,
  board,
  currentPlayer,
  turns,
  resetGame
};
