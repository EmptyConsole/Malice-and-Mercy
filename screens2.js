var backer = new button(120,75,170,80,1,0.2,1.2,1.3);
//varaible music is taken -_-
var musics = new button(550,450,20,40,1,0.2,1.2,1.3);
var soundss = new button(550,325,20,40,1,0.2,1.2,1.3);
var masters = new button(550,200,20,40,1,0.2,1.2,1.3);
var preSound = 0.7;
var masterVol = 0.9;
var preMaster = 0.9;
function screenThree(){
  background(20);
  backer.work();
  push();
  translate(backer.x,backer.y);
  scale(backer.size,backer.size);
  noFill();
  strokeWeight(7.5);
  stroke(255)
  rect(0,0,backer.sizeX,backer.sizeY);
  textSize(60);
  fill(255);
  stroke(255);
  strokeWeight(2);
  textAlign(CENTER,CENTER);
  text("BACK",0,2.5);
  pop();
  
  masters.work();
  if(masters.held){
    masters.x = mouseX;
    masters.x = max(550,masters.x);
    masters.x = min(900,masters.x);
    if(abs(masterVol-preMaster)>=0.05){
      sounds[6].play();
      sounds[6].setVolume(0.7*soundVol*masterVol);
      preMaster = masterVol;
    }
  }
  push();
  translate(masters.x,masters.y);
  scale(masters.size,masters.size);
  rotate(sin(frameCount*3)*5);
  noFill();
  strokeWeight(7.5);
  stroke(255)
  textSize(masters.sizeX*4);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  text("o",0,-4);
  masterVol = (masters.x-550)/350;
  pop();
  
  musics.work();
  if(musics.held){
    musics.x = mouseX;
    musics.x = max(550,musics.x);
    musics.x = min(900,musics.x);
  }
  push();
  translate(musics.x,musics.y);
  scale(musics.size,musics.size);
  rotate(sin(frameCount*3)*5);
  noFill();
  strokeWeight(7.5);
  stroke(255)
  textSize(musics.sizeX*4);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  text("o",0,-4);
  musicVol = (musics.x-550)/350;
  music[4].setVolume(0.8*musicVol*masterVol);
  pop();
  
  soundss.work();
  if(soundss.held){
    soundss.x = mouseX;
    soundss.x = max(550,soundss.x);
    soundss.x = min(900,soundss.x);
    if(abs(soundVol-preSound)>=0.05){
      sounds[7].play();
      sounds[7].setVolume(0.7*soundVol*masterVol);
      preSound = soundVol;
    }
  }
  push();
  translate(soundss.x,soundss.y);
  scale(soundss.size,soundss.size);
  rotate(sin(frameCount*3)*5);
  noFill();
  strokeWeight(7.5);
  stroke(255)
  textSize(soundss.sizeX*4);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  text("o",0,-4);
  soundVol = (soundss.x-550)/350;
  pop();
  
  push();
  textAlign(LEFT,CENTER);
  textSize(55);
  fill(255);
  stroke(255);
  strokeWeight(2);
  text("Master Volume: "+floor(masterVol*100),25,200);
  text("Sound Volume: "+floor(soundVol*100),25,325);
  text("Music Volume: "+floor(musicVol*100),25,450);
  strokeWeight(7);
  line(550,200,900,200);
  line(550,325,900,325);
  line(550,450,900,450);
  
  pop();
  if(backer.clicked){
    screen = 0;
    sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
  }
}