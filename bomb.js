class bomb{
  constructor(a,b,c,d,e,f,g,h){
    //x, y, xv, yv, typey, psx, psy, timer()
    this.px = a;
    this.py = b;
    this.prex = a;
    this.prey = b;
    this.xvel = c;
    this.yvel = d;
    this.type = e;
    this.jumps = 0;
    this.psx = f;
    this.psy = g;
    this.rotation = 0;
    this.timer = h;
    this.held = false;
    this.prexvel = 0;
    this.preyvel = 0;
  }
  display(){
    this.prexvel = this.xvel;
    this.preyvel = this.yvel;
    if(this.type!=64){
      this.timer--;
    }
    this.rotation+=this.xvel/20;
    //this.player_move_and_slide();
    this.prex = this.px;
    this.prey = this.py;
    if(rectHit(player1.px,player1.py,this.px,this.py,player1.psx,player1.psy,this.psx,this.psy)&&this.type==89){
     // print(((player1.psx/2+this.psx/2)-((player1.px-this.px)))/5)
     this.xvel-=(player1.px-this.px)/20
      this.yvel-=(player1.py-this.py)/3;
    }
    //this.xvel/=player1.drag/1.05;
    let direction = this.xvel/abs(this.xvel)
    if(abs(this.xvel)-abs(player1.constdrag/20)<0){
     this.xvel=0
    }else{
      if(this.type!=64){
      this.xvel-=direction*(player1.constdrag/20)   
    }else{
      this.xvel-=direction*(player1.constdrag/7)   
    }
    }
    if(blocks.findIndex(hold => hold.type==13&&rectHit(hold.bx,hold.by,this.px,this.py,hold.bsx,hold.bsy,this.psx,this.psy))!=-1){
      this.yvel-=player1.tgravity*3;
   }else{
      this.yvel+=player1.tgravity*3;
   }
    if(this.held){
      this.xvel = (player1.px-player1.direction*20-this.px)/5;
      this.yvel = (player1.py-this.py+sin(frameCount/15)*10)/5;
    }
    this.px+=this.xvel;
    this.py+=this.yvel;
   // if(!this.held){
    this.player_move_and_slide();
   // }
    push();
    translate(this.px,this.py)
    rotate(this.rotation)
    if(this.type!=89){
    //image(tileFull[5+1][0],0,0,30,30);
  }else{
   // image(tileFull[9][5],0,0,30,30);
  }
    pop();
    if(abs((this.xvel-this.prexvel))*1.3+abs((this.yvel-this.preyvel))>=11&&!this.held&&this.type!=89){
     this.timer=0;
   }
    if(this.timer ==0 &&this.type ==3){
      shake = 20;
      sounds[4].play();
      sounds[4].setVolume(0.9)
      sounds[4].rate(random(0.6,0.7));
      sounds[3].play();
      sounds[3].setVolume(0.8)
      sounds[3].rate(random(1.1,1.3));
        for(var u = 0; u<20; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,16),"5");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
      for(var u = 0; u<30; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,26),"7");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
      for(var u = 0; u<10; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,19),"8");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
      for(var u = 0; u<20; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,24),"6");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
       for(let c = -3; c<=4; c++){
           for(let j = -3; j<=4; j++){
             let flex = floor(this.px/30)*30+c*30-10;
            let fley = floor(this.py/30)*30+j*30-10;
             if(dist(flex,fley,this.px,this.py)<=90&&blocks.findIndex(hold => (rectHit(hold.bx,hold.by,flex,fley,hold.bsx,hold.bsy,20,20)&&hold.type==1)||rectHit(player1.px,player1.py,flex,fley,2*player1.psx,2*player1.psy,30,30))==-1&&blocks.findIndex(hold => hold.type==16&&rectHit(hold.bx,hold.by,flex,fley,hold.bsx,hold.bsy,20,20))==-1){
               blocks[blocks.length] = new block(flex,fley,30,30,1,0,0,0);
               
             }
           }
       }
      for(let i = 0; i<blocks.length; i++){
        blocks[i].updated = 0;
      }
     }
    this.antigrav();
    this.explode();
    /*
    if(this.timer<=0){
      this.px-=this.xvel;
    this.py-=this.yvel;
      this.xvel = 0;
      this.yvel = 0;
       for(let c = -3; c<=4; c++){
           for(let j = -3; j<=4; j++){
             let flex = floor(this.px/30)*30+c*30-10;
            let fley = floor(this.py/30)*30+j*30-10;
             if(dist(flex,fley,this.px,this.py)<=90){
            rect(flex,fley,10,10)
             }
              flex = floor(this.px/30)*30-10;
           fley = floor(this.py/30)*30-10;
             ellipse(flex,fley,20,20)
           }
      }
      
    }
    */
  }
  antigrav(){
    if(this.timer==0&&this.type==2){
      shake=20;
      sounds[2].play();
      sounds[2].setVolume(0.8)
      sounds[2].rate(random(1.1,1.3));
      sounds[3].play();
      sounds[3].setVolume(0.8)
      sounds[3].rate(random(1.1,1.3));
//         for(var u = 0; u<20; u++){
//         bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+random(-10,10),random(1,16),"#00BCD4");
//             //fill("#f48d8a")
//     //fill("#c4398b")
        
//       }
//       for(var u = 0; u<10; u++){
//         bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+random(-10,10),random(1,5),"#03A9F4");
//             //fill("#f48d8a")q
//     //fill("#c4398b")
//       }
//       for(var u = 0; u<100; u++){
//         bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+random(-10,10),random(1,19),"#2196F3");
//             //fill("#f48d8a")
//     //fill("#c4398b")
//       }
      blocks[blocks.length] = new block(this.px,this.py,90,210*8,13,0,0,0);
     // blocks.sort(compareBlocks)
     //  blocks.sort(compareBlocks)
      blocks.sort((a, b) => a.compareTo(b))
    }
  }
  explode(){
    if(this.timer==0&&(this.type==1)){
      if(dist(this.px,this.py,player1.px,player1.py)<300){
        let vel = createVector((this.px-player1.px),(this.py-player1.py));
        vel.normalize();
        vel.x*=(300-dist(this.px,this.py,player1.px,player1.py))*60;
        vel.y*=(300-dist(this.px,this.py,player1.px,player1.py))*60;
        //player1.xvel-=vel.x;
        //player1.yvel-=vel.y;
        //print(100/(this.px-player1.px),1000/(this.py-player1.py))
      }
      shake=100;
      sounds[1].play();
      sounds[1].setVolume(0.8)
      sounds[1].rate(random(1.1,1.3));
      sounds[3].play();
      sounds[3].setVolume(0.8)
      sounds[3].rate(random(1.1,1.3));
      for(var u = 0; u<20; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,16),"1");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
      for(var u = 0; u<30; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,16),"2");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
      for(var u = 0; u<10; u++){
        bulletsP[bulletsP.length] = new bulletP(this.px,this.py,this.px+cos(random(-360,0)*PI/180)*10,this.py+sin(random(-360,0)*PI/180)*10,random(1,19),"3");
            //fill("#f48d8a")
    //fill("#c4398b")
      }
       //blocks.sort(compareBlocks)
    // ellipse(this.px,this.py,200,200)
      let hold = blocks.length-1;
      for(let i = hold; i>=0; i--){
        let works = false;
        for(let c = -3; c<=4; c++){
           for(let j = -3; j<=4; j++){
             let flex = floor(this.px/30)*30+c*30-10;
            let fley = floor(this.py/30)*30+j*30-10;
             if(blocks[i].type!=4&&blocks[i].type!=11&&blocks[i].type!=13&&blocks[i].type!=7&&blocks[i].type!=15&&blocks[i].type!=16&&!(blocks[i].type==1&&blocks[i].delay<0)){
             if(dist(flex,fley,this.px,this.py)<=90){
             if(rectHit(flex,fley,blocks[i].bx,blocks[i].by,20,20,blocks[i].bsx,blocks[i].bsy)){
               works = true;
             }
             }  
           }
           }
        }
        if(works){
          //((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2
          if(((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2))>0){
          blocks[blocks.length] = new block(((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2,blocks[i].by,((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2)),blocks[i].bsy,blocks[i].type,blocks[i].rotation,blocks[i].delay,blocks[i].range);
          blocks[blocks.length-1].showcv = 0;
          blocks[blocks.length-1].showc = 1;
        }
          //right
          if(((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125))>0){
          blocks[blocks.length] = new block(((blocks[i].bx+blocks[i].bsx/2)+((floor(this.px/30)*30+125)))/2,blocks[i].by,((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125)),blocks[i].bsy,blocks[i].type,blocks[i].rotation,blocks[i].delay,blocks[i].range);
          blocks[blocks.length-1].showcv = 0;
          blocks[blocks.length-1].showc = 1;
          }
let flex = ((((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2+abs((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2))/2)+(((blocks[i].bx+blocks[i].bsx/2)+((floor(this.px/30)*30+125)))/2-abs(((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125)))/2))/2
let flexer = abs((((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2+abs((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2))/2)-(((blocks[i].bx+blocks[i].bsx/2)+((floor(this.px/30)*30+125)))/2-abs(((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125)))/2));
      if(((floor(this.py/30)*30-115)-(blocks[i].by-blocks[i].bsy/2))>0&&flexer>0){
          blocks[blocks.length] = new block(flex,((floor(this.py/30)*30-115)+(blocks[i].by-blocks[i].bsy/2))/2,flexer,((floor(this.py/30)*30-115)-(blocks[i].by-blocks[i].bsy/2)),blocks[i].type,blocks[i].rotation,blocks[i].delay,blocks[i].range)
        blocks[blocks.length-1].showcv = 0;
          blocks[blocks.length-1].showc = 1;
        }
          if(((blocks[i].by+blocks[i].bsy/2)-(floor(this.py/30)*30+125))>0&&flexer>0){
          blocks[blocks.length] = new block(flex,((blocks[i].by+blocks[i].bsy/2)+((floor(this.py/30)*30+125)))/2,flexer,((blocks[i].by+blocks[i].bsy/2)-(floor(this.py/30)*30+125)),blocks[i].type,blocks[i].rotation,blocks[i].delay,blocks[i].range);
          blocks[blocks.length-1].showcv = 0;
          blocks[blocks.length-1].showc = 1;
          }

          //((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2-(((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125)))/2
          //((floor(this.px/30)*30-115)+(blocks[i].bx-blocks[i].bsx/2))/2+(((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2)))/2
          
          //((floor(this.px/30)*30-100-15)-(blocks[i].bx-blocks[i].bsx/2))/30
          //((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125))/30
          //((floor(this.py/30)*30-100-15)-(blocks[i].by-blocks[i].bsy/2))/30
          //((blocks[i].by+blocks[i].bsy/2)-(floor(this.py/30)*30+125))/30
           for(let d = max(((floor(this.px/30)*30-115)-(blocks[i].bx-blocks[i].bsx/2))/30,0); d<min(blocks[i].bsx/30-((blocks[i].bx+blocks[i].bsx/2)-(floor(this.px/30)*30+125))/30,blocks[i].bsx/30); d++){
          for(let e = max(((floor(this.py/30)*30-115)-(blocks[i].by-blocks[i].bsy/2))/30,0); e<min(blocks[i].bsy/30-((blocks[i].by+blocks[i].bsy/2)-(floor(this.py/30)*30+125))/30,blocks[i].bsy/30); e++){
            let held = false;
          for(let c = -3; c<=4; c++){
           for(let j = -3; j<=4; j++){
             let flex = floor(this.px/30)*30+c*30-10;
            let fley = floor(this.py/30)*30+j*30-10;
             if(dist(flex,fley,this.px,this.py)<=90){
            if(rectHit(flex,fley,blocks[i].bx-blocks[i].bsx/2+d*30+15,blocks[i].by-blocks[i].bsy/2+e*30+15,20,20,30,30)){
               held = true;
            }
          }
            }
          }
            if(!held){
              blocks[blocks.length] = new block(blocks[i].bx-blocks[i].bsx/2+d*30+15,blocks[i].by-blocks[i].bsy/2+e*30+15,30,30,blocks[i].type,blocks[i].rotation,blocks[i].delay,blocks[i].range);
              blocks[blocks.length-1].showcv = 0;
              blocks[blocks.length-1].showc = 1;
            }
           }
        }
        blocks.splice(i,1);
        }
      }
     for(let i = 0; i<blocks.length; i++){
        blocks[i].updated = 0;
      }
      blocks.sort((a, b) => a.compareTo(b))
    }
  }
  throws(){
    
      if(dist(this.px,this.py,player1.px,player1.py)<=60&&this.held){
       this.xvel = 12*player1.direction
        this.yvel = -17;
        this.held = false;
     }
        
       // print('worked')
     
      
    
    
  }
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
         newxv[newxv.length] = -this.xvel/1.9;
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
         newxv[newxv.length] = -this.xvel/1.9;
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
      if(blocks[i].collideWith == true){
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
        if(this.type!=64){
         newxv[newxv.length] = this.xvel
         newyv[newyv.length] = -this.yvel/2;
        }else{
           newxv[newxv.length] = this.xvel
         newyv[newyv.length] = -this.yvel/20;
        }
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
        if(abs(this.xvel)>=2&&frameCount%floor(random(3,8))==0){
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
         newyv[newyv.length] = -this.yvel/2;
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
  }   
}
function bomber(){
  for(let i=bombs.length-1; i>=0; i--){
    bombs[i].display();
    if(bombs[i].timer<=0||bombs[i].py>=1000){
     bombs.splice(i,1);
      //bombs[i].timer=-1;
      trans = 150;
    }
  }
}