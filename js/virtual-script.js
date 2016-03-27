// Attributes 
var ERASER = "eraserTool"; 
var TYPE = "typeTool"; 
var BRUSH = "brushTool"; 

var currentTool = ERASER; 



$("document").ready(function(){
    
    // Add listeners 
    $("#eraserTool").click(function(){
       alert("I like it when you touch me there");
       currentTool = ERASER; 
    });
    
     $("#typeTool").click(function(){
       alert("I like it when you touch me there");
       currentTool = TYPE; 
    });
    
     $("#brushTool").click(function(){
       alert("I like it when you touch me there");
       currentTool = BRUSH; 
    });
}); 