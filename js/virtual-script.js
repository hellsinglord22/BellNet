// Attributes 
var ERASER = "eraserTool"; 
var TYPE = "typeTool"; 
var BRUSH = "brushTool"; 

var currentTool = ERASER; 



$("document").ready(function(){
    
    // Add listeners 
    $("#eraserTool").click(function(){
       currentTool = ERASER; 
       $(".item").css("background-color", "white"); 
       $(this).css("background-color", "#bbb"); 
       
    });
    
     $("#typeTool").click(function(){
       currentTool = TYPE; 
       $(".item").css("background-color", "white"); 
       $(this).css("background-color", "#bbb"); 
    });
    
     $("#brushTool").click(function(){
       currentTool = BRUSH;
       $(".item").css("background-color", "white"); 
       $(this).css("background-color", "#bbb"); 
    });
}); 