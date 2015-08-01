function Controller(game) {
	this.game = game;
	this.levelTimer = new LevelTimer(game, this);
	this.mapIndex;
	
	this.sizeSound = game.make.sound('size', 0.6, false, true);
	this.newSound = game.make.sound('new', 0.6, false, true);
	this.winSound = game.make.sound('win', 0.6, false, true);
	this.turnSound = game.make.sound('turn', 0.6, false, true);
	this.lostSound = game.make.sound('lost', 0.6, false, true);
	
	document.getElementById("levelTitle").style.fontSize = R.GAMEWIDTH / 3;
	this.start = function() {
		this.mapIndex = 1;
		Controller.CURRENTMATRIXSIZE = 1;
		//levelResultText.setText("");
		// pauseTimer.stop();
		this.newLevel();
		document.getElementById("resultText").innerHTML = "&nbsp;";
	}
	
	this.restart = function() {
		this.start();
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
			if (Controller.CURRENTMATRIXSIZE > 8) {
				document.getElementById("finishedGameText").setAttribute("style", "display:block");
				return;
			}
			else {
				document.getElementById("finishedGameText").setAttribute("style", "display:none");
			}
			this.mapIndex = 1;
			this.levelTimer.start(R.LEVELTIMEDEC * Controller.CURRENTMATRIXSIZE, Controller.CURRENTMATRIXSIZE);
			if (Controller.CURRENTMATRIXSIZE != 2) {
				this.sizeSound.play();
			}
		}
		else {
			this.newSound.play();
		}
		
		if (this.level != undefined)
			this.level.destroy();
		this.level = new Level(this.game, this, MapData.randMap(this.game, Controller.CURRENTMATRIXSIZE), Controller.CURRENTMATRIXSIZE);
		
		this.setLevelTitle();
		// btnRestart.stopFlash();
		this.level.activate();
		this.levelTimer.unpause();	
	}
	
	this.blockIsClicked = function(block) {
		if(block.type != Block.CONN0)
			this.turnSound.play();
	}
	
	this.getLevelTime = function() {
		return R.LEVELTIMEDEC * Controller.CURRENTMATRIXSIZE;
	}
	
	this.setResultText = function(text) {
		var res = document.getElementById("resultText");
		res.innerHTML = text;
		return setTimeout(function() { 
			document.getElementById("resultText").innerHTML = "&nbsp;";
			}, 1000);
	}
	
	this.levelWon = function() {
		this.winSound.play();
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
		this.levelTimer.pause();
		setTimeout(function(p) { 
			p.newLevel();
			p.levelTimer.unpause();
			}, 500 ,this);
	}
	
	this.levelLost = function() {
		this.level.deactivate();
		
		clearTimeout(this.setResultText("Time up..."));
		// gameWonFlash.stop();
		// btnRestart.startFlash();

		this.levelTimer.stop();
		
		this.lostSound.play();
	}
	this.level;
	this.start();
	
	this.pause = function() {
		this.levelTimer.pause();
	}
	
	this.unpause = function() {
		this.levelTimer.unpause();
	}
}

Controller.CURRENTMATRIXSIZE = 5;
Controller.getBlockSize = function() {
	return R.LEVELSIZE / Controller.CURRENTMATRIXSIZE;
};