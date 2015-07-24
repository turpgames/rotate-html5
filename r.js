function R() {
	// var main = document.getElementById("mainDiv");
	// var display = document.getElementById("displayDiv");
	
	var width = screen.availWidth;
	var height = screen.availHeight;
	if (width > height) {
		width = height * 6 / 10;
	}
	else {
		width = width * 6 / 7;
	}
	R.GAMEWIDTH = width;
	R.GAMEHEIGHT = width;
	
	R.UNIT = R.GAMEWIDTH / 60;
	R.BUTTONWIDTH =  R.UNIT * 23;
	R.BUTTONHEIGHT =  R.UNIT * 10;
	R.BUTTONOFFSETX =  R.UNIT;
		
	R.LEVELSIZE = R.UNIT * 50;
	R.MAPOFFSETX = (R.GAMEWIDTH - R.LEVELSIZE) / 2;
	R.MAPOFFSETY = R.GAMEHEIGHT - R.MAPOFFSETX - R.LEVELSIZE;

	R.BARWIDTH = R.UNIT * 1.5;
	R.BARLENGTH = R.LEVELSIZE + R.BARWIDTH * 2;
	R.LEVELFRAMEOFFSETX = R.MAPOFFSETX - R.BARWIDTH;
	R.LEVELFRAMEOFFSETY = R.MAPOFFSETY - R.BARWIDTH;
		
	R.BUTTONSPACING = R.MAPOFFSETX;
	R.BUTTONSIZE = R.LEVELSIZE / 5;
		
	R.MENUNUMBEROFBUTTONS = 4;
	R.MENUBUTTONSPACE = R.UNIT;
	R.MENUBUTTONSOFFSETX = (R.GAMEHEIGHT - (R.MENUNUMBEROFBUTTONS * R.BUTTONHEIGHT + (R.MENUNUMBEROFBUTTONS - 1) * R.MENUBUTTONSPACE)) / 2 - R.GAMEHEIGHT / 10;
}

R.LEVELTIMEDEC = 5000;

function Direction () {

}
Direction.EAST = 0;
Direction.NORTH = 1;
Direction.WEST = 2;
Direction.SOUTH = 3;
			