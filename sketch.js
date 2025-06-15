
//To-Do
//Beyond Classes
var tester;
var playerSprite = [];
var sound;
let pixelFont;
var testEquip;
var music = [];
var portalSprite;
var gateSprite;

var lastLightning=0
var timer=9
var musicVol=0.8;
var soundVol=0.7;

//startX startY 
//start, middle, end,
var gatexSprite;
function preload(){
  userStartAudio()
  sounds[0] = loadSound('Sound_FX/jump.wav');
  sounds[1] = loadSound('Sound_FX/explosion.wav');
  sounds[2] = loadSound('Sound_FX/grav.wav');
  sounds[3] = loadSound('Sound_FX/hit.wav');
  sounds[4] = loadSound('Sound_FX/hit2.wav');
  sounds[5] = loadSound('Sound_FX/power.wav');
  sounds[6] = loadSound('Sound_FX/click.wav');
  sounds[7] = loadSound('Sound_FX/click2.wav');
  sheet = loadImage('game_assets/tiles1.png');
  pSheet = loadImage('game_assets/grimm.png');
  portalSprite = loadImage('game_assets/portal.png');
  gateSprite = loadImage('game_assets/door.png');
  gatexSprite = loadImage('game_assets/ex.png');
  //sound = loadSound('ShyGuy (1).mp3')// Make sure the path is correct
 // let url = 'https://drive.google.com/uc?id=17sSGoMwskMvRzk9sj1FiRv6qAx_4-7Uj&export=download';
 //tester = loadSound(url);
  //Musical+testtt2.wav
  //Game_Music2.wav
  music[0] = loadSound('game_assets/lofi.mp3');
  music[1] = loadSound('game_assets/Reduced_Cascade.mp3');
  music[2] = loadSound('game_assets/chicken.wav');
  music[3] = loadSound('game_assets/waver.wav');
  music[4] = loadSound('game_assets/wistful thinking.mp3')
  testEquip=loadImage("IMG_9192.jpeg")
}
var amp;
let speechRec;
let command = ""
let spaach = false;
//Void Setup
function setup() {
  createCanvas(1000,600)
  frameRate(60)
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  noSmooth();
  
  textFont('Pixelify Sans')
  
  //to create equiping button
  startEquip()
  
  anchor = createVector(null,null);
  ansize = createVector(0,0);
  cam = createVector(500,300);
  trucam = createVector(500,300);
  camv = createVector(0,0);
  mouser = createVector(0,0);
  mouserH = createVector(0,0);
  drift = createVector(0,0);
  buildLevel();
  
  let sizer = createVector(40,14);
  for(let i=0; i<sizer.x; i++){
    tileSprite[i]=[];
    for(let c=0; c<sizer.y; c++){
      tileSprite[i][c] = sheet.get(i*sheet.width/sizer.x,c*sheet.height/sizer.y,sheet.width/sizer.x,sheet.height/sizer.y);
    }
  }
  for(let i=0; i<sizer.x/2; i++){
    tileFull[i]=[];
    for(let c=0; c<sizer.y/2; c++){
      tileFull[i][c] = sheet.get(i*sheet.width/sizer.x*2,c*sheet.height/sizer.y*2,sheet.width/sizer.x*2,sheet.height/sizer.y*2);
    }
  }
  //sizer = undefined;
  sizer = createVector(4,4);
  for(let i=0; i<sizer.x; i++){
    playerSprite[i]=[];
    for(let c=0; c<sizer.y; c++){
      playerSprite[i][c] = pSheet.get(i*pSheet.width/sizer.x,c*pSheet.height/sizer.y,pSheet.width/sizer.x,pSheet.height/sizer.y);
    }
  }
 // world.gravity.y = 30;
  
//  player1.makeSprite();
  amp = new p5.Amplitude();
 music[4].loop();
  music[4].setVolume(0.8*musicVol*masterVol)
  player1.skinx = 0;
  player1.skiny = 0;
 // player1.skinx = floor(random(0,5))
 // player1.skiny = floor(random(0,1))
 // sound.loop();
  //bomb test stack TEST
   musics = new button(550+(musicVol)*350,450,20,40,1,0.2,1.2,1.3);
   masters = new button(550+(masterVol)*350,200,20,40,1,0.2,1.2,1.3);
 soundss = new button(550+(soundVol)*350,325,20,40,1,0.2,1.2,1.3);
}







//Global Variables
if("variables"=="variables"){
var cameray = 0;
var camerax = 0;
var width = 1000;
var height = 600;
//xaccel, drag, constantDrag, gravity, jumpStrength, MaxJumps, Xpos, Ypos, sizex, sizey, xvel(0), yvel(0), KeyMap, outline color
  //              xaccel -v codrag-v jump-v
var player1 = new player(4,1.3,2,0.5,9,1,500,300,21,28,0,0,["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","w","a","s","d"],"rgb(149,255,241)"); //    drag-^ grav -^.maxj-^

/*
//without presets
var player1 = new player(2.2,1.06,1.4,0.8,18,2,200,- 50,25,25,0,0,["w","a","s","d"],"rgb(149,255,241)");
var player2 = new player(2.2,1.06,1.4,0.8,18,2,width-200,-50,25,25,0,0,["up","left","down","right"],"rgb(251,253,169)");
  var player3 = new player(2.2,1.06,1.4,0.8,18,2,width/2,-50,25,25,0,0,["i","j","k","l"],"rgb(129,253,129)");
*/
//Xpos,Ypos,width,height
var blocks = [];
  //block particle
var blockP = [];
//turrent shoots
var bullets = [];
//bullet trail/particle
var bulletsP = [];
//If you are allowed to edit the level
var levelEdit =false;

//LevelEdit Modes
var editMode = "place";
var placeT = 1;
var particles = [];
var anchor;
var ansize;
var placing = false;
var cam;
var trucam;
var camv;
var mouser;
var playerEdit = false;
var selEdit = -1;
var nextRot = 0;
var nextRange = 5;
var nextDelay = 0;
var gate = false;
var lock = -1;
var zoom = 170;
var shake = 0;
var levelCode = levels[0];
var currentLevel = 0;
var fade = 0;
var titleFont;
var skipS = 1;
var skipSV = 0;
var bar = false;
var barS = 1;
var barSV = 0;
var bS = [1,1];
var bSV = [0,0];
var copyBlock;
var copied = false;
//sounds
var sounds = [];
var tileSprite = [];
var tileFull = [];
var sheet;
var pSheet
var fps = 60;
var boxes = [];
var mouserH;
var preFrame = [false];
var playersP = [];
var camP = true;
var drift;
var aver = 0;
var imageSize = 16;
var bombs = [];
var speecher = false;
var screen = 0;
var trans = 200;
var charge = 0;
}

var arrows=[]
// var sensors=[]

//Void Draw
var workingT = false; 
function draw() {
  if(currentLevel==7){
     screen = 2;
    music[4].loop()
    music[0].setVolume(0*musicVol*masterVol,1)
    music[4].setVolume(0.8*musicVol*masterVol,1.5)
    player1.finalTime=(floor((millis()-player1.startTime)/100)/10)+((((floor((millis()-player1.startTime)/100)/10)%1)==0)?".0":"")
    // music[0].stop()
    // next = 4;
    currentLevel = 0;
    levelCode = levels[0];
  }
  // print(player1.able)
  //print(player1.touched);
  //print(blocks[player1.personIndex].held);
  trans+=(255-trans)/50;
  //score
  //print("Your score is:"+player1.score)
  // print(player1.timers)
  noSmooth();
  if(screen == 1){
  //print(amp.getLevel())
  //imageSize = 15.5+(pow(amp.getLevel(),1.2))*10;
  if(camP){
    zoom+=(170-zoom)/13;
 // zoom = 120+(pow(amp.getLevel(),1.2))*50;
  }
  if(amp.getLevel()*50>=1){
  shake+=0.1;
}
  if(player1.skinx == 7){
    zoom = 70+(pow(amp.getLevel(),1.2))*50;
    player1.maxJumps = 5;
  }else{
    player1.maxJumps = 1;
  }
  kbTypePressing();
  shake/=1.5;
   // aver+=frameRate()*1;
  // if(keyIsDown(187)){
  //   player1.px=500;
  //   player1.py=300;
  //   player1.prex=500;
  //   player1.prey=300;
  // }
  background(120,180,176,trans);
  noCursor();
  push();
  pop()
  if(keyIsDown(80)){
    print(blocks.length,floor(frameRate()))
  //  saveGif('mySketch',20);
    let sum = 0;
    for(let i=0; i<blocks.length; i++){
  //    sum+=blocks[i].bsx/30+blocks[i].bsy/30;
    }
  //  print(sum)
  }
  resetMatrix();
 if(screen == 1){
   offUpV-=15;
   let speeder = 7.5;
   if(blocks.findIndex(hold => rectHit(hold.bx,hold.by,player1.px,player1.py,hold.bsx,hold.bsy,player1.psx,player1.psy)&&hold.type==11)==-1||keyIsDown(66)||camP){
  cam.add(-(cam.x-(player1.px))/speeder,-(cam.y-(player1.py))/speeder);
 }
  trucam = createVector(500-cam.x,300-cam.y);
  mouser=createVector((mouseX-500)/(zoom/100)-trucam.x+500,(mouseY-300)/(zoom/100)-trucam.y+300);
   if(abs(player1.xvel)+abs(player1.yvel)<=1&&!levelEdit){
     drift.x-=(noise((frameCount-1)/400,5)-0.5)*40;
     drift.y-=(noise((frameCount-1)/400,6)-0.5)*40;
     
     drift.x+=(noise(frameCount/400,5)-0.5)*40;
     drift.y+=(noise(frameCount/400,6)-0.5)*40;
   }else{
     drift.x/=1.1;
     drift.y/=1.1;
   }
   // translate(drift.x/5,drift.y/5)
   translate(drift.x/5,drift.y/5)
   translate(random(-shake,shake),random(-shake,shake))
  translate(500,300);
  scale(zoom/100,zoom/100);
  translate(-500,-300);
  translate(trucam);
  strokeWeight(5);
  stroke(255);
  noFill();
   
       // player1.personIndex = blocks.findIndex(hold=>hold.type==15);

   
  trueStart(255);
     for(let i=bombs.length-1; i>=0; i--){
    if(bombs[i].held){
    push();
    strokeWeight(5);
    stroke("#D5FFA5");
    line(bombs[i].px,bombs[i].py,player1.px,player1.py);
    pop();
    }
  }
  bulletShow();
  for(let i=0; i<boxes.length; i++){
    push();
      translate(boxes[i].x,boxes[i].y);
    noFill();
    stroke("#EFDFCC");
    rotate(boxes[i].rotation);
    rect(0,0,boxes[i].width,boxes[i].height,5);
    pop();
  }
  particlesDisplay();
  unload();
   tiles();
   players();
   bomber();
   levelEditor();
     tiles2();
   for(let i=playersP.length-1; i>=0; i--){
     playersP[i].display();
    if(!rectHit(-trucam.x+500,-trucam.y+300,playersP[i].x,playersP[i].y,1000*100/zoom,600*100/zoom,60,60)){
      playersP.splice(i,1);
    }
   }
    player1.skin();
      for(let i=0; i<blocks.length; i++){
    if(blocks[i].type==15){
      blocks[i].actions();
  }
  }
     if (kb.pressing("r")) {
    charge += 1;
  } else {
    charge /= 1.5;
  }
  if (charge >= 5) {
    push();
    strokeWeight(5);
    stroke(255, 0, 0, 155 + charge);
    fill(255, 100);
    arc(player1.px, player1.py, 50, 50, 0, (charge / 100) * 2 * PI);
    pop();
  }
  if (charge >= 100) {
    player1.changeLevel(currentLevel);
    charge = 0;
  }
    resetMatrix();
  if(levelEdit){
  if(keyIsDown(65)){
    zoom/=1.03;
  }
  if(keyIsDown(68)){
    zoom*=1.03;
  }
  if(keyIsDown(83)){
    zoom=100;
  }
  }
   
  }
    
  resetMatrix();
  stroke(255);
  noFill();
    
  if(levelEdit){
    translate(60,60);
    rotate(sin(frameCount/20)/10);
    fill(255,40);
    rect(0,0,70,70,20+sin(frameCount/100)*10);
    noFill();
    rotate(-sin(frameCount/20)/5);
    if(placeT==1){
      rect(0,0,30,30,5);
    }
    if(placeT==2){
      rect(0,0,30,15,5);
    }
    if(placeT==3){
      thinSpike(0,0,255);
    }
    if(placeT==4){
      thinCheck(0,10,30,255);
    }
    if(placeT==6){
      thinTurret(0,0,0,255);
    }
    if(placeT==7){
      thinPortal(0,0,255);
    }
    if(placeT==8){
      thinSign(0,0,255);
    }
    if(placeT==9){
      rect(random(-2,2),random(-2,2),30,30,5);
    }
    if(placeT==10){
      thinLaser(0,0,5,255);
    }
    if(placeT==11){
      thinCam(0,0,255);
    }
  }
 //music.setVolume(0.3+sin(frameCount/40)/20);
  interface();
}
  
  // resetMatrix();
  // translate(500,300);
  // scale(zoom/100,zoom/100);
  // translate(-500,-300);
  // translate(trucam);
  // mouser=createVector((mouseX-500)/(zoom/100)-trucam.x+500,(mouseY-300)/(zoom/100)-trucam.y+300);
  // mouseSkin();
  //MUSIC CONTROLERS!!!!!!!!!
  // music[currentSound].setVolume(vol);
  // if(next!=currentSound){
  //    vol-=0.007;
  // }else{
  //   vol+=0.01;
  // }
//  print(next,currentSound)
  // if(vol<=-0){
  //   //print(currentSound)
  //   for(let i=0; i<music.length; i++){
  //   music[i].stop();
  //   }
  //   currentSound=next;
  //   //print(currentSound)
  //   music[currentSound].loop();
  //  // print(currentSound)
  // }
  // if(currentSound==1){
  // //  maxVol = 0.3;
  // }else if(currentSound==0){
  //  //  maxVol = 0.2;
  // }
  // vol = min(vol,maxVol);
  // vol = max(vol,0);
  resetMatrix();
  // if(player1.startTime==null){
    // player1.startTime=millis();
  // }
  push();
  if(screen==1){
  textAlign(RIGHT);
  textSize(50);
  fill(255);
  stroke(0);
  strokeWeight(5)
  
  if(player1.startTime!=null){
    var strings=floor((millis()-player1.startTime)/100)/10
    text(strings+(((strings%1)==0)?".0":"")+"s",980,50)
  }
  // var strings = floor((millis()-player1.startTime)/100)/10;
  // text(strings+(((strings%1)==0)?".0":"")+"s",980,50);
  textAlign(CENTER);
  player1.scoreC += (player1.score-player1.scoreC)/30;
  textSize(70+((player1.score-player1.scoreC)/10));
  text(floor(player1.scoreC+0.5),500,60);
  pop();
   if(player1.killLine.stage==4){
      background(0,-abs((((player1.killLine.time-75)*255/50)-255))+255);
    if(player1.killLine.time==120){
  player1.changeLevel(blocks[player1.personIndex].delay)
      player1.score+=1000;
    }
   }
    if(player1.saveLine.stage==2){
      background(0,-abs((((player1.saveLine.time-75)*255/50)-255))+255);
    if(player1.saveLine.time==120){
  player1.changeLevel(blocks[player1.personIndex].delay)
      player1.score+=3000;
    }else{
      // zoom += (player1.saveLine.time*4-zoom)/10;
    }
   }
  }
  if(screen==2){
    menuB.work();
    //next = 4;
    background(20)
    textSize(60)
    textAlign(CENTER)
    fill(255)
    stroke(0)
    text("Congratulations!\nYour score was:\n"+player1.score+" points,\nand your time was:\n"+player1.finalTime+" seconds.",width/2,height/5-50)
    // text("Congratulations!\nYour score was:\n"+"21000"+" points,\nand your time was:\n"+"130.8"+" seconds.",width/2,height/5,)
    // print("done")
    
    //setting up music
    // music[0].stop()
   // frameRate(0)
    push();
    translate(menuB.x,menuB.y);
    scale(menuB.size,menuB.size);
    strokeWeight(7.5);
    noFill();
    stroke(255);
    rect(0,0,menuB.sizeX,menuB.sizeY);
    textAlign(CENTER,CENTER);
    textSize(95);
    strokeWeight(2);
    fill(255);
    text("MENU!",0,2.5)
    pop();
    sett.work();
    b.work();
    b.clicked = false;
    sett.clicked = false;
    if(menuB.clicked){
      screen = 0;
      sounds[7].play();
    sounds[7].setVolume(1*soundVol*masterVol);
    }
  }
  resetMatrix();
  if(screen == 0){
      //equipScreen()
     screenZero()
}
  if(screen == 3){
      //equipScreen()
     screenThree()
}
    resetMatrix();
  translate(500,300);
  scale(zoom/100,zoom/100);
  translate(-500,-300);
  translate(trucam);
  mouser=createVector((mouseX-500)/(zoom/100)-trucam.x+500,(mouseY-300)/(zoom/100)-trucam.y+300);
  mouseSkin();
}
var menuB = new button(500,500,300,120,1,1.2,1.2,1.2);
var vol = 0.4;
var currentSound = 4;
var next = 4;
var maxVol = 0.4;
var svol = 0.5;
//P1 and P2 Players
function players(){
  player1.timer();
  player1.actions();
  for(var i=0;i<arrows.length;i++){
    arrows[i].move()
    arrows[i].collide()
    arrows[i].display()
     arrows[i].ability()
  }
}
//Tilemap Usage
function tiles(){
  for(let i=0; i<blocks.length; i++){
    if(blocks[i].type!=15){
      blocks[i].actions();
  }
  }
}