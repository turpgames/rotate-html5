function Level(game, controller, data, size) {
	this.game = game;
	this.parent = controller;
	this.matrixSize = size;
	this.blocks = [];
	
	this.generateLevel = function(game,data) {
		var blockSize = Controller.getBlockSize();
		this.blocks = [];
		var row;
		for (var i = 0; i < this.matrixSize; i++) {
			row = [];
			for (var j = 0; j < this.matrixSize; j++) {
				row.push(new Block(game, this, R.MAPOFFSETX + j * blockSize, 
				R.MAPOFFSETY + i * blockSize, 
				i, j, data[i][j], 2*i + j));
			}
			this.blocks.push(row);
		}
	}
	
	this.initializeUnconnecteds = function() {
		for (var i = 0; i < this.matrixSize; i++) {
			for (var j = 0; j < this.matrixSize; j++) {
				this.blocks[i][j].unconnecteds[0] = false;
				this.blocks[i][j].unconnecteds[1] = false;
				this.blocks[i][j].unconnecteds[2] = false;
				this.blocks[i][j].unconnecteds[3] = false;
			}
		}
		// if there are connections towards NORTH and SOUTH on UPPERMOST and LOWERMOST rows, they are definitely unconnected.
		for (var j = 0; j < this.matrixSize; j++) {
			this.blocks[0][j].unconnecteds[Direction.NORTH] = this.blocks[0][j].connections[Direction.NORTH];
			this.blocks[this.matrixSize-1][j].unconnecteds[Direction.SOUTH] = this.blocks[this.matrixSize-1][j].connections[Direction.SOUTH];
		}
		
		// if there are connections towards WEST and EAST on LEFTMOST and RIGHTMOST cols, they are definitely unconnected.
		for (var i = 0; i < this.matrixSize; i++) {
			this.blocks[i][0].unconnecteds[Direction.WEST] = this.blocks[i][0].connections[Direction.WEST];
			this.blocks[i][this.matrixSize-1].unconnecteds[Direction.EAST] = this.blocks[i][this.matrixSize-1].connections[Direction.EAST];
		}
		
		// in betweens, east & west and south & north. rightmost and lowermost ommitted
		for (var i = 0; i < this.matrixSize - 1; i++) {
			for (var j = 0; j < this.matrixSize - 1; j++) {
				if (this.blocks[i][j].connections[Direction.EAST] != this.blocks[i][j + 1].connections[Direction.WEST]) {
					this.blocks[i][j].unconnecteds[Direction.EAST] = this.blocks[i][j].connections[Direction.EAST];
					this.blocks[i][j + 1].unconnecteds[Direction.WEST] = this.blocks[i][j + 1].connections[Direction.WEST];
				}
				if (this.blocks[i][j].connections[Direction.SOUTH] != this.blocks[i + 1][j].connections[Direction.NORTH]) {
					this.blocks[i][j].unconnecteds[Direction.SOUTH] = this.blocks[i][j].connections[Direction.SOUTH];
					this.blocks[i + 1][j].unconnecteds[Direction.NORTH] = this.blocks[i + 1][j].connections[Direction.NORTH];
				}
			}
		}

		// SOUTH of rightmost column of this.blocks
		for (var i = 0; i < this.matrixSize - 1; i++) {
			if (this.blocks[i][this.matrixSize - 1].connections[Direction.SOUTH] != this.blocks[i + 1][this.matrixSize - 1].connections[Direction.NORTH]) {
				this.blocks[i][this.matrixSize - 1].unconnecteds[Direction.SOUTH] = this.blocks[i][this.matrixSize - 1].connections[Direction.SOUTH];
				this.blocks[i + 1][this.matrixSize - 1].unconnecteds[Direction.NORTH] = this.blocks[i + 1][this.matrixSize - 1].connections[Direction.NORTH];
			}
		}
		
		// EAST of lowermost row of this.blocks
		for (var i = 0; i < this.matrixSize - 1; i++) {
			if (this.blocks[this.matrixSize - 1][i].connections[Direction.EAST] != this.blocks[this.matrixSize - 1][i + 1].connections[Direction.WEST]) {
				this.blocks[this.matrixSize - 1][i].unconnecteds[Direction.EAST] = this.blocks[this.matrixSize - 1][i].connections[Direction.EAST];
				this.blocks[this.matrixSize - 1][i + 1].unconnecteds[Direction.WEST] = this.blocks[this.matrixSize - 1][i + 1].connections[Direction.WEST];
			}
		}
	}
	
	this.randomizeBlocks = function() {
		do {
			for (var i = 0; i < this.matrixSize; i++) {
				for (var j = 0; j < this.matrixSize; j++) {
					var r = game.rnd.integerInRange(0, 3);
					while (r > 0) {
						this.blocks[i][j].rotate();
						r--;
					}
				}
			}
			this.initializeUnconnecteds();
		}
		while (this.checkLevelFinished());
	}
	
	this.blockIsClicked = function(row, col) {
		var block = this.blocks[row][col];
		block.unconnecteds[0] = false;
		block.unconnecteds[1] = false;
		block.unconnecteds[2] = false;
		block.unconnecteds[3] = false;
		
		if (row - 1 >= 0) {
			this.blocks[row - 1][col].unconnecteds[Direction.SOUTH] = false;
			if (this.blocks[row - 1][col].connections[Direction.SOUTH] != block.connections[Direction.NORTH]) {
				this.blocks[row - 1][col].unconnecteds[Direction.SOUTH] = true && this.blocks[row - 1][col].connections[Direction.SOUTH];
				block.unconnecteds[Direction.NORTH] = true && block.connections[Direction.NORTH];
			}
		}
		else if (row - 1 < 0 && block.connections[Direction.NORTH] == true) {
			block.unconnecteds[Direction.NORTH] = true;
		}	
		
		if (row + 1 < this.matrixSize) {
			this.blocks[row + 1][col].unconnecteds[Direction.NORTH] = false;
			if (this.blocks[row + 1][col].connections[Direction.NORTH] != block.connections[Direction.SOUTH]) {
				this.blocks[row + 1][col].unconnecteds[Direction.NORTH] = true && this.blocks[row + 1][col].connections[Direction.NORTH];
				block.unconnecteds[Direction.SOUTH] = true && block.connections[Direction.SOUTH];
			}
		}
		else if (row + 1 >= this.matrixSize && block.connections[Direction.SOUTH] == true) {
			block.unconnecteds[Direction.SOUTH] = true;
		}
		
		if (col - 1 >= 0) {
			this.blocks[row][col - 1].unconnecteds[Direction.EAST] = false;
			if (this.blocks[row][col - 1].connections[Direction.EAST] != block.connections[Direction.WEST]) {
				this.blocks[row][col - 1].unconnecteds[Direction.EAST] = true && this.blocks[row][col - 1].connections[Direction.EAST];
				block.unconnecteds[Direction.WEST] = true && block.connections[Direction.WEST];
			}
		}
		else if (col - 1 < 0 && block.connections[Direction.WEST] == true) {
			block.unconnecteds[Direction.WEST] = true;
		}	
		
		if (col + 1 < this.matrixSize) {
			this.blocks[row][col + 1].unconnecteds[Direction.WEST] = false;
			if (this.blocks[row][col + 1].connections[Direction.WEST] != block.connections[Direction.EAST]) {
				this.blocks[row][col + 1].unconnecteds[Direction.WEST] = true && this.blocks[row][col + 1].connections[Direction.WEST];
				block.unconnecteds[Direction.EAST] = true && block.connections[Direction.EAST];
			}
		}
		else if (col + 1 >= this.matrixSize  && block.connections[Direction.EAST] == true) {
			block.unconnecteds[Direction.EAST] = true;
		}
		
		// for (var i = 0; i < this.matrixSize; i++) {
			// for (var j = 0; j < this.matrixSize; j++)  {
				// this.game.debug.text(this.blocks[i][j].unconnecteds[0], i * 60, j * 50+20);
				// this.game.debug.text(this.blocks[i][j].unconnecteds[1], i * 60, j * 50+30);
				// this.game.debug.text(this.blocks[i][j].unconnecteds[2], i * 60, j * 50+40);
				// this.game.debug.text(this.blocks[i][j].unconnecteds[3], i * 60, j * 50+50);
			// }
		// }
		
		if (!this.checkLevelFinished()) {
			this.parent.blockIsClicked(block);
		}
		else {
			this.parent.levelWon();
		}
	}
	
	this.checkLevelFinished = function() {
		var unconnected = false;
		for (var i = 0; i < this.matrixSize; i++) {
			for (var j = 0; j < this.matrixSize; j++) {
				unconnected = unconnected || this.blocks[i][j].unconnecteds[0];
				unconnected = unconnected || this.blocks[i][j].unconnecteds[1];
				unconnected = unconnected || this.blocks[i][j].unconnecteds[2];
				unconnected = unconnected || this.blocks[i][j].unconnecteds[3];
			}
		}
		this.levelIsFinished = !unconnected;
		
		return this.levelIsFinished;
	}
	
	this.activate = function() {
		for (var i = 0; i < this.matrixSize; i++) {
			for (var j = 0; j < this.matrixSize; j++) {
				this.blocks[i][j].activate();
			}
		}
	}
	
	this.deactivate = function() {
		for (var i = 0; i < this.matrixSize; i++) {
			for (var j = 0; j < this.matrixSize; j++) {
				this.blocks[i][j].deactivate();
			}
		}
	}
	
	this.destroy = function() {
		for (var i = 0; i < this.matrixSize; i++) {
			for (var j = 0; j < this.matrixSize; j++) {
				this.blocks[i][j].destroy();
			}
		}
	}
	this.generateLevel(game, data);
	this.randomizeBlocks();
}