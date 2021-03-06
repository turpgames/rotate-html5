function LevelTimer(game, controller) {
	this.parent = controller;
	this.currTime = 0;
	this.totalTime = 0;
	this.isStopped = true;
	this.isFlashShown;
	this.lastSecondsSound = game.make.sound('lastseconds', 0.6, false, true);
	this.isLastSeconds = false;
	this.color1 = 'color1';
	this.color2 = 'color2';
	
	this.frameGroup = game.add.group();
	var sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY, this.color1);
	sprite.scale.setTo(R.BARLENGTH, R.BARWIDTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY + R.BARLENGTH - R.BARWIDTH, this.color1);
	sprite.scale.setTo(R.BARLENGTH, R.BARWIDTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX, R.LEVELFRAMEOFFSETY, this.color1);
	sprite.scale.setTo(R.BARWIDTH, R.BARLENGTH);
	sprite = this.frameGroup.create(R.LEVELFRAMEOFFSETX + R.BARLENGTH - R.BARWIDTH, R.LEVELFRAMEOFFSETY, this.color1);
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
	
	this.stopBarFlash = function() {
		window.clearInterval(this.flash);		
		this.color1 = 'color1';
		this.color2 = 'color2';
		this.timerBar1.loadTexture(this.color2);
		this.timerBar2.loadTexture(this.color2);
		this.timerBar3.loadTexture(this.color2);
		this.timerBar4.loadTexture(this.color2);
	}
	
	this.frameGroup = game.add.group();
	this.timerBar1 = this.frameGroup.create(this.getBarX(), R.LEVELFRAMEOFFSETY, this.color2);
	this.timerBar2 = this.frameGroup.create(this.getBarX(), R.LEVELFRAMEOFFSETY + R.BARLENGTH - R.BARWIDTH, this.color2);
	this.timerBar3 = this.frameGroup.create(R.LEVELFRAMEOFFSETX, this.getBarY(), this.color2);
	this.timerBar4 = this.frameGroup.create(R.LEVELFRAMEOFFSETX + R.BARLENGTH - R.BARWIDTH, this.getBarY(), this.color2);
	
	this.update = function(elapsed) {
		if (!this.isStopped) {
			this.currTime -= elapsed;
			this.timerBarScale = this.currTime / this.totalTime;
			if (this.currTime < 0) {
				this.currTime = 0;
				this.timerBarScale = 0;
				this.isStopped = true;
				this.parent.levelLost();
				window.clearInterval(this.interval);
				this.stopBarFlash();
			}
			else if (this.currTime < 500) {
				window.clearInterval(this.interval);
			}
			else if (this.isFlashShown && this.currTime < 10000 && !this.isLastSeconds) {
				this.isLastSeconds = true;
				this.lastSecondsSound.play();
				this.interval = setInterval(function(p) {
				p.lastSecondsSound.play();
				}, 1000, this);
				this.flash = setInterval(function(p) {
					temp = p.color1;
					p.color1 = p.color2;
					p.color2 = temp;
					p.timerBar1.loadTexture(p.color2);
					p.timerBar2.loadTexture(p.color2);
					p.timerBar3.loadTexture(p.color2);
					p.timerBar4.loadTexture(p.color2);
				}, 100, this);
			}
			
			this.timerBar1.scale.setTo(this.getBarLength(), R.BARWIDTH);
			this.timerBar1.x = this.getBarX();
			
			this.timerBar2.scale.setTo(this.getBarLength(), R.BARWIDTH);
			this.timerBar2.x = this.getBarX();
			
			this.timerBar3.scale.setTo(R.BARWIDTH, this.getBarLength());
			this.timerBar3.y = this.getBarY();
			
			this.timerBar4.scale.setTo(R.BARWIDTH, this.getBarLength());
			this.timerBar4.y = this.getBarY();
			
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
		this.isLastSeconds = false;
		window.clearInterval(this.interval);
		this.stopBarFlash();
	}
	
	this.addTime = function(addedTime) {
		this.totalTime += addedTime;
		this.currTime += addedTime;
		this.isLastSeconds = false;
		window.clearInterval(this.interval);
		this.stopBarFlash();
	}
}