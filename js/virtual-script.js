/*global $*/  

// Attributes 
var currentTool; 

var whiteBoard = new fabric.Canvas("whiteBoard"); 
 





function brushTool()
{
    whiteBoard.isDrawingMode = true; 
}

function moveTool(){
    whiteBoard.isDrawingMode = false; 
}




/**
 * description
 *
 */
function changeBehaviour()
{
    switch (currentTool) {
        case "brushTool":
            brushTool();
            break;
        
        case "moveTool": 
            moveTool(); 
            break;
            
        case "clearallTool":
            $(".item").css("background-color", "white"); 
            whiteBoard.clear();
            break; 
        
        default:
            brushTool();
    }
}


/**
 * select a tool, handling on click listener 
 */
function selectTool()
{
    currentTool = this.id; 
    $(".item").css("background-color", "white"); 
    $("#".concat(currentTool)).css("background-color", "#bbb"); 
    changeBehaviour();
}



//==============================================================================
// ADD EVENT LISTENER 
//==============================================================================
// handle every event listnener in the document 

function initEventListener()
{
    // Add listeners 
    $(".item").click(selectTool);
}



// WHEN READY // 
$(document).ready(function(){
    initEventListener();
}); 


