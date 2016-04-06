/*global $*/  

// Attributes 
var currentTool; 

var whiteBoard = new fabric.Canvas("whiteBoard"); 
 





function brushTool()
{
    whiteBoard.freeDrawingBrush.color = 'black';
    whiteBoard.freeDrawingBrush.width = 10;
    whiteBoard.isDrawingMode = true; 
}

function moveTool(){
    $("#".concat(currentTool)).css("background-color", "#bbb"); 
    whiteBoard.isDrawingMode = false; 
}
function clearallTool()
{   
    var result = confirm("Want to delete?");
        if(result){
            $(".item").css("background-color", "white"); 
            whiteBoard.clear();
        }
    
    
}
function eraserTool() 
{
   whiteBoard.isDrawingMode = true;
   whiteBoard.freeDrawingBrush.width = 50;
   whiteBoard.freeDrawingBrush.color = 'white';
}

function typeTool(){
    whiteBoard.add(new fabric.IText('Tap and Type', { 
        fontFamily: 'arial black',
        left: 100, 
        top: 100 ,
    }));
    
    
    $(".item").css("background-color", "white");
    currentTool = 'moveTool';
    moveTool(); 
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
            clearallTool();
            break; 
            
        case "eraserTool":
            eraserTool();
            break;
            
        case "typeTool":
            typeTool(); 
            break;
        
        
        default:
            
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


