function MapData() {

}

MapData.randBool = function(game) {
	return game.rnd.integerInRange(0,1) == 0;
}

MapData.randMap = function(game, mapSize) {
	var connectionsMap = [];

	for (var i = 0; i < mapSize; i++) {
		connectionsMap.push([]);
		for (var j = 0; j < mapSize; j++) {
			connectionsMap[i].push([false,false,false,false]);
		}
	}

	for (var i = 0; i < mapSize; i++) {
		for (var j = 0; j < mapSize - 1; j++) {
			if (MapData.randBool(game)) {
				connectionsMap[i][j][Direction.EAST] = true;
				connectionsMap[i][j + 1][Direction.WEST] = true;
			}
		}
	}

	for (var i = 0; i < mapSize - 1; i++) {
		for (var j = 0; j < mapSize; j++) {
			if (MapData.randBool(game)) {
				connectionsMap[i][j][Direction.SOUTH] = true;
				connectionsMap[i + 1][j][Direction.NORTH] = true;
			}
		}
	}

	var empty = true; // to prevent generating empty levels by cbance.
	var map = [];
	for (var i = 0; i < mapSize; i++) {
		map.push([]);
		for (var j = 0; j < mapSize; j++) {
			map[i].push([]);
		}
	}
	
	var trues;
	for (var i = 0; i < mapSize; i++) {
		for (var j = 0; j < mapSize; j++) {
			trues = 0;
			for (var k = 0; k < 4; k++) {
				if (connectionsMap[i][j][k])
					trues++;
			}
			if (trues == 0)
				map[i][j] = Block.CONN0;
			else if (trues == 1)
				map[i][j] = Block.CONN1;
			else if (trues == 2) {
				if (connectionsMap[i][j][0] && connectionsMap[i][j][1]
						|| connectionsMap[i][j][1]
						&& connectionsMap[i][j][2]
						|| connectionsMap[i][j][2]
						&& connectionsMap[i][j][3]
						|| connectionsMap[i][j][3]
						&& connectionsMap[i][j][0]) // curved
				{
					map[i][j] = Block.CONN2CRV;
				} else { // straight
					map[i][j] = Block.CONN2STR;
				}
			} else if (trues == 3)
				map[i][j] = Block.CONN3;
			else if (trues == 4)
				map[i][j] = Block.CONN4;
			
			if (trues != 0)
				empty = false;
		}
	}
			
	if (mapSize >= 3) { // swastika filter
		for (var i = 1; i < mapSize - 1; i++) {
			for (var j = 0; j < mapSize - 1; j++) {
				if (map[i][j] == Block.CONN4) {
					if (map[i-1][j] == Block.CONN2CRV && map[i+1][j] == Block.CONN2CRV && 
							map[i][j-1] == Block.CONN2CRV && map[i][j+1] == Block.CONN2CRV){
						if (map[i-1][j-1] == Block.CONN1 && map[i+1][j+1] == Block.CONN1 && 
								map[i+1][j-1] == Block.CONN1 && map[i-1][j+1] == Block.CONN1){
							return this.randMap(game, mapSize);
						}
					}
				}
			}
		}
	}
	
	if (empty)
		return this.randMap(game, mapSize);
	else if (mapSize == 3 && map[1][1] == Block.CONN4) // swastika-like filter
		return this.randMap(game, mapSize);
	else
		return map;
		// return [[2,2],[2,2]];
//		return new int[][]{
//	     		{2, 2, 0, 0, 0},
//	    		{2, 2, 0, 0, 0},
//	    		{0, 0, 0, 0, 0},
//	    		{0, 0, 0, 0, 0},
//	    		{0, 0, 0, 0, 0}};
//		return new int[][]{
//	     		{0, 1, 0, 1, 0},
//	    		{0, 3, 0, 3, 0},
//	    		{0, 2, 4, 2, 0},
//	    		{0, 0, 3, 0, 0},
//	    		{0, 1, 4, 1, 0}};
}