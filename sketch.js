
var r = 0;
var g = 0;
var b= 0;
var value ;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(450,450);
}


function draw(){
   // change the value of Red based on the mouse movement about the X axis
   if(mouseX>225){
    r = map(mouseX/2,0,225,0,225); 
   } 
   r = map(mouseX,0,225,0,225);
    // change the value of Green based on the mouse movement about the Y axis
   if(mouseY>225){
    g = map(mouseY/2 ,0,225,0,225);
  } 
  g = map(mouseY ,0,225,0,225);
   // change the value of Blue based on the mouse movement about both the X & Y axis
  if(mouseX>225 && mouseY>225){
    b = map(mouseX/2-mouseY/2,0,225,0,225);
  }
  b = map(value,0,225,0,225);
  if(mouseY<mouseX){
    value = mouseX-mouseY;
  }
  else{
    value = mouseY-mouseX
  }
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  ellipse(mouseX,mouseY,50,50);
  stroke(10);
  fill(r,g,b);
  // Remember to fill the canvas with white paint before creating the ellipse.
}