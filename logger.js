
const { EventEmitter } = require('stream');


var url = 'http://mylogger.io/log';
class Logger extends EventEmitter {
    log(message){
        // Send an HTTP request
        console.log(message);
        this.emit('messageLogged', { id: 1, url: 'aaa'});
    
    }
}


module.exports = Logger;