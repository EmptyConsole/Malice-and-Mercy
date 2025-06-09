class bullet{
  constructor(a,b,c,d,e){
    //x and y projectile
    this.prox = a;
    this.proy = b;
    //x and y target
    this.proxt = c;
    this.proyt = d;
    //speed to move at
    this.speed = e;
    this.rotation = random(0,180);
    this.direction = random(0,100);
    if(this.direction>=50){
      this.direction = 1;
    }else{
      this.direction = -1;
    }
    this.life = 300;
  }
  move(){
    this.life--;
    let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
    let xv = (this.proxt-this.prox)/hyp*this.speed;
    let yv = (this.proyt-this.proy)/hyp*this.speed;
    this.prox+=xv;
    this.proy+=yv;
    this.proxt+=xv;
    this.proyt+=yv;
    this.rotation+=this.direction*10;
    this.show();
    for(let i=0; i<blocks.length; i++){
      if(rectHit(this.prox,this.proy,blocks[i].bx,blocks[i].by,20,20,blocks[i].bsx,blocks[i].bsy)&&blocks[i].life>0&&blocks[i].type!=11&&blocks[i].type!=13 && blocks[i].type!=15){
         this.life=0;
        for(var c=0; c<20; c++){
          let angle = random(0,2*PI);
          let fast = random(2,9);
          bulletsP[bulletsP.length] = new bulletP(this.prox,this.proy,this.prox+cos(angle)*50,this.proy+sin(angle)*50,fast,"4");
          
         // blocks[i].showcv+=6/(blocks[i].bsx*blocks[i].bsy);
          
        }
        blocks[i].broken = true;
        
      }
    }
  }
  show(){
    
    push();
    translate(this.prox,this.proy)
    rotate(this.rotation*PI/180);
    noFill();
    stroke("#DEC6B8");
    image(tileFull[3][0],0,0,30,30)
    pop();
  }
}
class bulletP{
  constructor(a,b,c,d,e,f){
    //x and y projectile
    this.prox = a;
    this.proy = b;
    //x and y target
    this.proxt = c;
    this.proyt = d;
    //speed to move at
    this.speed = e;
    this.size = floor(random(8,12));
    this.msize = 8;
    this.roll = 0;
    this.type = f ?? 0;
    this.drag = 1.1;
    this.typer = -1;
    this.screened = false;
    this.full = false;
  }
   compareTo(other){
    return other.typer;
  }
  move(){
    let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
    let xv = (this.proxt-this.prox)/hyp*this.speed;
    let yv = (this.proyt-this.proy)/hyp*this.speed;
    this.prox+=xv;
    this.proy+=yv;
    this.proxt+=xv;
    this.proyt+=yv;
    this.show();
    this.speed/=this.drag;
    this.size-=0.2;
    if(this.size<=0){
      this.size=0;
    }
    this.roll-=(xv+yv)/10
    
  }
  show(){
    push();
    translate(this.prox,this.proy)
    fill("#28293c");
    rotate(this.roll)
    noStroke();
    //good job shayer you came to fix it, this is my particle class change ellipse to rect!
    if(this.type=="1"){
       let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[2][1],0,0,this.size/this.msize*60,this.size/this.msize*60);
      
      
       }else if(this.type=="2"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[0][1],0,0,this.size/this.msize*60,this.size/this.msize*60);        
       }else if(this.type=="3"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[1][1],0,0,this.size/this.msize*60,this.size/this.msize*60);        
       }else if(this.type=="4"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[3][0],0,0,this.size/this.msize*40,this.size/this.msize*40);        
       }else if(this.type=="5"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[3][1],0,0,this.size/this.msize*30,this.size/this.msize*30);        
       }else if(this.type=="6"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[0][2],0,0,this.size/this.msize*90,this.size/this.msize*90);        
       }else if(this.type=="7"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[1][2],0,0,this.size/this.msize*90,this.size/this.msize*90);        
       }else if(this.type=="8"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[2][2],0,0,this.size/this.msize*60,this.size/this.msize*60);        
       }else if(this.type=="9"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[3][2],0,0,this.size/this.msize*70,this.size/this.msize*70);        
       }else if(this.type=="10"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[0][3],0,0,this.size/this.msize*70,this.size/this.msize*70);        
       }else if(this.type=="11"){
             let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
       let xv = (this.proxt-this.prox)/hyp*this.speed;
       let yv = (this.proyt-this.proy)/hyp*this.speed;
       rotate(atan2(yv,xv)-45*PI/180);
      image(playerSprite[1][3],0,0,this.size/this.msize*70,this.size/this.msize*70);        
       }else if(this.type == 0){
      rect(0,0,this.size,this.size);
  }else{
    //image(tileSprite[9][5],0,0,this.size*2,this.size*2)
    fill(this.type);
    if(this.screened){
      tint(255,255,255,200)
    }
    rect(0,0,this.size,this.size);
  }
    pop();
  }
}
//also used for blockP
function bulletShow(){
  for(var i = 0; i<bullets.length; i++){
    bullets[i].move();
  }
  for(var i = 0; i<bulletsP.length; i++){
    bulletsP[i].move();
  }
  for(var i = 0; i<blockP.length; i++){
    blockP[i].work();
  }
}