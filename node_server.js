var http = require('http');
http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: "Running" }));
}).listen(3000, function(){
 console.log("server start at port 3000");
});