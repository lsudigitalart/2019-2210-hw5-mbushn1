let a = 0.0;
let s = 0.0;
let spacer;
frameRate(120);
function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  rectMode(BOTTOM);
spacer= 25 
}
function draw() {
  background("black");

  push();
  for (let x = 0; x < width; x += spacer) {
    for (let y = 0; y < height; y += spacer) {
      stroke(225);
      strokeWeight(5);
      point(x + spacer / 2, y + spacer / 2);

    }
  }
  pop();

  a = a + 0.06;
  s = tan(a);

  translate(width / 2, height / 2);
  scale(s);  
  fill("gold");
  rotate(s)
  arc(479, 300, 280, 280, PI, PI/2);;

  translate(75, 0);
  fill("gold");
  scale(s);
  arc(479, 300, 280, 280, PI, PI/2);

  translate(150,0);
  scale(s);  
  fill("gold");
  rotate(s)
  arc(100, 300, 280, 280, PI, PI/2);;

  translate(75, 0);
  fill("gold");
  scale(s);
  arc(479, 300, 280, 280, PI, PI/2);

  
}



  
