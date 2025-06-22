var backer = new button(120,75,170,80,1,0.2,1.2,1.3);
//varaible music is taken -_-
var musics = new button(550,450,20,40,1,0.2,1.2,1.3);
var soundss = new button(550,325,20,40,1,0.2,1.2,1.3);
var masters = new button(550,200,20,40,1,0.2,1.2,1.3);
var preSound = 0.7;
var masterVol = 0.9;
var preMaster = 0.9;
var speedS = 0;
function screenThree(){
  speedS = max(-7,min(speedS,7));
  speedS/=1.6;
  background(20);
  if(gameFU){
    buttonS2--;
    sounds[6].play();
    sounds[6].setVolume(1*soundVol*masterVol);
  }
  if(gameFD){
    buttonS2++;
    sounds[6].play();
    sounds[6].setVolume(1*soundVol*masterVol);
  }
  buttonS2 = buttonS2%4;
  if(buttonS2<0){
    buttonS2=3;
  }
  // print(buttonS2)
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
  
  if(buttonS2==0){
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(backer.x+backer.sizeX/2+50,backer.y);
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    text("<",0,0);
    pop();
    backer.sizev=max(0.05,backer.sizev);
    backer.hover = true;
   // print(2);
    if(contro.presses('a')){
      backer.clicked=true
    }
 }
  if(buttonS2==1){
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,masters.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    fill(255)
    text("<",0,0);
    pop();
    // masters.held=true
    // print(masters.hover)
    // masters.hover=true
    masters.sizev=max(0.07,masters.sizev);
    masters.hover = true;
    // masters.held=true
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        masters.x+=speedS;
        speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        masters.x+=speedS
      speedS-=4;
      }
  }
  if(buttonS2==2){
    // soundss.held=true
    soundss.sizev=max(0.07,soundss.sizev);
    soundss.hover = true;
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,soundss.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    text("<",0,0);
    
    pop();
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        soundss.x+=speedS
      speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        soundss.x+=speedS
      speedS-=4;
      }
    // soundss.held=true
  }
  if(buttonS2==3){
    // musics.held=true
    musics.sizev=max(0.07,musics.sizev);
    musics.hover = true;
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,musics.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    text("<",0,0);
    pop();
    // musics.held=true
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        musics.x+=speedS
      speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        musics.x+=speedS
      speedS-=4;
      }
  }
  
  // print(masters.size)
  masters.work();
  if(masters.held){
    // if(contro==false){
      masters.x = mouseX;
    // }else{
      // print("connected")
      
        
    // }
    
  }
  masters.x = max(550,masters.x);
    masters.x = min(900,masters.x);
    if(abs(masterVol-preMaster)>=0.03){
      sounds[6].play();
      sounds[6].setVolume(0.7*soundVol*masterVol);
      preMaster = masterVol;
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
    // if(contro==false){
      musics.x = mouseX;
    // }
    
    
  }
  musics.x = max(550,musics.x);
    musics.x = min(900,musics.x);
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
    // if(contro==false){
      soundss.x = mouseX;
    // }
    
    
  }
  soundss.x = max(550,soundss.x);
    soundss.x = min(900,soundss.x);
    if(abs(soundVol-preSound)>=0.03){
      sounds[7].play();
      sounds[7].setVolume(0.7*soundVol*masterVol);
      preSound = soundVol;
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
    backer.clicked = false;
    buttonS2 = 1;
    screen = 0;
    sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
  }
}

function screenThree2(){
  speedS = max(-7,min(speedS,7));
  speedS/=1.6;
  background(20);
  if(gameFU){
    buttonS2--;
    sounds[6].play();
    sounds[6].setVolume(1*soundVol*masterVol);
  }
  if(gameFD){
    buttonS2++;
    sounds[6].play();
    sounds[6].setVolume(1*soundVol*masterVol);
  }
  buttonS2 = buttonS2%4;
  if(buttonS2<0){
    buttonS2=3;
  }
  // print(buttonS2)
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
  
  if(buttonS2==0){
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(backer.x+backer.sizeX/2+50,backer.y);
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    fill(255)
    text("<",0,0);
    pop();
    backer.sizev=max(0.05,backer.sizev);
    backer.hover = true;
 //   print(2);
    if(contro.presses('a')){
      backer.clicked=true
    }
 }
  if(buttonS2==1){
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,masters.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    fill(255)
    text("<",0,0);
    pop();
    // masters.held=true
    // print(masters.hover)
    // masters.hover=true
    masters.sizev=max(0.07,masters.sizev);
    masters.hover = true;
    // masters.held=true
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        masters.x+=speedS
      speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        masters.x+=speedS
      speedS-=4;
      }
  }
  if(buttonS2==2){
    // soundss.held=true
    soundss.sizev=max(0.07,soundss.sizev);
    soundss.hover = true;
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,soundss.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    fill(255)
    text("<",0,0);
    pop();
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        soundss.x+=speedS
      speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        soundss.x+=speedS
      speedS-=4;
      }
    // soundss.held=true
  }
  if(buttonS2==3){
    // musics.held=true
    musics.sizev=max(0.07,musics.sizev);
    musics.hover = true;
    push();
    strokeWeight(2.5);
    stroke(255,200)
    translate(930,musics.y)
    textSize(35);
    textAlign(CENTER,CENTER);
    fill(255)
    text("<",0,0);
    pop();
    // musics.held=true
    if(contro.pressing('r')||contro.pressing('zr')||contro.leftStick.x>=0.7){
        // print("movingRight")
        musics.x+=speedS
      speedS+=4;
      }
    if(contro.pressing('l')||contro.pressing('zl')||contro.leftStick.x<=-0.7){
        // print("movingLeft")
        musics.x+=speedS
      speedS-=4;
      }
  }
  
  // print(masters.size)
  masters.work();
  if(masters.held){
    // if(contro==false){
      masters.x = mouseX;
    // }else{
      // print("connected")
      
        
    // }
    
  }
  masters.x = max(550,masters.x);
    masters.x = min(900,masters.x);
    if(abs(masterVol-preMaster)>=0.03){
      sounds[6].play();
      sounds[6].setVolume(0.7*soundVol*masterVol);
      preMaster = masterVol;
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
    // if(contro==false){
      musics.x = mouseX;
    // }
    
    
  }
  musics.x = max(550,musics.x);
    musics.x = min(900,musics.x);
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
  music[0].setVolume(0.8*musicVol*masterVol);
  pop();
  
  soundss.work();
  if(soundss.held){
    // if(contro==false){
      soundss.x = mouseX;
    // }
    
    
  }
  soundss.x = max(550,soundss.x);
    soundss.x = min(900,soundss.x);
    if(abs(soundVol-preSound)>=0.03){
      sounds[7].play();
      sounds[7].setVolume(0.7*soundVol*masterVol);
      preSound = soundVol;
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
    backer.clicked = false;
    screen = 1;
    overlay= false;
    sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
  }
}