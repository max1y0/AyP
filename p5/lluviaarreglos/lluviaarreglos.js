//arreglo de gotas
gotas = []

function setup() {
  createCanvas(640, 360);
  cargar(gotas);
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < gotas.length; i++) {
    dibujar(i,gotas[i]);
    gotas[i]= caer(gotas[i]);
  }
}


//carga al arreglo con gotas de distinta altura
function cargar(gotas) {
  for (var i = 0; i < 600; i++) {
    gotas[i] = floor(random(-500,-50));
  }
}

//dibuja la gota en forma de linea
function dibujar(x,y) {
  strokeWeight(2);
  stroke(138, 43, 226);
  line(x, y, x, y+3);
}

//funcion que anima la caida, al tocar el piso vuelve hacia arriba
function caer(y){
  y = y+4;
  if (y > height){
    y = floor(random(-500,-50)); 
  }
  return y;
}
