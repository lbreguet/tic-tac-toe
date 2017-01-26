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
    currentPlayer = 'X';


  }
  $('.box').on('click', function(event) {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer);
    } turns(event.target.id);
    console.log(board);

  });
};



 $('#new-game').on('submit', function() {
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



// let count = 0;
let turns = function(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    checkWins();
    if (currentPlayer === "X") {
      currentPlayer = "O";
      // checkWins();
    } else {
      currentPlayer = "X";
      // checkWins();
    }
  } else {
    console.log("Error");
    $('.win').text("Cell is already taken! Pick another one!");
  }
};


// let changeTurn = function() {
//   if(currentPlayer === 'X'){
//     currentPlayer = 'O';
//   }else {
//     currentPlayer = 'X';
//   }
// };


// let $dude =$('#dude');
let endGame = function() {
  $('.box').off('click');
};


$('.box').on('click', function(event) {
  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer);
    // $(this).addClass(player1);

    // changeTurn();
  }
  turns(event.target.id);
  console.log(board);

});


// $('#').on('click', function(){
//   if($('#').text()===''){
//     $('#').text(player1 || player2);
//   }
// });



// $('#side').on('click', function(){
//   const $cell = $('#' + this.id);
//     const indx = parseInt($cell.attr('id').slice(1));
//       $('#${indx}').html('X');
// })

// const gameShow =
//   $('#side1').on('click', function(){
//     alert('1');
//   });



module.exports = {
  checkWins,
  board,
  resetGameBoard,
  turns,
  endGame,

};
