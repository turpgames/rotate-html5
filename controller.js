function Controller(game) {
	this.game = game;
	this.levelTimer = new LevelTimer(game, this);
	this.mapIndex;
	this.start = function() {
		this.mapIndex = 1;
		Controller.CURRENTMATRIXSIZE = 1;
		//levelResultText.setText("");
		// pauseTimer.stop();
		this.newLevel();
	}
	
	this.update = function (elapsed) {
		this.levelTimer.update(elapsed);
	}
	
	this.setLevelTitle = function() {
		document.getElementById("levelTitle").innerHTML = this.mapIndex + "/" + Controller.CURRENTMATRIXSIZE + "x" + Controller.CURRENTMATRIXSIZE;
	}
	
	this.newLevel = function () {
		this.mapIndex++;
		if (this.mapIndex > Controller.CURRENTMATRIXSIZE) {
			Controller.CURRENTMATRIXSIZE++;
			this.mapIndex = 1;
			this.levelTimer.start(R.LEVELTIMEDEC * Controller.CURRENTMATRIXSIZE, Controller.CURRENTMATRIXSIZE);
			if (Controller.CURRENTMATRIXSIZE != 2) {
				//sizeSound.play();
			}
		}
		else {
			//newSound.play();
		}
		
		if (this.level != undefined)
			this.level.destroy();
		this.level = new Level(this.game, this, MapData.randMap(this.game, Controller.CURRENTMATRIXSIZE), Controller.CURRENTMATRIXSIZE);
		
		this.setLevelTitle();
		// btnRestart.stopFlash();
		this.level.activate();
		this.levelTimer.unpause();	
	}
	
	this.blockIsClicked = function() {
		
	}
	
	this.getLevelTime = function() {
		return R.LEVELTIMEDEC * Controller.CURRENTMATRIXSIZE;
	}
	
	this.setResultText = function(text) {
		var res = document.getElementById("resultText");
		res.innerHTML = text;
		res.className = "visible";
		setTimeout(function() { 
			document.getElementById("resultText").className = "hidden";
			}, 3000);
	}
	
	this.levelWon = function() {
		// winSound.play();
		this.level.deactivate();
		
		var addedTime = this.getLevelTime();
		if (this.mapIndex < Controller.CURRENTMATRIXSIZE) {
			this.setResultText("+" + addedTime/1000 + "!");
		}
		else if (Controller.CURRENTMATRIXSIZE < 8 ) {
			this.setResultText("SIZE UP!");
		}
		else {
			this.start();
			// ScreenManager.instance.switchTo(R.Screens.finished, false);
		}
		// gameWonFlash.start();
		this.levelTimer.addTime(addedTime);
		
		// levelTimer.pause();
		// pauseTimer.start();
		this.newLevel();
	}
	
	this.levelLost = function() {
		this.level.deactivate();
		
		this.setResultText("Time up...");
		// gameWonFlash.stop();
		// btnRestart.startFlash();
		
		this.levelTimer.stop();
		
		// lostSound.play();
	}
	this.level;
	this.start();
}

Controller.CURRENTMATRIXSIZE = 5;
Controller.getBlockSize = function() {
	return R.LEVELSIZE / Controller.CURRENTMATRIXSIZE;
};