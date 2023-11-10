const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end("Home page");
    }
    if (req.url === '/about'){
        res.end("History");
    }
    res.end(`
        <h1>Opps!</h1>
        <a href="/">Back home</a>
    `)
});

server.listen(5000);