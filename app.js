/*jshint esnext: true*/

var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000);
var io = require('socket.io')(server);


app.use(function(request, response, next){
    console.log(`${request.method} request for ${request.url}`);
    next();
});

/// server the content of the public directory
app.use(express.static('public'));


/// web socket
io.on('connection', function(clientSocket){
    clientSocket.emit('message', 'welcome to virtual class room'); 
});


/// log this to the user
console.log(`app is listeining on port 3000`);
