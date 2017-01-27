'use strict';

const board = ['', '', '', '', '', '', '', '', ''];

let player1 = 'X';
let player2 = 'O';

let currentPlayer = player1;



const resetGameBoard = function() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
    $('.box').text('');
    $('.win').text('');
    currentPlayer = player1;
  } game();
};


$('#new-game').on('click', function() {
  resetGameBoard();
});

const checkWins = function() {
  if (
    board[0] === player1 && board[1] === player1 && board[2] === player1 ||
    board[3] === player1 && board[4] === player1 && board[5] === player1 ||
    board[6] === player1 && board[7] === player1 && board[8] === player1 ||
    board[0] === player1 && board[4] === player1 && board[8] === player1 ||
    board[2] === player1 && board[4] === player1 && board[6] === player1 ||
    board[0] === player1 && board[3] === player1 && board[6] === player1 ||
    board[1] === player1 && board[4] === player1 && board[7] === player1 ||
    board[2] === player1 && board[5] === player1 && board[8] === player1
  ) {
    $('.win').text("Player 1 Won!");
    console.log('Player 1 Won!');
    endGame();
  } else if (
    board[0] === player2 && board[1] === player2 && board[2] === player2 ||
    board[3] === player2 && board[4] === player2 && board[5] === player2 ||
    board[6] === player2 && board[7] === player2 && board[8] === player2 ||
    board[0] === player2 && board[4] === player2 && board[8] === player2 ||
    board[2] === player2 && board[4] === player2 && board[6] === player2 ||
    board[0] === player2 && board[3] === player2 && board[6] === player2 ||
    board[1] === player2 && board[4] === player2 && board[7] === player2 ||
    board[2] === player2 && board[5] === player2 && board[8] === player2
  ) {
    $('.win').text("Player 2 Won!");
    console.log('Player 2 Won!');
    endGame();
  } else if (board.includes('') === false) {
    $('.win').text("Cats Game!");
    console.log('Cats Game!');
    endGame();
  }
};

let message = "Cell is already taken! Pick another one!";

// let count = 0;
let turns = function(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    checkWins();
    if (currentPlayer === player1) {
      currentPlayer = player2;
      // checkWins();
    } else if (currentPlayer === player2){
      currentPlayer = player1;
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
    turns(event.target.id);
    console.log(board);
  });
};



module.exports = {
  checkWins,
  board,
  resetGameBoard,
  turns,
  endGame,
  game
};
