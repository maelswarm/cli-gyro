# cli-gyro
Spinner for your cli.


## Install

    npm install cli-gyro
    
## Example

    var gyro = require('cli-gyro');
    var spinner = new gyro(['┏ ', '┓ ', '┛ ', '┗ '] /* spinner chars */, 4 /* array length */, 1000 /* interval time */, '=' /* progress char */);
    
    spinner.start();
    
    var interval = setInterval(function() {
	    spinner.progress();
    },400);
    
    setTimeout(function() {
	    spinner.stop();
	    clearInterval(interval);
    },5000);
