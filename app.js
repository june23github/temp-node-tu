const http = require('http');


const server = http.createServer((req, res) =>{
    res.writeHead(200, {'context-type': 'text/plain'});
    res.end("Hello world");
})

server.listen(5000);