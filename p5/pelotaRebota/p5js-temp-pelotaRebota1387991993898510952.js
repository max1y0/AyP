function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  ocaso ()
}

function ocaso(){
   if (mouseX<50){
    background(0,0,0)
  }else if (mouseX<100){
    background(0,0,76)
  } else if (mouseX<150){
    background(0,0,200)
  } else if (mouseX<200){
    background(0,0,400)
  } else if (mouseX<250){
    background(0,150,400)
  } else if (mouseX<300){
    background(0,460,180)
  } else if (mouseX<350){
    background(0,190,140)
  } else{
    background(0,160,150)
  }
}
