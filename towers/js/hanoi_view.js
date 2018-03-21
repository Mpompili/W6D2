const HanoiGame = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    console.log("in setup");
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul>');
      for (let j = 0; j<3; j++){

        let $li = $('<li>');
        if (i === 0){
          $li.addClass('tower-' + (j + 1));
        }
        $ul.append($li);
      }
      this.$el.append($ul);
    }
  }

  render(){

  }

}



module.exports = View;
