var img01;
let xJogador1=0;

function setup() {
  createCanvas(900, 850);
img01=loadImage('images.jpeg')
}

function draw() {
  background(img01);
  
  textSize(60);
 text("🛩",xJogador1,100); 
 noStroke();
  noFill();
rect(450,0,10,400)
 xJogador1 +=random(5)

 if (xJogador1>450){
  text("Que vista Bonita!",50,200)
  noLoop();
  
  
  
 }
}