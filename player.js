class playerP{
  constructor(a,b,c,d,e,f){
    this.x = a;
    this.y = b;
    this.xvel = c;
    this.yvel = d;
    if(abs(this.xvel)<=0.5){
      this.xvel=(floor(random(0,2))*2-1)*random(3,4);
    }
    this.type = e;
    this.typey = f;
    this.roll = 0;
  }
  display(){
    this.x+=this.xvel*1.1;
    this.y+=this.yvel;
    this.yvel+=0.7;
    this.xvel/=1.01;
    this.roll+=abs(this.xvel/60);
    push();
    translate(this.x,this.y)
    scale(this.xvel/abs(this.xvel),1);
    rotate(this.roll)
    image(playerSprite[player1.skinx][player1.skiny],0,0,60,60);
    pop();
  }
}
//Player Class
class player{   
  constructor(a,b,c,c2,d,e,f,g,h,i,j,k,l,m){
    //Effected variables
    this.xacc = a;
    this.ogXACC=a
    this.drag = b;
    //Constant drag instead of dividing
    this.constdrag = c
    this.gravity = c2;
    this.tgravity = c2;
    this.jumpSt = d;
    this.ogJump=d
    this.jumps = 0;
    this.maxJumps = e;
    //Position
    this.px = f;
    this.py = g;
    //Checkpoint x and y positions
    this.checkx = f;
    this.checky = g;
    //True Starting position
    this.startx = f;
    this.starty = g;
    //Previous, nessasary for platform collision/slide
    this.prex = f
    this.prey = g
    //size
    this.psx = h;
    this.psy = i;
    //Velocity
    this.xvel = j;
    this.yvel = k;
    //Key inputsf
    this.keyIn = [];
    this.keyO = l;
    for(let i=0; i<this.keyO.length; i++) this.keyIn[this.keyIn.length] = this.keyO[i];
    this.jumpDown = false;
    //Optional for Player skinx Example
    this.coreTick = 0;
    this.outline = m;
    //Can Collide Or Not
    this.collide = true;
    this.rot = 0;
    this.corex = f;
    this.corey = g;
    this.corexv = 0;
    this.coreyv = 0;
    this.coreOut = false;
    this.corext = f;
    this.coreyt = g;
    this.coreLock = false;
    this.direction = 1;
    this.playerCol;
    this.roll = 0;
    this.roller = 0;
    this.rollerv = 0;
    this.showable = true;
    this.skinx = 0;
    this.skiny = 0;
    this.crouch = 0;
    this.crouchv = 0;
    this.terminalVelocity=35;
    this.size = 1;
    this.ps = 1;
    /*
    
    */
    //list of abilities
    /*
    1. Bomb
    2. Anti-Grav
    3. Teleport
    */
    this.abil = [1,2,3];
    this.able=true
    this.holding=false
    this.touched=false
    // this.personIndex;
    this.permaX;
    this.permaY;
    //slot of abilities you are on, 0, 1, 2
    this.slot = 0;
    this.light;
    this.inDark = false;
    //Effect timers
    this.timers=[0,0,0]
    this.sx = f;
    this.sy = g;
    this.sr = 0;
    this.ss=1;
    //Score keepings
    this.score=0
    this.scoreC = 0;
    // this.time=0
    // this.time=0\
    this.startTime=null;
    this.gravLine = new timeLine(3232,[16,3,1]);
    this.killLine = new timeLine(3232,[45,6,1,15,100]);
    this.saveLine = new timeLine(3232,[10,67,100]) //
    this.personIndex = 0;
  }
  timer(){
    for(var i=0;i<this.abil.length;i++){
      if(this.timers[i]>=0){
        
        if(this.abil[i]==6){
          if(this.timers[i]==0){
            this.jumpSt=this.ogJump
          }else{
            //fill("hsl(186,95%,84%)
            this.jumpSt=this.ogJump*1.3
            let rate = floor(2+(180-this.timers[i])/60);
            if(frameCount%rate==0){ 
           for(var u = 0; u<floor(random(1,3)); u++){
        let rando = floor(random(150,200))
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,3),"hsl("+rando+",95%,83%)");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
            }
      if(frameCount%rate*2==0){
        let rando = floor(random(150,200))
        for(var u = 0; u<1; u++){
          let ang = random(0,360)
          bulletsP[bulletsP.length] = new bulletP(this.px+sin(ang*PI/180)*15,this.py,this.px-sin(ang*PI/180)*5,this.py-random(40,80),random(2,10),"hsl("+rando+",95%,84%)");
              //fill("#f48d8a")
      //fill("#c4398b")
        }
      }
          }
        }
        if(this.abil[i]==8){
          if(this.timers[i]==0){
            this.xacc=this.ogXACC
          }else{
            this.xacc=this.ogXACC*1.15
            //part
          //  fill("hsl(15,100%,66%)
            let rate = floor(2+(180-this.timers[i])/60);
            if(frameCount%rate==0){ 
           for(var u = 0; u<floor(random(1,3)); u++){
        let rando = floor(random(10,50))
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,3),"hsl("+rando+",98%,67%)");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
            }
      if(frameCount%rate*2==0){
        let rando = floor(random(0,40))
        for(var u = 0; u<1; u++){
          let ang = random(0,360)
          bulletsP[bulletsP.length] = new bulletP(this.px+sin(ang*PI/180)*15,this.py,this.px-sin(ang*PI/180)*5,this.py-random(40,80),random(2,10),"hsl("+rando+",100%,66%)");
              //fill("#f48d8a")
      //fill("#c4398b")
        }
      }
          }
          
        }
        this.timers[i]-=1
      }
      
    }
  }
  actions(){
    // print(this.touched)
    if(this.holding==true){
      this.able=false
    }
    this.size/=1.5;
    if(playerEdit == false){
      if(levelEdit==true){
        this.keyIn[4] = "p";
        this.keyIn[5] = "p";
        this.keyIn[6] = "p";
        this.keyIn[7] = "p";
        //print(this.keyIn)
      }else{
        for(let i=0; i<this.keyIn.length; i++) this.keyIn[i] = this.keyO[i];
      }
    //Previous must be set at top to insure it is the previous when used in collision
    this.prex = this.px;
    this.prey = this.py;
      
      if(!keyIsDown(16)){
    //Movement Inputs
    if(kb.pressing(this.keyIn[3])||kb.pressing(this.keyIn[7])){
      this.xvel+=this.xacc;
      if(player1.startTime==null){
    player1.startTime=millis()
  }
    }
    if(kb.pressing(this.keyIn[1])||kb.pressing(this.keyIn[5])){
      this.xvel-=this.xacc;
      if(player1.startTime==null){
    player1.startTime=millis()
  }
      
    }
    if((kb.pressing(this.keyIn[0])||kb.pressing(this.keyIn[4])||kb.pressing(" "))&&(this.jumpDown||this.jumps==this.maxJumps)&&this.jumps>0 && blocks.findIndex(hold => hold.type==13&&rectHit(hold.bx,hold.by,this.px,this.py,hold.bsx,hold.bsy,this.psx,this.psy))==-1){
      if(player1.startTime==null){
    player1.startTime=millis()
  }
       sounds[0].play(); 
       sounds[0].setVolume(random(0.2,0.3))
      sounds[0].rate(random(0.9,1.0));
      this.yvel=-this.jumpSt;
      this.jumpDown = false;
      this.jumps--;
      for(var u = 0; u<3; u++){
            bulletsP[bulletsP.length] = new bulletP(this.px+random(-10,10),this.py-12,this.px+cos(random(-180,0)*PI/180)*10-this.xvel*2,this.py+12+sin(random(-180,0)*PI/180)*10,random(3,9),"4");
           }
    }
    if(kb.pressing(this.keyIn[0])!=true&&kb.pressing(this.keyIn[4])!=true&&kb.pressing(" ")!=true){
      // if(blocks.findIndex(hold => hold.type==13&&rectHit(hold.bx,hold.by,this.px,this.py,hold.bsx,hold.bsy,this.psx,this.psy))==-1){
        this.jumpDown=true;
      // }
      
    }
        if(!levelEdit){
           
           }
      }
    if(keyIsDown(78)&&levelEdit){
      this.collide = false;
    }else{
      this.collide = true;
    }
    //Modify Cords
    this.xvel/=this.drag;
    let direction = this.xvel/abs(this.xvel)
    if(abs(this.xvel)-abs(this.constdrag)<0){
      this.xvel=0
    }else{
      this.xvel-=direction*this.constdrag   
    }
    this.yvel+=this.gravity;
    
    //Add Cords
    this.px+=this.xvel;
    this.py+=this.yvel;
    //This.collide checks if you can collide with objects, this prevents a few clips(unintentional phasing through blocks)
    if(this.collide){
      this.player_move_and_slide();
    }
      this.death_collide();
    //Technically only used for one frame so it is reset after
    this.collide = true;
    
    //skinx, Core
    this.coreTick+=((this.xvel))*1.5;
    this.coreTick=this.coreTick%360;
    }else if(!keyIsDown(16)){
      
      if(kb.pressing(this.keyIn[3])){
      this.xvel+=this.xacc;
      }
      if(kb.pressing(this.keyIn[1])){
        this.xvel-=this.xacc;
      }
      if(kb.pressing(this.keyIn[0])){
      this.yvel-=this.xacc;
      }
      if(kb.pressing(this.keyIn[2])){
        this.yvel+=this.xacc;
      }
      this.xvel/=this.drag;
      this.yvel/=this.drag;
      let direction = this.xvel/abs(this.xvel)
      if(abs(this.xvel)-abs(this.constdrag)<0){
        this.xvel=0
      }else{
        this.xvel-=direction*this.constdrag   
      }
      direction = this.yvel/abs(this.yvel)
      if(abs(this.yvel)-abs(this.constdrag)<0){
        this.yvel=0
      }else{
        this.yvel-=direction*this.constdrag   
      }
      //Add Cords
    this.px+=this.xvel;
    this.py+=this.yvel;
      
    }
    if(frameCount%6==0&&abs(this.yvel)+abs(this.xvel)>1){
      let fast = random(2,3)
       bulletsP[bulletsP.length] = new bulletP(this.px,this.py+15,this.px-this.xvel,this.py-this.yvel,fast,"4");
    }
   // playersP[playersP.length] = new playerP(this.px,this.py,this.direction*random(1,2),-random(1,2),this.skinx);
    for(var i=0; i<blocks.length; i++){
      if(blocks[i].type == 12&&!blocks[i].broken){
        if(rectHit(this.px,this.py,blocks[i].bx,blocks[i].by,this.psx,this.psy,blocks[i].bsx,blocks[i].bsy)){
          blocks[i].broken = true;
           this.yvel=-this.jumpSt;
          this.jumps = 0;
          sounds[0].play(); 
       sounds[0].setVolume(random(0.13,0.3))
          sounds[0].rate(random(1.3,1.5));
      for(var u = 0; u<3; u++){
            bulletsP[bulletsP.length] = new bulletP(this.px+random(-10,10),this.py-12,this.px+cos(random(-180,0)*PI/180)*10-this.xvel*2,this.py+12+sin(random(-180,0)*PI/180)*10,random(7,15));
      }
          for(var u = 0; u<10; u++){
        bulletsP[bulletsP.length] = new bulletP(blocks[i].bx,blocks[i].by,blocks[i].bx+cos(random(-360,0)*PI/180)*10,blocks[i].by+sin(random(-360,0)*PI/180)*10,random(1,16),"#f48d8a");
            //fill("#f48d8a")
    //fill("#c4398b")
           }
          for(var u = 0; u<10; u++){
        bulletsP[bulletsP.length] = new bulletP(blocks[i].bx,blocks[i].by,blocks[i].bx+cos(random(-360,0)*PI/180)*10,blocks[i].by+sin(random(-360,0)*PI/180)*10,random(1,16),"#c4398b");
            //fill("#f48d8a")
    //fill("#c4398b")
           }
        }
      }
      }
    //anti-grav
    var index=blocks.findIndex(hold => hold.type==13&&rectHit(hold.bx,hold.by,this.px,this.py,hold.bsx,hold.bsy,this.psx,this.psy))
   
    if(index==-1){
        this.gravity=this.tgravity
    }else{
      // if(!(keyIsDown(this.keyO[6])||keyIsDown(this.keyO[2]))){
        this.gravity=-this.tgravity
      // }else{
      //   this.gravity=this.tgravity/3
      // }
    }
  }
  skin(){
    // print(this.saveLine.stage)
    this.gravLine.work();
    this.killLine.work();
    this.saveLine.work()
    if(this.showable){
      if(this.light==undefined){
        let lights = {range:200,dark:120,light:30}
      this.light = createGraphics(2000,2000);
      this.light.fill(255,lights.light/10);
      this.light.noStroke();
        this.light.filter(BLUR,10);
      for(let i=0; i<lights.range/10; i++){
        this.light.ellipse(1000,1000,lights.range-i*10,lights.range-i*10);
      }
       this.light.stroke(0,lights.dark/10);
      this.light.noFill();
      for(let i=2; i<100-lights.range/10; i++){
        this.light.strokeWeight(i*5);
        this.light.ellipse(1000,1000,lights.range+i*10,lights.range+i*10);
      }
        this.light.filter(BLUR,30);
      }
      if(this.inDark){
      push();
      translate(this.px,this.py);
      image(this.light,0,0,2000+random(-10,10),2000+random(-10,10))
      pop();
    }
      if(0==0){
    push();
    noStroke();
  //  fill();
      fill(255)
   // rect(this.px,this.py,this.psx,this.psy,6);
    if(((this.xvel/abs(this.xvel)))!=0&&!isNaN(((this.xvel/abs(this.xvel))))){
      this.direction = this.xvel/abs(this.xvel);
    }
    translate(this.px,this.py+this.psy/2-15)
    this.roll+=abs(this.xvel)/20;
    if(this.xvel<=2){
      this.roll-=0.05;
       }
    this.roller+=abs(this.xvel)/20;
    translate(0,15);
    scale(1,-this.crouch+1)
    translate(0,-15);
      this.ps+=(this.direction-this.ps)/5;
    scale(this.ps-this.direction*max(this.yvel/50,-0.1),1+max(this.yvel/30,-0.1));
     // print(this.direction-this.direction*max(this.yv\el/50,-0.1),1+max(this.yvel/30,-0.1))
    translate(0,15);
    rotate(sin(PI/2+this.roll)/20);
    this.roller = this.roller%(2*PI);
    this.rollerv += 0.05;
    this.roller -= this.rollerv;
    this.roller = max(0,this.roller)
      if(this.roller<=0){
        this.rollerv = 0;
      }
      
    translate(0,-15-(1+sin(3*PI/2+this.roller))*20);
   //   print(this.skinx,this.skiny)
      scale(1+this.size,1+this.size);
    image(playerSprite[this.skinx][this.skiny],0,-15,60,60);
    pop();
      }
     // print(this.killLine.stage)
      if(this.killLine.stage==4||this.killLine.stage==5){
      if(0==0&&this.gravLine.stage==3){
      let finder =bombs.findIndex(hold => hold.type == 1||hold.type == 3);
      if(finder==-1){
        this.sx += ((this.px-this.direction*30)-this.sx)/6;
        this.sy += ((this.py-30)-this.sy+sin(frameCount/30)*4)/6;
        this.sr=sin(frameCount/28)/2-0.5;
        this.ss += (this.direction-this.ss)/10;
        if(frameCount%5==0&&((abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6))+abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6)))>=1||abs(this.xvel)>=1)){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,-(((this.px-this.direction*30)-this.sx)/6),-(((this.py-30)-this.sy+sin(frameCount/30)*4)/6),random(0,1),"5");
          bulletsP[bulletsP.length-1].size=random(6,9);
      }
     }else{
       this.sx += ((bombs[finder].px)-this.sx)/1.5;
        this.sy += ((bombs[finder].py)-this.sy)/1.5;
       this.sr+=30*PI/180;
       this.ss = ((bombs[finder].xvel)/abs(bombs[finder].xvel));
       if(frameCount%2==0&&(abs(((bombs[finder].px)-this.sx)/1.5)+abs(((bombs[finder].py)-this.sy)/1.5)>=1)){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,-((((bombs[finder].px)-this.sx)/1.5)),-(((bombs[finder].py)-this.sy)/1.5),random(3,5),"5");
          bulletsP[bulletsP.length-1].size=random(6,9);
      }
       if(bombs.findIndex(hold => hold.type == 3)!=-1){
          bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,this.sx+cos(random(0,2*PI)),this.sy+sin(random(0,2*PI)),random(3,6),"9");
      }
     }
    }
      if(0==0){
        let state = this.gravLine.stage;
        if(state == 0){
          this.ss=this.ss/abs(this.ss);
          this.sx += ((this.px)-this.sx)/10.5;
          this.sy += ((this.py-90-this.gravLine.time*1)-this.sy)/10.5;
          this.sr+=40*PI/180;
          for(let i = 0; i<1; i++){
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+cos(random(0,2*PI)),this.sy+sin(random(0,2*PI)),random(1,7),"2");
          }
          shake=3;
          zoom += (300-zoom)/10;
        } 
        if(state == 1){
          this.ss=this.ss/abs(this.ss);
          this.sx += ((this.px)-this.sx)/1.5;
          this.sy += ((this.py+10)-this.sy)/1.5;
          this.sr+=40*PI/180;
        } 
        
        if(state == 2){
          this.ss=this.ss/abs(this.ss);
          for(let i = 0; i<10; i++){
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx-random(10,20),this.sy-random(-1,5),random(1,17),"1");
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx-random(10,20),this.sy-random(-1,5),random(1,17),"2");
          }
          for(let i = 0; i<10; i++){
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+random(10,20),this.sy-random(-1,5),random(1,17),"1");
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+random(10,20),this.sy-random(-1,5),random(1,17),"2");
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+random(-20,20),this.sy-random(-1,5),random(1,50),"5");
          }
          for(let i = 0; i<40; i++){
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+random(-20,20),this.sy-random(10,50),random(1,17),"3");
            bulletsP[bulletsP.length] =new bulletP(this.sx,this.sy,this.sx+random(-20,20),this.sy-random(10,50),random(1,30),"5");
          }
          shake=50;
          bombs[bombs.length] = new bomb(this.sx,this.sy,0,0,2,15,15,1);
        }
      }
      }else{
      if(this.killLine.stage==0){
        zoom += (300-zoom)/10;
        this.sx += (blocks[this.personIndex].bx-95*this.direction-this.killLine.time*2*this.direction-this.sx)/6;
        this.sy += (blocks[this.personIndex].by-45-this.killLine.time*1-this.sy)/6;
        this.sr+=0.8;
        this.ss += (this.direction-this.ss)/10;
        if(frameCount%5==0&&((abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6))+abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6)))>=1||abs(this.xvel)>=1)){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,-(((this.px-this.direction*30)-this.sx)/6),-(((this.py-30)-this.sy+sin(frameCount/30)*4)/6),random(0,1),"5");
          bulletsP[bulletsP.length-1].size=random(6,9);
      }
        shake = 20;
    }
      if(this.killLine.stage==1){
        zoom += (300-zoom)/10;
        this.sx += (blocks[this.personIndex].bx+80*this.direction-this.sx)/6;
        this.sy += (blocks[this.personIndex].by+40-this.sy)/6;
        this.sr+=0.8;
        this.ss += (this.direction-this.ss)/10;
        if(frameCount%5==0&&((abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6))+abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6)))>=1||abs(this.xvel)>=1)){
          for(let i=0; i<3; i++){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,-(((this.px-this.direction*30)-this.sx)/6),-(((this.py-30)-this.sy+sin(frameCount/30)*4)/6),random(0,1),"5");
          bulletsP[bulletsP.length-1].size=random(6,9);
          }
      }
    }
      if(this.killLine.stage==2){
        // blocks.splice(this.personIndex,1);
          shake=120;
          for(let i=0; i<60; i++){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,this.sx+cos(random(0,2*PI)),this.sy+sin(random(0,2*PI)),random(1,70),"10");
          //bulletsP[bulletsP.length-1].size=random(6,9);
          }
         for(let i=0; i<30; i++){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,this.sx+cos(random(0,2*PI)),this.sy+sin(random(0,2*PI)),random(1,30),"2");
          //bulletsP[bulletsP.length-1].size=random(6,9);
          }
        for(let i=0; i<90; i++){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,this.sx+cos(random(0,2*PI)),this.sy+sin(random(0,2*PI)),random(1,30),"11");
          //bulletsP[bulletsP.length-1].size=random(6,9);
          }
    }
      if(this.killLine.stage==3){
      //  zoom += (300-zoom)/10;
        this.sx += (blocks[this.personIndex].bx+80*this.direction-this.sx)/6;
        this.sy += (blocks[this.personIndex].by+40-this.sy)/6;
        this.sr+=0.8;
        this.ss += (this.direction-this.ss)/10;
        if(frameCount%5==0&&((abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6))+abs((((this.py-30)-this.sy+sin(frameCount/30)*4)/6)))>=1||abs(this.xvel)>=1)){
          for(let i=0; i<3; i++){
        bulletsP[bulletsP.length] = new bulletP(this.sx,this.sy,-(((this.px-this.direction*30)-this.sx)/6),-(((this.py-30)-this.sy+sin(frameCount/30)*4)/6),random(0,1),"5");
          bulletsP[bulletsP.length-1].size=random(6,9);
          }
      }
    }
      if(this.killLine.stage==4){
        
      }
    }
      push();
      translate(this.sx,this.sy);
      scale(this.ss,1);
      rotate(this.sr);
      image(playerSprite[1][0],0,0,60,60);
      pop();
    fill(255,0,255,100);
      noStroke();
      if(kb.pressing('-')){
        rect(this.px,this.py,this.psx,this.psy)
      }
    this.useChecks();
  }
    push()
   stroke("rgb(122, 13, 168)")
  strokeWeight(8)
  // if(millis() % 10 == 0){
    // lightning(200,400,10,10)
  // }
  // if(timer==9){
  //   lastLightning=createLightning(600,370,10,10)
  //   timer=0
  // }else{
  //   oldLightning(lastLightning)
  // }
  // // filter(pixelateShader)
  // timer+=1
   pop()
  }
  take(){
    let close = -1;
    for(let i=0; i<bombs.length; i++){
      if(close == -1){
        close = i;
      }
      if(dist(this.px,this.py,bombs[i].px,bombs[i].py)<dist(this.px,this.py,bombs[close].px,bombs[close].py)){
      close = i;
      }
  }
    if(close!=-1&&bombs.findIndex(hold => hold.held == true)==-1){
      if(dist(this.px,this.py,bombs[close].px,bombs[close].py)<60){
        // print("worked")
         bombs[close].held=true;
      }
    }
    
  }
  restarter(){
     this.checkx = this.startx;
      this.checky = this.starty;
      this.respawn();
      let build = "";
       for(let i=0; i<blocks.length; i++){  
         build+=buildChange(blocks[i].bx)+buildChange(blocks[i].by)+buildChange(blocks[i].bsx)+buildChange(blocks[i].bsy)+buildChange(blocks[i].type)+buildChange(blocks[i].rotation)+buildChange(blocks[i].delay)+buildChange(blocks[i].range)+"C";
        
       }
      levelCode=build;
      buildLevel();
  }
  //COLLIDE
  player_move_and_slide(){
    //Interaction with blocks(array of class block)
    //A system taking the possible new x and y positions, but only choosing the closest one, or right one.
    //Left X
    let newx = [];
    let newy = [];
    let newxv = [];
    let newyv = [];
    let newj = [];
    for(var i=0; i<blocks.length; i++){
      if(blocks[i].fullCollide == true){
        if(blocks[i].collideWith == true){
      let bl = blocks[i];
      if(
        ((this.prex+this.psx/2)<=(bl.bx-bl.bsx/2)&&
        (this.px+this.psx/2)>=(bl.bx-bl.bsx/2)||
        (this.prex+this.psx/2)<=(bl.prebx-bl.bsx/2)&&
        (this.px+this.psx/2)>=(bl.bx-bl.bsx/2))&&
        (this.prey+this.psy/2)>(bl.by-bl.bsy/2)&&
        (this.prey-this.psy/2)<(bl.by+bl.bsy/2)
        ){
         newy[newy.length] = this.py
         newx[newx.length] = bl.bx-bl.bsx/2-this.psx/2
         newyv[newyv.length] = this.yvel
         newxv[newxv.length] = 0
         newj[newj.length] = false
      }
        }
      }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.prex,this.prey)<dis(newx[short],newy[short],this.prex,this.prey)){
           short = c
           }
      }
      this.px = newx[short]
      this.py = newy[short]
      this.xvel = newxv[short]
      this.yvel = newyv[short]
      if(newj[short]){
        this.jumps = this.maxJumps
      }
    }
    //Right X
    newx = [];
    newy = [];
    newxv = [];
    newyv = [];
    newj = [];
    for(var i=0; i<blocks.length; i++){
      if(blocks[i].fullCollide == true){
        if(blocks[i].collideWith == true){
      let bl = blocks[i];
      if(
        ((this.prex-this.psx/2)>=(bl.bx+bl.bsx/2)&&
        (this.px-this.psx/2)<=(bl.bx+bl.bsx/2)||
        (this.prex-this.psx/2)>=(bl.prebx+bl.bsx/2)&&
        (this.px-this.psx/2)<=(bl.bx+bl.bsx/2))&&
        (this.prey+this.psy/2)>(bl.by-bl.bsy/2)&&
        (this.prey-this.psy/2)<(bl.by+bl.bsy/2)
        ){
         newy[newy.length] = this.py
         newx[newx.length] = bl.bx+bl.bsx/2+this.psx/2
         newyv[newyv.length] = this.yvel
         newxv[newxv.length] = 0
         newj[newj.length] = false
      }
      }
    }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.prex,this.prey)<dis(newx[short],newy[short],this.prex,this.prey)){
           short = c
           }
      }
      this.px = newx[short]
      this.py = newy[short]
      this.xvel = newxv[short]
      this.yvel = newyv[short]
      if(newj[short]){
        this.jumps = this.maxJumps
      }
    }
    //Upper Y
    newx = [];
     newy = [];
    newxv = [];
    newyv = [];
  newj = [];
    for(var i=0; i<blocks.length; i++){
      if(blocks[i].collideWith == true&&!(blocks[i].type==2&&(kb.pressing(this.keyIn[2])||kb.pressing(this.keyIn[6])))){
        let bl = blocks[i];
      if(
        ((this.prey+this.psy/2)<=(bl.by-bl.bsy/2)&&
        (this.py+this.psy/2)>=(bl.by-bl.bsy/2)||
        (this.prey+this.psy/2)<=(bl.preby-bl.bsy/2)&&
        (this.py+this.psy/2)>=(bl.by-bl.bsy/2))&&
        (this.px+this.psx/2)>(bl.bx-bl.bsx/2)&&
        (this.px-this.psx/2)<(bl.bx+bl.bsx/2)
        ){
         newx[newx.length] = this.px
         newy[newy.length] = bl.by-bl.bsy/2-this.psy/2
         newxv[newxv.length] = this.xvel
         newyv[newyv.length] = 0
         newj[newj.length] = true
        blocks[i].broken = true;
      }
    }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.prex,this.prey)<dis(newx[short],newy[short],this.prex,this.prey)){
           short = c
           }
      }
      if(newj[short]){
        this.jumps = this.maxJumps
      }
                      this.px = newx[short]
      this.py = newy[short]
        if(this.yvel>=5){
           for(var u = 0; u<3; u++){
            bulletsP[bulletsP.length] = new bulletP(this.px+random(-5,5),this.py+12,this.px+cos(random(-180,0)*PI/180)*10-this.xvel*2,this.py+12+sin(random(-180,0)*PI/180)*10,random(1,4),"4");
           }
           }
        if(abs(this.xvel)+abs(this.yvel)>=2&&frameCount%floor(random(3,8))==0){
        for(var u = 0; u<1; u++){
          bulletsP[bulletsP.length] = new bulletP(this.px+random(-5,5),this.py+12,this.px-this.xvel,this.py-random(-2,3),random(1,5),"4");
      }
      }
      this.xvel = newxv[short]
      this.yvel = newyv[short]
    }
     newx = [];
     newy = [];
    newxv = [];
    newyv = [];
  newj = [];
    //Lower Y
    for(var i=0; i<blocks.length; i++){
      if(blocks[i].fullCollide == true){
        if(blocks[i].collideWith == true){
      let bl = blocks[i];
      if(
        ((this.prey-this.psy/2)>=(bl.by+bl.bsy/2)&&
        (this.py-this.psy/2)<=(bl.by+bl.bsy/2)||
        (this.prey-this.psy/2)>=(bl.preby+bl.bsy/2)&&
        (this.py-this.psy/2)<=(bl.by+bl.bsy/2))&&
        (this.px+this.psx/2)>(bl.bx-bl.bsx/2)&&
        (this.px-this.psx/2)<(bl.bx+bl.bsx/2)
        ){
         newx[newx.length] = this.px
         newy[newy.length] = bl.by+bl.bsy/2+this.psy/2
         newxv[newxv.length] = this.xvel
         newyv[newyv.length] = 0
         newj[newj.length] = false
      }
    }
    } 
    }
   if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.prex,this.prey)<dis(newx[short],newy[short],this.prex,this.prey)){
           short = c
           }
      }
      this.px = newx[short]
      this.py = newy[short]
      this.xvel = newxv[short]
      this.yvel = newyv[short]
      if(newj[short]){
        this.jumps = this.maxJumps
      }
    }
    //Set to shortest distance
    this.yvel=min(this.yvel,this.terminalVelocity)
  }  
  death_collide(){
    if(this.py-this.psy/2>height+1200){
      this.respawn();
    }
    for(var i=0; i<blocks.length; i++){
      if(this.collide){
        if(blocks[i].type == 3){
          for(let c = 0; c<blocks[i].bsx/30; c++){
            for(let u = 0; u<blocks[i].bsy/30; u++){
              //collision display
              
              push();
             //   rect(blocks[i].bx-blocks[i].bsx/2+15+c*30-7.5,blocks[i].by-blocks[i].bsy/2+15+u*30,15,20);
              pop();
            //  rect(this.px,this.py,this.psx,this.psy);
              
            //0 deg
            if(blocks[i].rotation%360==0){
              if(rectHit(this.px,this.py,blocks[i].bx-blocks[i].bsx/2+15+c*30,blocks[i].by-blocks[i].bsy/2+15+u*30+7.5,this.psx,this.psy,24,13)){
                this.respawn();
              }
            }
            //90 deg
              if(blocks[i].rotation%360==90){
              if(rectHit(this.px,this.py,blocks[i].bx-blocks[i].bsx/2+15+c*30-7.5,blocks[i].by-blocks[i].bsy/2+15+u*30,this.psx,this.psy,13,24)){
                this.respawn();
              }
            }
              //180 deg
              if(blocks[i].rotation%360==180){
              if(rectHit(this.px,this.py,blocks[i].bx-blocks[i].bsx/2+15+c*30,blocks[i].by-blocks[i].bsy/2+15+u*30-7.5,this.psx,this.psy,24,13)){
                this.respawn();
              }
            }
              //270 deg
              if(blocks[i].rotation%360==270){
              if(rectHit(this.px,this.py,blocks[i].bx-blocks[i].bsx/2+15+c*30+7.5,blocks[i].by-blocks[i].bsy/2+15+u*30,this.psx,this.psy,13,24)){
                this.respawn();
                }
              }
            }
          }
        }
      }
    }
    for(var i = 0; i<bullets.length; i++){
      if(dis(bullets[i].prox,bullets[i].proy,player1.px,player1.py)<=20){
        this.respawn();
      }
    }
  }
  respawn(){
   shake=100;
    playersP[playersP.length] = new playerP(this.px,this.py,this.direction*random(3,7),-random(4,6),this.skinx,this.skiny);
    for(let i=0; i<40; i++){
    let angle = random(0,2*PI);
    let fast = random(5,20);
    bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(angle)*50,this.py+sin(angle)*50,fast,"4");
    }
    /*
    this.skinx = floor(random(0,15))
  this.skiny = floor(player1.skinx/5);
   this.skinx = floor(random(0,15))
   */
    if(playerEdit){
      this.collide = false
      
    }
    if(this.collide==true&&!playerEdit){
    this.xvel = 0
      this.yvel = 0
      this.px = this.checkx
      this.py = this.checky
      this.collide = false
    for(var c=0; c<20; c++){
          let angle = random(0,2*PI);
          let fast = random(3,6);
          
          bulletsP[bulletsP.length] = new bulletP(this.checkx,this.checky,this.checkx+cos(angle)*50,this.checky+sin(angle)*50,fast,"4");
      
        }
      fps=2;
      this.corex = this.px;
      this.corey = this.py;
      this.corexv += (this.corext-this.corex)/1;
      this.coreyv += (this.coreyt-this.corey)/1;
      this.coreLock=true;
  }
    for(let i=0; i<blocks.length; i++){
      if(blocks[i].type==8||blocks[i].type>=12){
        blocks[i].life=-2000;
    }
    }
  }
  useChecks(){
    if(this.touched==false){
      for(var i=0; i<blocks.length; i++){
      if(blocks[i].type==4){
      if(rectHit(this.px,this.py,blocks[i].bx,blocks[i].by,this.psx,this.psy,blocks[i].bsx,blocks[i].bsy)){
        if(this.checkx != blocks[i].bx||this.checky != blocks[i].by){
        for(var w=0; w<20; w++){
          let angle = random(0,2*PI);
          let fast = random(5,20);
          
        //  bulletsP[bulletsP.length] = new bulletP(blocks[i].bx,blocks[i].by,blocks[i].bx+cos(angle)*50,blocks[i].by+sin(angle)*50,fast);
        }
          
        }
        this.checkx = blocks[i].bx;
        this.checky = blocks[i].by;
        // print("new checkpoint")
      }
    }
      if(blocks[i].type==7){
        if(dis(blocks[i].bx,blocks[i].by,this.px,this.py)<=40){
          this.changeLevel(blocks[i].delay);
          // print("next")
        }
      }
    }
    }
    
  }
  changeLevel(x){
    levelCode = levels[x];
    this.checkx = this.startx;
    this.checky = this.starty;
   // print(allSprites.length)
    this.respawn();
    selEdit = -1;
    blocks = [];
    currentLevel = x;
   // console.log(levelCode,blocks[i].range);
    buildLevel();
    blocks.sort((a, b) => a.compareTo(b))
    // player1.permaX=undefined;
    // player1.peraY=undefined;
    this.touched=false;
    this.able = true;
    this.holding = false;
    // this.personIndex = blocks.findIndex(hold=>hold.type==15);
  }
}