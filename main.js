var mouseEvent="empty";
var lastPositionOfX;
var lastPositionOfY;
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;
radius = 10;
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
 canvas.addEventListener("mouseup",myMouseUp);
 function myMouseUp(e){
     mouseEvent="mouseup";
 }
 canvas.addEventListener("mouseleave",myMouseLeave);
 function myMouseLeave(e){
     mouseEvent="mouseleave";
 }
 canvas.addEventListener("mousemove",myMouseMove);
 function myMouseMove(e){
     current_x=e.clientX-canvas.offsetLeft;
     current_y=e.clientY-canvas.offsetTop;
     if(mouseEvent == "mouseDown"){
         console.log(current_x + ", " + 
         current_y);
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth= width;
         ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
         ctx.stroke();
     }
     lastPositionOfX=current_x;
     lastPositionOfY=current_y;
 }
 function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}