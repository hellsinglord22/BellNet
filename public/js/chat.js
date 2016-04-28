
// when document is read
$(document).ready(function(){

    var socket = io("http://localhost:3000");

    // get hold of the message form
    $('#chat').submit(function(e){
        e.preventDefault();
        var messageContent = $('#message').val();
        socket.emit('chat', messageContent);
        printMessage(messageContent); 
        this.reset();
    });

    socket.on("connect", function() {
        alert('You are connected to live server');
    });

    socket.on("message", function(message) {
	       printMessage(message);
    });

    function printMessage(message){
        $('p').text(message).appendTo('#messages');
    }
});
