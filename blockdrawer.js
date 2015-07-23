function BlockDrawer() {
	
}
BlockDrawer.U = function() { 
	return Controller.getBlockSize() / 12; 
};
BlockDrawer.outColor = 'color2';
BlockDrawer.inColor = 'color1';

BlockDrawer.getConn1Rects = function(block) {
	var eastRects = [block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), 8*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor)];
	
	var northRects = [block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor)];
	
	var westRects = [block.createRect(0, 3*BlockDrawer.U(), 8*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(0, 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor)];
		
	var southRects = [block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), 6*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor)];
		
	return [eastRects, northRects, westRects, southRects];
}

BlockDrawer.getConn2CRects = function(block) {
	var southRects = [
		block.createRect(5*BlockDrawer.U(), 3*BlockDrawer.U(), 7*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 5*BlockDrawer.U(), 6*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(9*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),
		
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(7*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	var eastRects = [
		block.createRect(5*BlockDrawer.U(), 3*BlockDrawer.U(), 7*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(9*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),

		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),
		
		block.createRect(5*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(7*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
		
	var northRects = [
		block.createRect(0, 3*BlockDrawer.U(), 7*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(2*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(7*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),

		block.createRect(0, 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),
		
		block.createRect(6*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	var westRects = [block.createRect(0, 3*BlockDrawer.U(), 7*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 5*BlockDrawer.U(), 6*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.outColor),

		block.createRect(2*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(7*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(0, 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),
		
		block.createRect(6*BlockDrawer.U(), 5*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(4*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
		
		
	return [eastRects, northRects, westRects, southRects];
}

BlockDrawer.getConn2SRects = function(block) {
	var eastRects = [
		block.createRect(0, 3*BlockDrawer.U(), 12*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(0, 5*BlockDrawer.U(), 12*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor)];
	var northRects = [
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.inColor)];
	var westRects = [
		block.createRect(0, 3*BlockDrawer.U(), 12*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(0, 5*BlockDrawer.U(), 12*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor)];
	var southRects = [
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.inColor)];
		
	return [eastRects, northRects, westRects, southRects];
}
BlockDrawer.getConn3Rects = function(block) {
	var westRects = [
		block.createRect(0, 3*BlockDrawer.U(), 12*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 3*BlockDrawer.U(), 6*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(0, 5*BlockDrawer.U(), 12*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(9*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(2*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(4*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(7*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	var southRects = [
		block.createRect(3*BlockDrawer.U(), 3*BlockDrawer.U(), 9*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(5*BlockDrawer.U(), 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(9*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(9*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(7*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(7*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	var eastRects = [
		block.createRect(0, 3*BlockDrawer.U(), 12*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(0, 5*BlockDrawer.U(), 12*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(9*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(2*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),

		block.createRect(7*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(7*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(4*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	var northRects = [
		block.createRect(0, 3*BlockDrawer.U(), 9*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(0, 5*BlockDrawer.U(), 7*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(2*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		block.createRect(2*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
		
		block.createRect(4*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

		block.createRect(4*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
		block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
		
	return [eastRects, northRects, westRects, southRects];
}

BlockDrawer.getConn4Rects = function(block) {
	var rects = [
	block.createRect(0, 3*BlockDrawer.U(), 12*BlockDrawer.U(), 6*BlockDrawer.U(), BlockDrawer.outColor),
	block.createRect(3*BlockDrawer.U(), 0, 6*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.outColor),
	block.createRect(0, 5*BlockDrawer.U(), 12*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(5*BlockDrawer.U(), 0, 2*BlockDrawer.U(), 12*BlockDrawer.U(), BlockDrawer.inColor),

	block.createRect(9*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
	block.createRect(2*BlockDrawer.U(), 9*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
	block.createRect(9*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
	block.createRect(2*BlockDrawer.U(), 2*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.outColor),
	
	block.createRect(4*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(3*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(4*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

	block.createRect(7*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(7*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(8*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

	block.createRect(7*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(7*BlockDrawer.U(), 8*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(8*BlockDrawer.U(), 7*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),

	block.createRect(4*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(4*BlockDrawer.U(), 3*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor),
	block.createRect(3*BlockDrawer.U(), 4*BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.U(), BlockDrawer.inColor)];
	
	return [rects, rects, rects, rects];
}
