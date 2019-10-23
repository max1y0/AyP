var datos = [12, 4, 6, 9, 8, 9, 12, 1, 15];
var ancho;
var escala;

function setup() {
  createCanvas(600, 400);
  ancho=20;
  escala=15
}

function draw() {
  dibujarArr(datos);
}

function dibujarArr(datos){
  //var ancho= 600/datos.length;
  //var escala = height/15;
  for (var i = 0; i < datos.length; i++) {
    rect(i*ancho, height, ancho, -datos[i]*escala);
  }
}
