var whiteBoard = document.getElementById("whiteBoard"); 
var brush = whiteBoard.getContext("2d"); 
var isDrawing; 



$("document").ready(function(){
    
    whiteBoard.onmousedown = function(e) {
    isDrawing = true;
      brush.moveTo(e.clientX, e.clientY);
    };
    
    whiteBoard.onmousemove = function(e) {
      if (isDrawing) {
        brush.lineTo(e.clientX, e.clientY);
        brush.stroke();
      }
    };
    whiteBoard.onmouseup = function() {
      isDrawing = false;
    };
}); 