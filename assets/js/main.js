

//lancer phaser game canvas et les etats du jeu (menu, jeu, game over)
var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game');

game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('GameOver', GameOver);

game.state.start('Menu');
