var canvas = new fabric.Canvas('whiteBoard');


canvas.isDrawingMode = true; 

// Crayon Brush
canvas.freeDrawingBrush = new fabric.CrayonBrush(canvas, {
  width: 70,
  opacity: 0.6,
  color: "#ff0000"
});

// Ink Brush
// canvas.freeDrawingBrush = new fabric.InkBrush(canvas);

// Marker Brush
// canvas.freeDrawingBrush = new fabric.MarkerBrush(canvas);

// Spray Brush
// canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);