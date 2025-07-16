let posX
let posY
function setup() {
  createCanvas(600,600);
  noStroke()
  posX = 300
  posY = 200
}


function draw() {
  background(220)
  mira()
  enemigo(posX,posY)
}

function enemigo(x,y){
  fill(0,255,0)
  ellipse(x,y,50,50)
  if(mouseX>x && mouseY >y && 
  mouseX< x+50 &&mouseY <y+50){
    if(mouseIsPressed){
        posX = random(600)
        posY = random(600)
     }
  }

}

function mira(){
  fill(0)
  rect(mouseX-7,mouseY,16,2)
  rect(mouseX,mouseY-7,2,16)
}
