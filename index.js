process.stdout.setEncoding('utf8');
var spinArr;
var intervalFunc;
var curProg = 0;

var Spinner = function(type, len, interval, progress) {
	if(interval == undefined) {
		this.interval = 500;
	}
	this.arr = type;
	this.arrLen = len;
	this.interval = interval;
	if(progress != undefined) {
		this.progChar = progress;
	}
}

Spinner.prototype.start = function() {
	var i=0;
	var sArr = this.arr
	var len = this.arrLen;
	var interval = this.interval;
	var progChar = this.progChar;
	
	process.stdout.write(sArr[i%len]);
	if(progChar != undefined) {
		process.stdout.write('(');
		var j = 0;
		for(;j<curProg && j<10;j++) {
			process.stdout.write(progChar);
		}
		for(var k=j;j<10;j++) {
			process.stdout.write(' ');
		}
		var cp = curProg*10;
		if(cp > 100) {
			cp = 100;
		}
		process.stdout.write(') ' + cp  + '%');
	}
	i++;
	intervalFunc = setInterval(function() {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(sArr[i%len]);
		if(progChar != undefined) {
			process.stdout.write('(');
			var j = 0;
			for(;j<curProg && j<10;j++) {
				process.stdout.write(progChar);
			}
			for(var k=j;j<10;j++) {
				process.stdout.write(' ');
			}
			var cp = curProg*10;
			if(cp > 100) {
				cp = 100;
			}
			process.stdout.write(') ' + cp  + '%');
		}
		i++;
	}, interval);
}

Spinner.prototype.progress = function() {
	curProg++;
}

Spinner.prototype.stop = function() {
	clearInterval(intervalFunc);
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
}

module.exports = Spinner;
