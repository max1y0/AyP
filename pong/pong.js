let pos1
let pos2

let pelotaX
let pelotaY
let velX
let velY

function setup() {
  createCanvas(600,400)
  pos1 = 200
  pos2 = 200
  
  pelotaX = 300
  pelotaY = 200
  velX =-3
  velY =3
}


function draw() {
  background(0)
  pelota()
  //paleta1
  rect(30,pos1,30,120)
  if (keyIsPressed && key=='w'){
    pos1 -=1
  }
  if (keyIsPressed && key=='s'){
    pos1 +=1
  }
  
  //paleta2
  rect(550,pos2,30,120)
  if (keyIsPressed && key=='i'){
    pos2 -=1
  }
  if (keyIsPressed && key=='k'){
    pos2 +=1
  }
}

function pelota(){
  ellipse(pelotaX,pelotaY,30,30)
  pelotaX +=velX
  pelotaY +=velY
  
  if (pelotaY > 400 || pelotaY < 0) {
    velY = -velY
  }
  
  if (pelotaY > pos1 && pelotaY <pos1+120){
    if (pelotaX < 60){
      velX = -velX
    }
  }
  
  if (pelotaY > pos2 && pelotaY <pos2+120){
    if (pelotaX > 550){
      velX = -velX
    }
  }

}
