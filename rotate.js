var controller;

function restart() {
	controller.restart();
}

window.onload = function() {
		var game = new Phaser.Game("100", "100", Phaser.AUTO, "canvasDiv", { preload: preload, create: create, update: update });		
		
		function preload () {
			game.load.image('color1', 'assets/bubblegum1.png');
			game.load.image('color2', 'assets/bubblegum2.png');
			game.load.image('color3', 'assets/bubblegum3.png');
			game.load.image('colort', 'assets/t.png');
			game.load.audio('lastseconds', 'assets/lastseconds1.wav', true);
			game.load.audio('lost', 'assets/lost1.wav', true);
			game.load.audio('new', 'assets/new1.wav', true);
			game.load.audio('size', 'assets/size1.wav', true);
			game.load.audio('turn', 'assets/turn1.wav', true);
			game.load.audio('win', 'assets/win1.wav', true);
		}
		
		function create () {
			game.stage.backgroundColor = '#2E2633';
			game.input.maxPointers = 1;
			R(game);
			controller = new Controller(game);
			// var y = 0;
			// var block = new Block(game, level, 0, y, 0, 0, Block.CONN1, Direction.EAST);
			// block = new Block(game, level, Controller.getBlockSize(), y, 0, 0, Block.CONN1, Direction.NORTH);
			// block = new Block(game, level, Controller.getBlockSize() * 2, y, 0, 0, Block.CONN1, Direction.WEST);
			// block = new Block(game, level, Controller.getBlockSize() * 3, y, 0, 0, Block.CONN1, Direction.SOUTH);
			
			// y += Controller.getBlockSize();
			// block = new Block(game, level, 0, y, 0, 0, Block.CONN2CRV, Direction.EAST);
			// block = new Block(game, level, Controller.getBlockSize(), y, 0, 0, Block.CONN2CRV, Direction.NORTH);
			// block = new Block(game, level, Controller.getBlockSize() * 2, y, 0, 0, Block.CONN2CRV, Direction.WEST);
			// block = new Block(game, level, Controller.getBlockSize() * 3, y, 0, 0, Block.CONN2CRV, Direction.SOUTH);
			
			// y += Controller.getBlockSize();
			// block = new Block(game, level, 0, y, 0, 0, Block.CONN2STR, Direction.EAST);
			// block = new Block(game, level, Controller.getBlockSize(), y, 0, 0, Block.CONN2STR, Direction.NORTH);
			// block = new Block(game, level, Controller.getBlockSize() * 2, y, 0, 0, Block.CONN2STR, Direction.WEST);
			// block = new Block(game, level, Controller.getBlockSize() * 3, y, 0, 0, Block.CONN2STR, Direction.SOUTH);
			
			// y += Controller.getBlockSize();
			// block = new Block(game, level, 0, y, 0, 0, Block.CONN3, Direction.EAST);
			// block = new Block(game, level, Controller.getBlockSize(), y, 0, 0, Block.CONN3, Direction.NORTH);
			// block = new Block(game, level, Controller.getBlockSize() * 2, y, 0, 0, Block.CONN3, Direction.WEST);
			// block = new Block(game, level, Controller.getBlockSize() * 3, y, 0, 0, Block.CONN3, Direction.SOUTH);
			
			// y += Controller.getBlockSize();
			// block = new Block(game, level, 0, y, 0, 0, Block.CONN4, Direction.EAST);
			// block = new Block(game, level, Controller.getBlockSize(), y, 0, 0, Block.CONN4, Direction.NORTH);
			// block = new Block(game, level, Controller.getBlockSize() * 2, y, 0, 0, Block.CONN4, Direction.WEST);
			// block = new Block(game, level, Controller.getBlockSize() * 3, y, 0, 0, Block.CONN4, Direction.SOUTH);
		}
		
		function update() {
			controller.update(game.time.elapsed);
		}
	};