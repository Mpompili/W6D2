const View = require('./ttt-view');// require appropriate file
const Game = require('./game.js');

$( () => {
  const game = new Game();
  const view = new View(game, $('.ttt'));

});
