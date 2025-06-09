// var sensors=[]

//Block Class
class block{
  constructor(a,b,c,d,e,f,g,h){
    //position
    this.bx = a;
    this.by = b;
    this.prebx = a;
    this.preby = b;
    this.startX=a
    this.startY=b
    //size, width, heights7
    //generally in this project's scale, use 30x30 to corollate with player, but also an integer scale of 30x30, just keep the grid consistant
    this.bsx = c;
    this.bsy = d;
    //for jiggle and shake;
    this.showc = 0;
    this.showcv = 0;
    //new 
    this.nx = 1;
    this.ny = 1;
    this.sides = [0,0,0,0];
    //Pass through types
    this.type = e
    //
    this.collideWith = false;
    if(this.type == 1||this.type == 2||this.type == 6||this.type == 9||this.type == 10 || this.type==14){
      this.collideWith = true;
    }
    this.fullCollide = false;
    //to prevent 2 but to keep 6, "phaseable", "turret"
    //It also keeps more avalibility in block class not player class
    if(this.type == 1||this.type == 6||this.type==9||this.type == 10||this.type==14){
      this.fullCollide = true;
    }
    //If there is a check, "type 4"
    //for an animation
    this.checkSize = 25;
    this.checkVel = 0;
    this.rotation = int(f);
    if(this.rotation>=360){
      this.rotation = this.rotation%90;
    }
    //for the turret
    this.reload = g;
    this.delay = g;
    this.range = h;
    if(this.range == 0&&this.type == 6){
      this.range = 1;
    }
    //for the moving platforms
    this.order=g
    this.speed=g
    this.code=h
    
    this.life = 60;
    if(this.type ==12){
      this.life = 0;
    }
    this.broken = false;
    this.tx = this.bx;
    this.ty = this.by;
    this.moveBlocks = false;
    this.moveLock = 0;
    this.seter = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
  this.seter2 = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
    this.ava = [[0,0],
                   [0,0],]
    this.im =  createGraphics(this.bsx, this.bsy);
    this.updated = 0;
    this.rend = 4;
    this.link = -1;
    //person block
    this.held=false;
    // i shouldnt use map, it not good naming, hf sorry for doing map
    this.bombMap;
    if(this.type == 15){
      //x, y, xv, yv, typey, psx, psy, timer()
      this.bombMap = new bomb(this.bx,this.by,0,-20,64,15,15,1212);
    }
    
    
    
  }
  actions(){
    this.prebx = this.bx;
    this.preby = this.by;
    angleMode(RADIANS);
    //Main display
    strokeWeight(5);
    stroke("#66796B");
    noFill()
    //All instances of "can be on a grid" will be as a block class type, we are at, "4"
    //TYPE ONE BLOCK, NORMALLLL
    this.showc+=this.showcv;
    this.showcv+=(1-this.showc)/5;
    this.showcv/=1.4;
    push();
      translate(this.bx,this.by);
      scale(this.showc,this.showc);
      translate(-this.bx,-this.by);
    if(this.type == 1&&this.moveBlocks==false){
       if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
      this.form1(this.bx,this.by,this.bsx,this.bsy,this.sides[0],this.sides[1],this.sides[2],this.sides[3],0);
       }
    }
    //type 2 block PASSAGE, PHASEABLE
    if(this.type == 2){
      this.form2(this.bx,this.by-this.bsy/2+15,this.bsx,30,this.sides[0],this.sides[1],this.sides[2],this.sides[3]);
      if(this.bsy>30){
        this.by = this.by-this.bsy/2+15;
        this.bsy = 30;
      }
    }
    //Type 3 block, SPIKE
    if(this.type == 3){
      for(let i=0; i<this.bsx/30; i++){
        for(let c=0; c<this.bsy/30; c++){
          
          this.spike(this.bx-this.bsx/2+15+i*30,this.by-this.bsy/2+15+c*30,this.rotation);
        }
      }
    }
    //Type 4 block, Checkpoint
    if(this.type == 4){
      //this.check(this.bx,this.by,this.checkSize);
      if(levelEdit){
      push();
      stroke(0,255,0,100)
      fill(0,255,0,50);
      rect(this.bx,this.by,this.bsx,this.bsy,5);
      noStroke();
      textSize(30);
      fill(0,255,0,150)
      text("C",this.bx,this.by+15/2)
      pop();
      }
      this.checkSize-=this.checkVel;
      if(this.bx==player1.checkx&&this.by==player1.checky){
        this.checkVel = (this.checkSize-50)/4;
      }else{
        this.checkVel = (this.checkSize-25)/4;
      }
    }
    if(this.type == 6){
      if(this.range == 0){
      this.range = 1;
    }
      this.reload+=0.1;
      if(this.reload>=this.range){
        this.reload=0;
        this.showcv+=0.01;
      }
      for(let i=0; i<this.bsx/30; i++){
        for(let c=0; c<this.bsy/30; c++){
          this.turret(this.bx-this.bsx/2+15+i*30,this.by-this.bsy/2+15+c*30,this.reload/this.range*3);
        }
      }
    }
    if(this.type == 7){
      this.portal(this.bx,this.by);
      this.bsx = 30;
      this.bsy = 30;
    }
    if(this.type == 8){
      this.sign(this.bx,this.by);
      this.bsx = 30;
      this.bsy = 30;
    }
    if(this.type == 9){
      if(this.broken){
        this.life--;
      }
      if(this.life<=0){
        this.collideWith = false;
        this.fullCollide = false;
      }
      if(this.life==-1){
        blockP[blockP.length] = new bpart(this.bx,this.by,random(-5,5),random(-1,-5),this.bsx,this.bsy);
      }
      if(this.broken&&this.life>0){
        translate(random(-2,2),random(-2,2));
    }
      if(this.life<=-300&&!rectHit(player1.px,player1.py,this.bx,this.by,29,29,this.bsx,this.bsy)){
        this.life=60;
        this.broken = false;
          this.blockSprite = new Sprite(this.bx,this.by,this.bsx,this.bsy,'k');
      this.blockSprite.visible = false;
        this.showc=0;
        this.showcv = 0;
        this.collideWith = true;
        this.fullCollide = true;
      }
      if(this.life>0){
          image(tileFull[4][0],this.bx,this.by,30+(imageSize-15),30+(imageSize-15));
      }else{
        image(tileFull[4][1],this.bx,this.by,30+(imageSize-15),30+(imageSize-15));
      }
    }
    //LASER
    if(this.type == 10){
      this.reload+=0.1;
      if(this.reload>=this.range+10){
        this.reload=0;
        this.showcv+=0.035;
      }
      for(let i=0; i<this.bsx/30; i++){
        for(let c=0; c<this.bsy/30; c++){
          
          this.laser(this.bx-this.bsx/2+15+i*30,this.by-this.bsy/2+15+c*30,this.reload/this.range*3);
        
        }
      }
    }
   // print(this.bx,this.by,player1.py,player1.px,this.bsx,this.bsy,player1.psx,player1.psy)
     if(levelEdit&&this.type == 11){
      noStroke();
      fill(255,50);
      rect(this.bx,this.by,this.bsx,this.bsy);
      }
    if((this.type == 11)&&(!keyIsDown(66)||!levelEdit)&&!camP){
    //  print(this.bx,this.by,player1.py,player1.px,this.bsx,this.bsy,player1.psx,player1.psy)
      if(rectHit(this.bx,this.by,player1.px,player1.py,this.bsx,this.bsy,player1.psx,player1.psy)){
      //cam = createVector(this.bx,this.by);
        let speeder = 7.5;
         cam.add(-(cam.x-(this.bx))/speeder,-(cam.y-(this.by))/speeder);
        zoom -=(zoom-(min(100*1000/(this.bsx+70),100*600/(this.bsy+70))))/5;
      }
      
    }
    if(this.type==12){
      this.bsx = 30;
      this.bsy = 30;
      this.life--;
      if(!this.broken){
        this.life = max(0,this.life);
      }
      if(this.life<=-200){
        this.broken = false;
        this.life = sqrt(30);
        this.showcv+=0.5;
      }
      this.plot1(this.bx,this.by);
    }
    if(this.type == 13){
      fill(0,255,225,40)
      stroke(0,255,195,40);
      rect(this.bx,this.by,this.bsx,this.bsy);
       //this.form5(this.bx,this.by,this.bsx,this.bsy,this.sides[0],this.sides[1],this.sides[2],this.sides[3],20);
      // if(player1.x>this.x-this.bsx/2 && player1.x<this.bx+this.bsx/2 && player1.y>this.by-this.bsy/2 && player1.y<this.by+this.bsy/2){
      //   if(player1.gravity>0){
      //     player1.gravity=-player1.gravity
      //   }
      // }
    }
    if(this.type == 14&&this.moveBlocks==false){
      let linkI = arrows.findIndex(hold=>hold.link==this.link);
      this.bx=arrows[linkI].x;
      this.by=arrows[linkI].y;
    //  print(arrows[linkI].x);
       if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
      this.form1(this.bx,this.by,this.bsx,this.bsy,this.sides[0],this.sides[1],this.sides[2],this.sides[3],0);
       }
    }
    //person
    if(this.type==15){
      // print(player1.able)
      this.bombMap.display();
      this.bx = this.bombMap.px;
      this.by = this.bombMap.py;
      image(playerSprite[2][0],this.bx,this.by-22.5,60,60);
      this.bombMap.held = this.held;
      if(this.held){
        workingT = true;
        //no abilites
         //print("held")
        player1.able=false
        //auto move
        this.bombMap.px-=(this.bx-player1.px)/5;
        this.bombMap.py-=(this.by-player1.py+5+sin(frameCount/20)*2)/5;
         if(kb.presses("q")){
           this.bombMap.throws();
           this.held = false;
           player1.holding=false
           player1.able=true
         }
       if(kb.presses("f")&&player1.killLine.stage==5){
            //kill
          //  player1.changeLevel(this.delay)
             player1.killLine.time=0;
            // player1.px=0
            // player1.py=0
            //print(player1.score)
          }
        //draw
        // if(player1.px<=150 && player1.px>=-150 && player1.py<=150 && player1.py>=-150){
        //   player1.changeLevel(this.delay)
        //   player1.score+=1000
        //   ohthis.held=false
        // }
        var sensor=blocks.findIndex(hold => hold.type==16)
        if(sensor != -1){
          //print("there")
          if(rectHit(player1.px,player1.py,blocks[sensor].bx,blocks[sensor].by,player1.psx,player1.psy,blocks[sensor].bsx,blocks[sensor].bsy)){
         // print("inside")
          player1.changeLevel(this.delay)
        player1.score+=3000
        this.held=false
            player1.holding=false
          player1.able=true
            // player1.px=0
            // player1.py=0
        }
        }
        
        
      }else{
         workingT = false;
        // player1.able=true
        // if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
          // player1.able=false
          // rect(this.x,this.)
          //draw
          if(rectHit(player1.px,player1.py,this.bx,this.by,player1.psx,player1.psy,this.bsx*2,this.bsy*3)){
            // player1.able=false
          if(kb.presses("f")&&player1.killLine.stage==5){
            //kill
          //  player1.changeLevel(this.delay)
             player1.killLine.time=0;
            // player1.px=0
            // player1.py=0
            //print(player1.score)
          }else if(kb.presses("e")){
            //hold
            // print(2)
            this.held=true
            player1.holding=true
            player1.touched=true
            player1.able=false
            player1.checkx=this.startX
            player1.checky=this.startY-player1.psy/2+7.5
          }
          // player1.able=true
          }
          
        // }else{
          // player1.able=true
        // }
      }
      // if(this.held==true){
      //   player1.able=false
      // }else{
      //   player1.able=true
      // }
    }
    if(this.type==16){
      // if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
          push()
      stroke(255,0,0)
      image(gateSprite,this.bx,this.by+15,5*30,5*30);
      image(gatexSprite,this.bx,this.by-33,11/8*30,30);
      pop()
        // sensors[sensors.length]=this
        // }
      
    }
    
    pop();
    if(this.moveBlocks){
      this.bx = boxes[this.moveLock].x;
      this.by = boxes[this.moveLock].y;
      this.bsx = boxes[this.moveLock].width-1;
      this.bsy = boxes[this.moveLock].height-1;
      if(boxes[this.moveLock].rotation>=PI/4&&boxes[this.moveLock].rotation<=3*PI/4||boxes[this.moveLock].rotation<=-PI/4&&boxes[this.moveLock].rotation>=-3*PI/4){
      this.bsx = boxes[this.moveLock].height-1;
      this.bsy = boxes[this.moveLock].width-1;  
      }
    }
    this.rotation=this.rotation%360;
  }
  textDisplay(ind){
    noStroke();
    fill(0)
    textSize(20)
    text(ind,this.bx,this.by+7.5);
  }
  compareTo(other){
    if(this.type==1&&this.delay<0&&(other.type!=1||other.delay<0)){
      return 1;
    }
    if(other.type==1&&other.delay<0&&(this.type!=1||this.delay<0)){
      return -1;
    }
    if(this.type==3&&other.type!=3){
      return 1;
    }
    if(this.type!=3&&other.type==3){
      return -1;
    }
     if(this.type==16&&other.type!=16){
      return 1;
    }
    if(this.type!=16&&other.type==16){
      return -1;
    }
     if(this.type==7&&other.type!=7){
      return -1;
    }
    if(this.type!=7&&other.type==7){
      return 1;
    }
     if(this.type==11&&other.type!=11){
      return 1;
    }
    if(this.type!=11&&other.type==11){
      return -1;
    }
    return other.type-this.type-1;
  }
  form5(x,y,sx,sy,a,b,c,d,e){
    imageMode(CORNER)
    for(let i=0; i<sx/30; i++){
      for(let c=0; c<sy/30; c++){
        let plot = createVector(x-sx/2+i*30,y-sy/2+c*30);
      if(i!=0&&i!=(sx/30-1)&&c!=0&&c!=(sy/30-1)){
        if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
          image(tileFull[11][1],plot.x,plot.y,30-15+imageSize,30-15+imageSize)
        }
      }else{
        if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
          if(!kb.pressing('5')){
               this.seter = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
        this.ava = [[0,0],
                   [0,0],]
        for(let i=0; i<3; i++){
          for(let c= 0; c<3; c++){
            this.seter[i][c]=(blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15+c*30,plot.y-15+i*30,hold.bsx,hold.bsy,20,20)&&((hold.type==this.type)))>=0)+0;
          }
        }
          }
          
        this.form3(plot.x,plot.y,copy2DArray(this.seter),copy2DArray(this.seter),copy2DArray(this.ava),e);
      } 
      }
      }
  }
    imageMode(CENTER)
  }
  form1(x,y,sx,sy,a,b,c,d,e){
    imageMode(CORNER)
    if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
    if(this.bsx>0&&this.bsy>0){
    if(this.updated<=0){
      let pos = createVector(x,y)
      this.im =  createGraphics((this.bsx)/30*this.rend, (this.bsy)/30*this.rend);
    for(let i=0; i<sx/30; i++){
      for(let c=0; c<sy/30; c++){
        let plot = createVector(i*30,c*30);
      if(i!=0&&i!=(sx/30-1)&&c!=0&&c!=(sy/30-1)){
          if(this.type==1&&this.delay<0){
            this.im.image(tileFull[11][3],plot.x/30*this.rend,plot.y/30*this.rend,(30)/30*this.rend,(30)/30*this.rend)
          }else{
          this.im.image(tileFull[0][0],plot.x/30*this.rend,plot.y/30*this.rend,(30)/30*this.rend,(30)/30*this.rend)
          }
      }else{
        //  if(kb.pressing('5')){
           plot = createVector(x-sx/2+i*30,y-sy/2+c*30);
              this.update(plot)
         // }
          plot = createVector(i*30/30*this.rend,c*30/30*this.rend);
        this.form3(plot.x,plot.y,copy2DArray(this.seter),copy2DArray(this.seter2),copy2DArray(this.ava),e);
      }
      }
  }
      this.updated++;
      }
          imageMode(CENTER)
        noSmooth();
        this.im.noSmooth();
        image(this.im,this.bx,this.by,this.bsx+(imageSize-15+1),this.bsy+(imageSize-15+1));
      
    imageMode(CENTER)
    //  rect(this.bx,this.by,this.bsx,this.bsy)
    }
    }
  }
  update(plot){
    this.seter = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
        this.seter2 = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
        this.ava = [[0,0],
                   [0,0],]
        for(let i=0; i<3; i++){
          for(let c= 0; c<3; c++){
            this.seter[i][c]=(blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15+c*30,plot.y-15+i*30,hold.bsx,hold.bsy,20,20)&&((hold.type==this.type||hold.type==2||hold.type==3)&&hold.life>0))>=0)+0;
            this.seter2[i][c]=(blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15+c*30,plot.y-15+i*30,hold.bsx,hold.bsy,20,20)&&((hold.type==this.type)&&hold.life>0))>=0)+0;
            
          }
        }
   
        let finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+45,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==0);
        if(finder>=0){
            this.ava[1][1] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+45,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==90);
        if(finder>=0){
          this.ava[1][1] = 1;
          this.ava[0][1] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+45,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==180);
        if(finder>=0){
            this.ava[0][1] = 1;
        }
        //top zone
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y-15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==0);
        if(finder>=0){
            this.ava[0][0] = 1;
            this.ava[0][1] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y-15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==90);
        if(finder>=0){
          this.ava[0][0] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y-15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==270);
        if(finder>=0){
            this.ava[0][1] = 1;
        }
        //left zone
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==0);
        if(finder>=0){
            this.ava[1][0] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==270);
        if(finder>=0){
          this.ava[0][0] = 1;
          this.ava[1][0] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==180);
        if(finder>=0){
          this.ava[0][0] = 1;
        }
        //bottom zone
        /////////////////
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y+45,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==180);
        if(finder>=0){
            this.ava[1][0] = 1;
            this.ava[1][1] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y+45,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==90);
        if(finder>=0){
          this.ava[1][0] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+15,plot.y+45,hold.bsx,hold.bsy,20,20)&&hold.type==3&&hold.rotation==270);
        if(finder>=0){
            this.ava[1][1] = 1;
        }
        //Phasable sider types
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x+45,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==2);
        if(finder>=0){
            this.ava[0][1] = 1;
        }
        finder = blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15,plot.y+15,hold.bsx,hold.bsy,20,20)&&hold.type==2);
        if(finder>=0){
            this.ava[0][0] = 1;
        }
          
  }


  form3(x,y,seter,seter2,ava,type){
    
    //map set
    //arrays2DEqual,arrays2DGet2
    let setes = [
      [createVector(0,0),createVector(0,0)],
      [createVector(0,0),createVector(0,0)]
    ];
    //Blanks
    if(0==0){
    //top_left
    if("top_left"=="top_left"){
      let plot2 = arrays2DGet2(seter,0,0);
      let plot3 = arrays2DGet2(seter2,0,0);
      let plot1 = [
        [1,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(3,3);

      plot1 = [
        [0,0],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(4,0);
      
      plot1 = [
        [0,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(0,0);

      plot1 = [
        [1,0],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(4,0);

      plot1 = [
        [0,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(2,0);

      plot1 = [
        [1,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(0,0);

      plot1 = [
        [1,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(2,0);

      plot1 = [
        [0,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][0]||arrays2DEqual(plot3,plot1)) setes[0][0] = createVector(1,3);
    }
    ///////////////////\/\/\//\/\/\/\/\/\/\/
    //top right
    if("top_right"=="top_right"){
      let plot2 = arrays2DGet2(seter,0,1);
      let plot3 = arrays2DGet2(seter2,0,1);
      let plot1 = [
        [1,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(3,2);
      
      plot1 = [
        [0,0],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(5,0);

      plot1 = [
        [0,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(1,0);

      plot1 = [
        [0,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(5,0);

      plot1 = [
        [1,0],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(3,0);

      plot1 = [
        [0,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(0,0);

      plot1 = [
        [1,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(3,0);

      plot1 = [
        [1,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[0][1]||arrays2DEqual(plot3,plot1)) setes[1][0] = createVector(0,3);
    }
    //bottom right
    if("bottom_right"=="bottom_right"){
      let plot2 = arrays2DGet2(seter,1,1);
      let plot3 = arrays2DGet2(seter2,1,1);
      let plot1 = [
        [1,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(3,3);

      plot1 = [
        [1,0],
        [0,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(5,1);
      
      plot1 = [
        [1,1],
        [0,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(1,1);

      plot1 = [
        [1,0],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(5,1);

      plot1 = [
        [1,0],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(3,1);

      plot1 = [
        [1,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(1,1);

      plot1 = [
        [1,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(3,1);

      plot1 = [
        [1,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][1]||arrays2DEqual(plot3,plot1)) setes[1][1] = createVector(0,2);
    }
    //bottom left
    if("bottom_left"=="bottom_left"){
      let plot2 = arrays2DGet2(seter,1,0);
      let plot3 = arrays2DGet2(seter2,1,0);
      let plot1 = [
        [1,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(2,3);

      plot1 = [
        [0,1],
        [0,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(4,1);
      
      plot1 = [
        [1,1],
        [0,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(0,1);

      plot1 = [
        [0,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(4,1);

      plot1 = [
        [0,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(2,1);

      plot1 = [
        [1,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(1,1);

      plot1 = [
        [0,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(2,0);

      plot1 = [
        [1,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)&&ava[1][0]||arrays2DEqual(plot3,plot1)) setes[0][1] = createVector(1,2);
    }
    }
    if(this.type==1&&this.delay<0){
    for(let i = 0; i<2; i++){
      for(let c = 0; c<2; c++){
         setes[i][c].x+=20;
         setes[i][c].y+=4;
      }
    }
    }
    let sizer = imageSize;
    let sizer2 = -(15-imageSize)/2;
   // x-=this.bx-this.bsx/2;
   // y-=this.by-this.bsy/2;
   // x/=30;
   // y/=30;
    sizer=sizer/30*this.rend;
    sizer2=sizer2/30*this.rend;
    //print(x,y)
    this.im.image(tileSprite[setes[0][0].x+type][setes[0][0].y],x-sizer2,y-sizer2,sizer,sizer);
    this.im.image(tileSprite[setes[0][1].x+type][setes[0][1].y],x-sizer2,y+15/30*this.rend-sizer2,sizer,sizer);
    this.im.image(tileSprite[setes[1][0].x+type][setes[1][0].y],x+15/30*this.rend-sizer2,y-sizer2,sizer,sizer);
    //print(setes[1][1].x+type,setes[1][1].y)
    this.im.image(tileSprite[setes[1][1].x+type][setes[1][1].y],x+15/30*this.rend-sizer2,y+15/30*this.rend-sizer2,sizer,sizer);
     let plot2 = arrays2DGet2(seter2,0,1);
      let plot1 = [
        [1,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)){
        image(tileSprite[7][0],x+30,y-15,15.1,15.1);
      }
      plot2 = arrays2DGet2(seter2,0,0);
      plot1 = [
        [0,1],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)){
        image(tileSprite[6][0],x-15,y-15,15.1,15.1);
      }
      plot2 = arrays2DGet2(seter2,1,0);
      plot1 = [
        [1,1],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)){
        image(tileSprite[6][1],x-15,y+30,15.1,15.1);
      }
    plot2 = arrays2DGet2(seter2,1,0);
      plot1 = [
        [1,1],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)){
        image(tileSprite[7][1],x,y+30,15.1,15.1);
      }
  }
  form2(x,y,sx,sy,a,b,c,d){
    imageMode(CORNER)
     for(let i=0; i<sx/30; i++){
      for(let c=0; c<sy/30; c++){
        let plot = createVector(x-sx/2+i*30,y-sy/2+c*30);
    let seter = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
        ];
        for(let i=1; i<2; i++){ 
          for(let c= 0; c<3; c++){
            seter[i][c]=(blocks.findIndex(hold => rectHit(hold.bx,hold.by,plot.x-15+c*30,plot.y-15+i*30,hold.bsx,hold.bsy,20,20)&&(hold.type==1||hold.type==2))>=0)+0;
          }
        }
        
        this.form4(plot.x,plot.y,seter);
      }
    imageMode(CENTER)
  }
  }
  form4(x,y,seter){
      imageMode(CORNER)
    //map set
    //arrays2DEqual,arrays2DGet2
    let setes = [
      [createVector(6,4),createVector(6,4)],
      [createVector(6,4),createVector(6,4)]
    ];
    //Blanks
    if(0==0){
    //left
    if("top_left"=="top_left"){
      let plot2 = arrays2DGet2(seter,0,0);
      let plot1 = [
        [0,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)) setes[0][0] = createVector(5,2);
      
      plot1 = [
        [0,0],
        [0,1]
      ];
      if(arrays2DEqual(plot2,plot1)) setes[0][0] = createVector(4,2);
    }
      
    if("top_right"=="top_right"){
      let plot2 = arrays2DGet2(seter,0,1);
      let plot1 = [
        [0,0],
        [1,1]
      ];
      if(arrays2DEqual(plot2,plot1)) setes[1][0] = createVector(5,2);
      
      plot1 = [
        [0,0],
        [1,0]
      ];
      if(arrays2DEqual(plot2,plot1)) setes[1][0] = createVector(4,3);
    }
    }
    /*
    if(seter[0].reduce(getSum)+seter[1].reduce(getSum)+seter[2].reduce(getSum)==9){
       setes = [
      [createVector(2,2),createVector(2,2)],
      [createVector(2,2),createVector(2,2)]
    ];
    }
    */
    let sizer2 = -(15-imageSize)/2;
    image(tileSprite[setes[0][0].x][setes[0][0].y],x-sizer2,y-sizer2,imageSize,imageSize);
    image(tileSprite[setes[0][1].x][setes[0][1].y],x-sizer2,y+15-sizer2,imageSize,imageSize);
    image(tileSprite[setes[1][0].x][setes[1][0].y],x+15-sizer2,y-sizer2,imageSize,imageSize);
    image(tileSprite[setes[1][1].x][setes[1][1].y],x+15-sizer2,y+15-sizer2,imageSize,imageSize);
  }
spike(x,y,r){
   if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
  push();
  translate(x,y);
  rotate(r*PI/180);
  imageMode(CORNER);
     let sizer = imageSize;
     let sizer2 = -(15-imageSize)/2;
  image(tileSprite[0][4],-15-sizer2,-15-sizer2,sizer,sizer);
  image(tileSprite[0][5],-15-sizer2,0-sizer2,sizer,sizer);
  image(tileSprite[1][4],0-sizer2,-15-sizer2,sizer,sizer);
  image(tileSprite[1][5],0-sizer2,0-sizer2,sizer,sizer);
  pop();
     fill(255,0,255,100);
      noStroke();
     push();
     translate(x,y);
  rotate(r*PI/180);
      if(kb.pressing('-')){
        rect(0,0,24,13)
      }
     pop();
   }
}
  check(x,y,z){
    if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
  push();
      stroke("#B8DED0")
  translate(x,y);
    rotate(this.rotation*PI/180);
  strokeWeight(5);
  rect(0,-5,10,40,5,5,1,1);
  ellipse(0,-20,z,z);
  line(5,-5,15,15);
  line(-5,-5,-15,15);
  translate(0,-20);
  if(this.bx==player1.checkx&&this.by==player1.checky){
    rotate(frameCount*PI/180*5);
    rect(0,0,z-20,z-20,5);
  }
  pop();
    }
  }
  turret(x,y,z){
    if(this.reload==0){
      bullets[bullets.length] = new bullet(x+cos(this.rotation*PI/180+PI/2)*15,y+sin(this.rotation*PI/180+PI/2)*15,x+cos(this.rotation*PI/180+PI/2)*50,y+sin(this.rotation*PI/180+PI/2)*50,10);
    }
    if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
    push();
    translate(x,y);
      rotate(this.rotation*PI/180)
    let framer = 3-(floor(frameCount/10)%4);
    image(tileFull[1][4],0,22-z/2,25-15+imageSize+z*4,30-15+imageSize-z*4);
    image(tileFull[framer][3],0,0,30-15+imageSize,30-15+imageSize);
    pop();
    }
  }
  portal(x,y){
    if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
      for(let i=0; i<2; i++){
        for(let c=0; c<2; c++){
         push();
    translate(x,y);
    rotate(frameCount*PI/180*5*(((i%2)*2)-1));
    image(portalSprite.get(portalSprite.width/2*i,portalSprite.height/2*c,portalSprite.width/2,portalSprite.height/2),0,0,60+sin(frameCount/20)*10,60+cos(frameCount/20)*10);
         pop();
        }
      }
    }
  }
  sign(x,y){
    if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
    push();
    translate(x,y);
    stroke(0,-100+80/dis(player1.px,player1.py,this.bx,this.by)*355);
    fill(255,-100+80/dis(player1.px,player1.py,this.bx,this.by)*355);
    textSize(20)
    let holder = str(this.delay);
    holder = holder.replace(/\\n/g, '\n');
      noStroke()
    text(holder,0,60-this.range*20);
    rotate(this.rotation*PI/180)
    noFill();
    stroke("#B8DED0");
    strokeWeight(5)
    imageMode(CENTER)
    image(tileFull[1][2],0,0,15+imageSize,15+imageSize)
    pop();
    }
}
  laser(x,y,z){
      if(rectHit(-trucam.x+500,-trucam.y+300,this.bx,this.by,1000*100/zoom,600*100/zoom,this.bsx,this.bsy)){
    push();
    translate(x,y);
    rotate(-this.rotation*PI/180)
    let framer = floor(frameCount/10)%4;
    image(tileFull[framer][3],0,0,30-15+imageSize,30-15+imageSize);
    image(tileFull[0][4],0,30,30-15+imageSize,30-15+imageSize);
    pop();
      }
    let sight = [];
    for(var i=0; i<blocks.length; i++){
        if(rectHit(blocks[i].bx,blocks[i].by,x+cos(-this.rotation*PI/180)*300,y+sin(-this.rotation*PI/180))*300,blocks[i].bsx,blocks[i].bsy,30+cos(-this.rotation*PI/180)*600,30+sin(-this.rotation*PI/180)*600){
           sight[sight.length] = blocks[i];
        }
    }
    let lax = x;
    let lay = y;
      for(var c =0; c<50; c++){
        lax+=sin(this.rotation*PI/180)*30;
        lay+=cos(this.rotation*PI/180)*30;
    for(var i=0; i<sight.length; i++){
      if(sight[i].fullCollide){
        if(rectHit(sight[i].bx,sight[i].by,lax,lay,sight[i].bsx,sight[i].bsy,20,20)){
          i=sight.length;
          c=50;
          lax-=sin(this.rotation*PI/180)*15;
          lay-=cos(this.rotation*PI/180)*15;
        }
      }
    }
      }
      this.tx+=(lax-this.tx)/1;
      this.ty+=(lay-this.ty)/1;
      if(this.reload>=0&&this.reload<=10){
      push();    
      x+=sin(this.rotation*PI/180)*30;
      y+=cos(this.rotation*PI/180)*30;
      strokeWeight(5)
      stroke("rgb(222,198,184)");
      line(x,y,this.tx,this.ty);
      stroke("rgba(222,198,184,0.42745098039215684)");
      strokeWeight(10)
      line(x,y,this.tx,this.ty);
      strokeWeight(15)
      line(x,y,this.tx,this.ty);
      pop();
      push();
      noStroke();
      fill(255,50);
      ellipse(x,y,10,10)
      ellipse(x,y,20,20)
      ellipse(x,y,25,25)
      ellipse(this.tx,this.ty,15,15)
      ellipse(this.tx,this.ty,25,25)

      pop();
        
      if(frameCount%10==0){
      bulletsP[bulletsP.length] = new bulletP(x,y,x+sin(this.rotation*PI/180+random(-0.2,0.2))*30,y+cos(this.rotation*PI/180+random(-0.2,0.2))*30,random(5,10));
        bulletsP[bulletsP.length] = new bulletP(lax,lay,lax-sin(this.rotation*PI/180+random(-0.2,0.2))*30,lay-cos(this.rotation*PI/180+random(-0.2,0.2))*30,random(5,10));
      }
      if(frameCount%4==0){
      bulletsP[bulletsP.length] = new bulletP(lax,lay,lax-sin(this.rotation*PI/180+random(-1.5,1.5))*30,lay-cos(this.rotation*PI/180+random(-1.5,1.5))*30,random(2,5));
      }
      if(this.rotation%180==90){
      if(rectHit((x+lax)/2,(y+lay)/2,player1.px,player1.py,abs(x-lax),10,30,30)&&player1.collide == true){
        player1.respawn();
      }
        fill(255,0,0)
        //rect((x+lax)/2,(x+lay)/2);
      }else{
        if(rectHit((x+lax)/2,(y+lay)/2,player1.px,player1.py,10,abs(y-lay),30,30)&&player1.collide == true){
        player1.respawn();
      }
      }
      }
      if(this.reload==0){
        for(var i=0; i<20; i++){
        bulletsP[bulletsP.length] = new bulletP(x,y,x+sin(this.rotation*PI/180+random(-0.1,0.1))*30,y+cos(this.rotation*PI/180+random(-0.1,0.1))*30,random(5,15));
        }
        this.tx = x;
        this.ty = y;
      }
}
  plot1(x,y){
    push();
    translate(x,y);
    rotate(sin(frameCount/20)/6);
    image(tileFull[5][0],0,0,30-15+imageSize,30-15+imageSize);
    if(!this.broken){
      let scaler = 1;
      scale(scaler,scaler);
      image(tileFull[0][5],0,0,30-15+imageSize,30-15+imageSize);
    }
    pop();
  }
}
class bpart{
   constructor(a,b,c,d,e,f){
    this.sx = a;
    this.sy = b;
    this.sxv = c;
    this.syv = d;
    this.bsx = e;
     this.bsy = f;
    this.life = 60;
     this.ang = 0;
  }
  work(){
    push();
    noFill();
    this.life-=0.3;
    stroke("#66796B");
    translate(this.sx,this.sy);
    this.sx+=this.sxv;
    this.sy+=this.syv;
    this.syv+=1;
    this.sxv/=1.01
    this.ang+=this.sxv;
    rotate(this.ang*PI/180);
    image(tileFull[4][0],0,0,this.bsx,this.bsy);
    pop();
  }
}
