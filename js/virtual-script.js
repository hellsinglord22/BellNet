/*global $*/  

// Attributes 
var currentTool; 
var isDrawing;

var whiteBoard = document.getElementById("whiteBoard"); 
var brush = whiteBoard.getContext("2d");
brush.strokeStyle="black"; 



var radius = 10; 



/**
 * select a tool, handling on click listener 
 */
function selectTool()
{
    currentTool = this.id; 
    $(".item").css("background-color", "white"); 
    $("#".concat(currentTool)).css("background-color", "#bbb"); 
}

/**
 * get mousePosition in respective to the canves not the document
 * @param canvas you want to get the mouse x, y position on it. 
 * @param evt mouse evt position relative to the document when event occure 
 */
function getMousePos(canvas, evt) 
{
    var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
}



function onmousedownBrush(e)
{
        e.preventDefault();
        isDrawing = true;
        
        var mousePos = getMousePos(whiteBoard, e); 
        
        brush.moveTo(mousePos.x, mousePos.y);
}

//==============================================================================
// ADD EVENT LISTENER 
//==============================================================================
// handle every event listnener in the document 

function initEventListener()
{
    // Add listeners 
    $(".item").click(selectTool);
    
    
    whiteBoard.onmousedown = onmousedownBrush; 
    
    whiteBoard.onmousemove = function(e) 
    {
        var mousePos = getMousePos(whiteBoard, e); 
    
        if (isDrawing) 
        {
            brush.lineTo(mousePos.x, mousePos.y);
            brush.stroke();
      }
    };
    
    whiteBoard.onmouseup = function() {
        isDrawing = false;
    };
    
}



// WHEN READY // 
$(document).ready(function(){
    initEventListener();
}); 


