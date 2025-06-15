var b = new button(500,425,250,90,1,0.2,1.2,1.3);
var sett = new button(500,535,377,90,1,0.2,1.2,1.4);
var startS = 1;
var startSV = 0;
var startS2 = 1;
var startSV2 = 0;
var offUp = 0;
var offUpV = 0;
function screenZero(){
  background(20);
     angleMode(DEGREES)
    fill(255);
    stroke(255)
    strokeWeight(3);
    textSize(110)
    textFont('Pixelify Sans');
    let words = ["M","E","R","C","Y"];
    for(let i=0; i<words.length; i++){
      push();
      translate(500-words.length*45+45+90*i,280);
      rotate(sin(frameCount*3+i*20)*10)
      text(words[i],0,0);
      pop();
    }
  push();
  textSize(60);
  translate(500,177);
  rotate(sin(frameCount*2)*5);
   strokeWeight(2);
  text("and",0,0);
  pop();
  words = ["M","A","L","I","C","E"];
    for(let i=0; i<words.length; i++){
      push();
      translate(500-words.length*45+45+90*i,110);
      rotate(-sin(frameCount*3+i*20)*10)
      text(words[i],0,0);
      pop();
    }
  push();
  fill(255);
  noStroke();
  textSize(40);
  toxt(["By: ","E","m","p","t","y"," ","C","o","n","s","o","l","e"],[false,true,true,true,true,true,true,true,true,true,true,true,true,true],500,345);
  pop();
  //x,y,sx,sy,scale,scalev,dragv,drag
  b.work();
  push();
  textSize(90);
  noFill();
  strokeWeight(6.5);
  stroke(255);
  translate(b.x,b.y);
  scale(b.size,b.size);
  rect(0,0,b.sizeX,b.sizeY);
  textAlign(CENTER,CENTER);
  strokeWeight(2);
  fill(255);
  text("PLAY",0,2.5);
  pop();
  
  sett.work();
  push();
  textSize(80);
  noFill();
  strokeWeight(7.5);
  stroke(255);
  translate(sett.x,sett.y);
  scale(sett.size,sett.size);
  rect(0,0,sett.sizeX,sett.sizeY);
  textAlign(CENTER,CENTER);
  strokeWeight(2);
  fill(255);
  text("SETTINGS",0,2.5);
  pop();
  music[0].setVolume(0);
  if(b.clicked){
    screen=1;
    // next = 0;
    sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
    music[0].loop()
     music[0].setVolume(0.8*musicVol*masterVol,3,2)
    music[4].setVolume(0.8*musicVol*masterVol)
   // print(0.8*musicVol*masterVol)
    music[4].setVolume(0*musicVol*masterVol,2);
    player1.startTime = 0;
  }
  if(sett.clicked){
    screen = 3;
    sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
  }
}
