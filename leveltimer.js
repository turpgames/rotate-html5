function LevelTimer(game, controller) {
	this.parent = controller;
	this.currTime;
	this.totalTime;
	this.isStopped = true;
	this.isFlashShown;
	
	this.frameGroup = game.add.group();
	var sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY, 'color2');
	sprite.scale.setTo(R.BARLENGTH, R.BARWIDTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY + R.BARLENGTH - R.BARWIDTH, 'color2');
	sprite.scale.setTo(R.BARLENGTH, R.BARWIDTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY, 'color2');
	sprite.scale.setTo(R.BARWIDTH, R.BARLENGTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX + R.BARLENGTH - R.BARWIDTH, R.LEVELFRAMEOFFSETY, 'color2');
	sprite.scale.setTo(R.BARWIDTH, R.BARLENGTH);
	
	this.timerBarScale = 1;
	this.getBarX = function () {
		return R.LEVELFRAMEOFFSETX + (1 - this.timerBarScale) * R.BARLENGTH / 2
	}
	this.getBarY = function () {
		return R.LEVELFRAMEOFFSETY + (1 - this.timerBarScale) * R.BARLENGTH / 2
	}
	this.getBarLength = function() {
		return R.BARLENGTH * this.timerBarScale;
	}
	
	this.frameGroup = game.add.group();
	this.timerBar1 = this.frameGroup.create(this.getBarX(), R.LEVELFRAMEOFFSETY, 'color1');
	this.timerBar2 = this.frameGroup.create(this.getBarX(), R.LEVELFRAMEOFFSETY + R.BARLENGTH - R.BARWIDTH, 'color1');
	this.timerBar3 = this.frameGroup.create(R.LEVELFRAMEOFFSETX, this.getBarY(), 'color1');
	this.timerBar4 = this.frameGroup.create(R.LEVELFRAMEOFFSETX + R.BARLENGTH - R.BARWIDTH, this.getBarY(), 'color1');
	
	this.update = function(elapsed) {
		if (!this.isStopped) {
			this.currTime -= elapsed;
			this.timerBarScale = this.currTime / this.totalTime;
			this.timerBar1.scale.setTo(this.getBarLength(), R.BARWIDTH);
			this.timerBar1.x = this.getBarX();
			
			this.timerBar2.scale.setTo(this.getBarLength(), R.BARWIDTH);
			this.timerBar2.x = this.getBarX();
			
			this.timerBar3.scale.setTo(R.BARWIDTH, this.getBarLength());
			this.timerBar3.y = this.getBarY();
			
			this.timerBar4.scale.setTo(R.BARWIDTH, this.getBarLength());
			this.timerBar4.y = this.getBarY();
			
			if (this.currTime < 0) {
				this.currTime = 0;
				this.isStopped = true;
				this.parent.levelLost();
			}
			else if (this.currTime < 0.5) {
			
			}
			else if (this.isFlashShown && this.currTime < 10) {
			
			}
			
			var time = Math.ceil(this.currTime / 1000);
			// set texts;
			document.getElementById("timerText").innerHTML = time;
		}
	}
	
	
	this.stop = function() {
		this.isStopped = true;
	}

	this.pause = function() {
		this.stop();
	}
	
	this.unpause = function() {
		this.isStopped = false;
	}
	
	this.start = function(totalTime, size) {
		if (size < 4) {
			this.isFlashShown = false;
		}
		else {
			this.isFlashShown = true;
		}
		this.totalTime = totalTime;
		this.currTime = totalTime;
		this.isStopped = false;
	}
	
	this.addTime = function(addedTime) {
		this.totalTime += addedTime;
		this.currTime += addedTime;
	}
}