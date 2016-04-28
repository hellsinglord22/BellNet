/*jshint esnext: true*/

var express = require('express');
var app = express();

app.use(function(request, response, next){
    console.log(`${request.method} request for ${request.url}`);
    next(); 
});

/// server the content of the public directory
app.use(express.static('public'));

// listen on port 3000
app.listen(3000);

/// log this to the user
console.log(`app is listeining on port 3000`);
