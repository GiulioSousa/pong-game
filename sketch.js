//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 10;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

//Variáveis da raquete
let raqueteH = 5;
let raqueteW = 50;
let raqueteRadio = 2;

let xRaqueteJ = 0;
let yRaqueteJ = 175;

let xRaqueteC = 595;
let yRaqueteC = 175;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(20,0,50);
  mostraBolinha();
  mostraRaqueteJogador();
  mostraRaqueteCpu();
  moveBolinha();
  verificaColisaoBorda();
  movimentoRaqueteJ();
  verificaColisaoRaquete()
  
  
}

function mostraBolinha(){
 circle(xBolinha, yBolinha, diametro);
}

function mostraRaqueteJogador(){
  rect(xRaqueteJ, yRaqueteJ, raqueteH, raqueteW, raqueteRadio);
}

function mostraRaqueteCpu(){
  rect(xRaqueteC,yRaqueteC,raqueteH,raqueteW,raqueteRadio)
}

function moveBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function movimentoRaqueteJ () {
  if (keyIsDown(UP_ARROW)) {
  yRaqueteJ -= 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
  yRaqueteJ += 5;
  }
}

function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaqueteJ + 5 && yBolinha - raio < yRaqueteJ + raqueteW && yBolinha + raio > yRaqueteJ) {
    velocidadeXBolinha *= -1;
  }
  
  if (xBolinha + raio > xRaqueteC && yBolinha - raio < yRaqueteC + raqueteW && yBolinha + raio > yRaqueteC) {
    velocidadeXBolinha *= -1;
  }
}
