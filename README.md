# cli-gyro
Spinner for your cli.


## Install

    npm install cli-gyro
    
## Example

    var gyro = require('cli-gyro');
    var spinner = new gyro(['┏ ', '┓ ', '┛ ', '┗ '] /* spinner chars */, 4 /* array length */, 1000 /* interval time */);
    spinner.start();
    
    setTimeout(function() {
        spinner.stop();
    }, 30000);
