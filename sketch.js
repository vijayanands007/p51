var lastx=0;
var lasty=0;
var d=0;
var clicked=false
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(lastx,lasty,100);
  //background(255)
  noStroke()
  fill(mouseX,mouseY,100)
  ellipse(mouseX,mouseY,40)
  
  if (clicked==true){
    //fill(lastx,lasty,100)
    ellipse(lastx,lasty,40)
  }
  
}
function mouseClicked(){
  //background(random(100,200))
  lastx=mouseX
  lasty=mouseY
  
  
  clicked=true
  d=random(10,100)
}
function mouseReleased(){
  //background(random(100,200))
  
}