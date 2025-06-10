var b = new button(500,400,300,125,1,0.2,1.2,1.2);
var startS = 1;
var startSV = 0;
var startS2 = 1;
var startSV2 = 0;
var offUp = 0;
var offUpV = 0;
function screenZero(){
  background(0);
     angleMode(DEGREES)
  offUp+=offUpV;
  translate(0,offUp);
    push();
    fill(255);
    stroke(255)
    strokeWeight(3);
    textSize(110)
    textFont('Pixelify Sans');
    let words = ["M","E","R","C","Y"];
    for(let i=0; i<words.length; i++){
      push();
      translate(500-words.length*45+45+90*i,260);
      rotate(sin(frameCount*3+i*20)*10)
      text(words[i],0,0);
      pop();
    }
  push();
  textSize(60);
  translate(500,157);
  rotate(sin(frameCount*2)*5);
   strokeWeight(2);
  text("and",0,0);
  pop();
  words = ["M","A","L","I","C","E"];
    for(let i=0; i<words.length; i++){
      push();
      translate(500-words.length*45+45+90*i,90);
      rotate(-sin(frameCount*3+i*20)*10)
      text(words[i],0,0);
      pop();
    }
  //x,y,sx,sy,scale,scalev,dragv,drag
  b.work();
  push();
  noFill();
  strokeWeight(7.5);
  stroke(255);
  translate(b.x,b.y);
  scale(b.size,b.size);
  rect(0,0,b.sizeX,b.sizeY);
  textAlign(CENTER,CENTER);
  text("PLAY",0,0);
  pop();
}