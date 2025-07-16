let vels = [1.01,1.012,1.009,1.011,1.0109]
let posXs = [1,1,1,1,1]
let x =1
function setup() {
  createCanvas(1200,400)
}


function draw() {
  pista()
  for (let i = 0; i<5; i+=1){
   autito(posXs[i],(i+1)*60)
   text(posXs[i],i*10,20)
   posXs[i]*=vels[i]
  }
}

function autito(x,y){
  //ruedas
  fill(0)
  rect(x,y+20,20,20)
  rect(x,y-10,20,20)
  rect(x+60,y-10,20)
  rect(x+60,y+20,20)
  //chasis
  fill(y*2,200,y)
  rect(x,y,90,30)
  //ventana
  fill(140,140,250)
  rect(x+20,y+10,5,10)
}

function pista(){
  background(220)
  fill(255)
  for (let i =0; i<8; i+=1){
    rect(i*140,200,70,20)
  }
}
