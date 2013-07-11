var express = require('express');
var fs = require('fs');
var bf = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buff= fs.readFileSync("index.html");
    resp = buff.toString();
    response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
