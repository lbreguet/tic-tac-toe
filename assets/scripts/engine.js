'use strict';

let turn = 0;

let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let currentPlayer = 'X';

let players = {
  'X': [],
  'O': []
};

$('.container').on('click', ".box:not('.box-X, .box-O')", function(event) {
  let $box = $(event.currentTarget);
  $box.addClass('box-' + currentPlayer);
  let indexBox = $('.container .box').index($box);
  let currentBox = players[currentPlayer];
  currentBox.push(indexBox);
  $.each(winCombos, function(index, combination) {
    let allBoxes = true;
    $.each(combination, function(index, box) {
      if($.inArray(box, currentBox) === -1) {
        allBoxes = false;
      }
    });
    if (allBoxes) {
      console.log(currentPlayer + 'wins!');
    }
  });
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
});
