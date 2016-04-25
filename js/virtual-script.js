/*global $*/  

// Attributes 
var currentTool; 



var whiteBoard = new fabric.Canvas("whiteBoard"); 

/// brushes 
var heighLighterBrush = new fabric.PatternBrush(whiteBoard);
heighLighterBrush.getPatternSrc = function() {

  var squareWidth = 10; 

  var patternCanvas = fabric.document.createElement('canvas');
  patternCanvas.width = patternCanvas.height = squareWidth;
  var ctx = patternCanvas.getContext('2d');

  ctx.globalAlpha = 0.5;
  ctx.fillStyle = this.color;
  ctx.fillRect(0, 0, squareWidth, squareWidth);

  return patternCanvas;
};

var defaultBrush = new fabric.PatternBrush(whiteBoard);
defaultBrush.getPatternSrc = function() {

  var squareWidth = 10; 

  var patternCanvas = fabric.document.createElement('canvas');
  patternCanvas.width = patternCanvas.height = squareWidth;
  var ctx = patternCanvas.getContext('2d');

  ctx.globalAlpha = 1;
  ctx.fillStyle = this.color;
  ctx.fillRect(0, 0, squareWidth, squareWidth);

  return patternCanvas;
};

// end of brushes 


var drawingColorEl = $("#drawingColor"); 

 





function brushTool()
{
    whiteBoard.isDrawingMode = true;
    whiteBoard.freeDrawingBrush = defaultBrush; 
    whiteBoard.freeDrawingBrush.color = drawingColorEl.val(); 
    whiteBoard.freeDrawingBrush.width = 15;
}

function penTool()
{
    
    whiteBoard.isDrawingMode = true;
    whiteBoard.freeDrawingBrush = defaultBrush; 
    whiteBoard.freeDrawingBrush.color = drawingColorEl.val(); 
    whiteBoard.freeDrawingBrush.width = 1;
}

function highlighter()
{
    whiteBoard.isDrawingMode = true;
    whiteBoard.freeDrawingBrush = heighLighterBrush;
    whiteBoard.freeDrawingBrush.color='yellow';
    whiteBoard.freeDrawingBrush.width = 30;
}
function moveTool(){
    $("#".concat(currentTool)).css("background-color", "#bbb"); 
    whiteBoard.isDrawingMode = false; 
}
function clearallTool()
{   
    var result = confirm("Are you sure you want to delete?");
        if(result){
            $(".item").css("background-color", "white"); 
            whiteBoard.clear();
        }
    
    
}
function eraserTool() 
{
   whiteBoard.isDrawingMode = true;
   whiteBoard.freeDrawingBrush = defaultBrush; 
   whiteBoard.freeDrawingBrush.width = 50;
   whiteBoard.freeDrawingBrush.color = 'white';
}


function typeTool(){
    whiteBoard.add(new fabric.IText('Type here', { 
        fontFamily: 'arial black',
        left: 100, 
        top: 100,
     
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
            
        case "penTool":
            penTool();
            break;
            
        case "highlighterTool":
            highlighter();
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
    drawingColorEl.change(function(){
        whiteBoard.freeDrawingBrush.color = drawingColorEl.val(); 
    }); 
    
    
}




// WHEN READY // 
$(document).ready(function(){
    initEventListener();
});