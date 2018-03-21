/* eslint-disable no-debugger */

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();


    // this.makeMove = this.makeMove.bind(this);
  }

  bindEvents() {
    const $square = $('li');
    $square.on("click", event => {
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget);
    });
  }

  makeMove($square) {

    const pos = $square.data('pos');
    console.log(pos);

    try {
      this.game.playMove(pos);
      // alert('move');
      $square.addClass('white');
      console.log("passed add Class");
      this.game.swapTurn();
      $square.text(`${this.game.currentPlayer}`);
      this.game.swapTurn();
      if (this.game.isOver()){
        // debugger;
        // this.game.swapTurn();
        setTimeout(() => { alert(this.game.winner());}, 100);
      }
    } catch (e) {
      alert('invalid move sucka');
    }

    // console.log($square.data('pos'));
  }

  setupBoard() {
    const $ul = $('<ul>');
    for (let i = 0; i < 9; i++) {
      let $li = $('<li>').data('pos',
      [Math.floor(i/3), i%3]
    );
      $ul.append($li);
    }
  this.$el.append($ul);
  }
}

module.exports = View;




// View.prototype.setupEasel = function() {
//   const $addRowButton = $('<button>').html('Add a row');
//   this.$el.append($addRowButton);
//   $addRowButton.on("click", this.addRow.bind(this));
//
//   for(let j = 0; j <= 7; j++){
//     const $button = $("<button>").html("Exercise " + j);
//     $button.on("click", this["exercise" + j]);
//     this.$el.append($button);
//   }
//
//   for(let i = 0; i < 20; i ++) {
//     this.addRow();
//   }
// };
