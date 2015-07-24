
function Block (game, level, xPos, yPos, rowIndex, colIndex, t, rot) { // constructor function
	this.parent = level;
	this.row = rowIndex;
	this.col = colIndex;
	this.x = xPos;
	this.y = yPos;
	this.type = t;

	this.width = Controller.getBlockSize();
	this.height = Controller.getBlockSize();

	var sprite = game.add.sprite(this.x, this.y, 'colort');
	this.rectGroup = game.add.group();
	
	this.updateRects = function() {
		this.rectGroup.removeAll();
		for (var i = 0; i < this.rects[this.direction].length; i++) {
			this.rectGroup.add(this.rects[this.direction][i]);
		}
	}
	
	this.rotate = function() {
		var temp = this.connections[3];
		this.connections[3] = this.connections[2];
		this.connections[2] = this.connections[1];
		this.connections[1] = this.connections[0];
		this.connections[0] = temp;
		
		this.direction += 1;
		this.direction %= 4;
		
		this.updateRects();
	}

	this.createRect = function(x,y,w,h,color) {
		var rect = new Phaser.Sprite(game, this.x + x, this.y + y, color);
		rect.scale.setTo(w,h);
		return rect;
	}
	this.connections = [];
	if (this.type == Block.CONN0) {
		this.connections = [false, false, false, false];
		this.rects = [[],[],[],[]];
	}
	else if (this.type == Block.CONN1) {
		this.connections = [true, false, false, false];
		this.rects = BlockDrawer.getConn1Rects(this);
	}
	else if (this.type == Block.CONN2CRV) {
		this.connections = [true, true, false, false];
		this.rects = BlockDrawer.getConn2CRects(this);
	}
	else if (this.type == Block.CONN2STR) {
		this.connections = [true, false, true, false];
		this.rects = BlockDrawer.getConn2SRects(this);
	}
	else if (this.type == Block.CONN3) {
		this.connections = [true, true, true, false];
		this.rects = BlockDrawer.getConn3Rects(this);
	}
	else if (this.type == Block.CONN4) {
		this.connections = [true, true, true, true];
		this.rects = BlockDrawer.getConn4Rects(this);
	}
	
	this.direction = 0;
	for (var i = 0; i < rot; i++) {
		this.rotate();
	}
	
	this.updateRects();
	
	this.unconnecteds = [false, false, false, false];
	
	sprite.inputEnabled = true;
	sprite.width = this.width;
	sprite.height = this.height;
	this.isActive = true;
	this.inputDown = function() {
		if (!this.isActive)
			return false;
		this.rotate();
		this.parent.blockIsClicked(this.row, this.col);
	}
	
	sprite.events.onInputDown.add(this.inputDown, this);
	
	this.activate = function() {
		this.isActive = true;
	}
	
	this.deactivate = function() {
		this.isActive = false;
	}
	
	this.destroy = function() {
		this.rectGroup.removeAll();
	}
}

Block.CONN0 = 0;
Block.CONN1 = 1;
Block.CONN2CRV = 2;
Block.CONN2STR = 3;
Block.CONN3 = 4;
Block.CONN4 = 5;