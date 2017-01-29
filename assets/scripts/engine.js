'use strict';

const api = require('./auth/api');

const board = ['', '', '', '', '', '', '', '', ''];

// const player1 = 'X';
// const player2 = 'O';

let currentPlayer = "X";



const resetGameBoard = function() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.box').text('');
    $('.win').text('');
    currentPlayer = "X";
  } game();
};


$('#new-game').on('click', function() {
  resetGameBoard();
});

const checkWins = function() {
  if (
    board[0] === "X" && board[1] === "X" && board[2] === "X" ||
    board[3] === "X" && board[4] === "X" && board[5] === "X" ||
    board[6] === "X" && board[7] === "X" && board[8] === "X" ||
    board[0] === "X" && board[4] === "X" && board[8] === "X" ||
    board[2] === "X" && board[4] === "X" && board[6] === "X" ||
    board[0] === "X" && board[3] === "X" && board[6] === "X" ||
    board[1] === "X" && board[4] === "X" && board[7] === "X" ||
    board[2] === "X" && board[5] === "X" && board[8] === "X"
  ) {
    $('.win').text("Player 1 Won!");
    console.log('Player 1 Won!');
    endGame();
    return true;
  } else if (
    board[0] === 'O' && board[1] === 'O' && board[2] === 'O' ||
    board[3] === 'O' && board[4] === 'O' && board[5] === 'O' ||
    board[6] === 'O' && board[7] === 'O' && board[8] === 'O' ||
    board[0] === 'O' && board[4] === 'O' && board[8] === 'O' ||
    board[2] === 'O' && board[4] === 'O' && board[6] === 'O' ||
    board[0] === 'O' && board[3] === 'O' && board[6] === 'O' ||
    board[1] === 'O' && board[4] === 'O' && board[7] === 'O' ||
    board[2] === 'O' && board[5] === 'O' && board[8] === 'O'
  ) {
    $('.win').text("Player 2 Won!");
    console.log('Player 2 Won!');
    endGame();
    return true;
  } else if (board.includes('') === false) {
    $('.win').text("Cats Game!");
    console.log('Cats Game!');
    endGame();
    return true;
  }
};

let message = "Cell is already taken! Pick another one!";
let over = false;
// let count = 0;
let turns = function(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    over = checkWins();
    api.updateGame(index, currentPlayer, over);

    if (currentPlayer === "X") {
      currentPlayer = 'O';
      // checkWins();
    } else if (currentPlayer === 'O'){
      currentPlayer = "X";
      // checkWins();
    } else {
      $('.win').text(message);
    }
  }
};

let endGame = function() {
  $('.box').off('click');
};


let game = function(){
  $('.box').on('click', function(event) {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer);
    }
    turns(parseInt(event.target.id));
    console.log(board);

  });
};



module.exports = {
  checkWins,
  board,
  resetGameBoard,
  turns,
  endGame,
  game,
  currentPlayer
};
