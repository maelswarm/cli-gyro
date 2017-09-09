process.stdout.setEncoding('utf8');
var spinArr;
var intervalFunc;

var Spinner = function(type, len, interval) {
	if(interval == undefined) {
		this.interval = 500;
	}
	this.arr = type;
	this.arrLen = len;
	this.interval = interval;
}

Spinner.prototype.start = function() {
	var i=0;
	var sArr = this.arr
	var len = this.arrLen;
	var interval = this.interval;
	process.stdout.write(sArr[i%len]);
	i++;
	intervalFunc = setInterval(function() {
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(sArr[i%len]);
		i++;
	}, interval);
}

Spinner.prototype.stop = function() {
	clearInterval(intervalFunc);
}

module.exports = Spinner;
