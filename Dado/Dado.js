function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function tirarDado(){
  if (keyIsPressed){
    let cara = floor(random(6))+1
    if (cara == 1){
      uno()
    }else if (cara == 2){
      dos()
    }else if (cara == 3){
      tres()
    }else if (cara == 4){
      cuatro()
    }else if (cara == 5){
      cinco()
    }else if (cara == 6){
      seis()
    }
  }
}
