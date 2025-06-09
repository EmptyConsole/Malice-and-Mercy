class arrow{
  constructor(a,b,c,d,e,f,g,h){
    this.x=a
    this.y=b
    this.preX=a
    this.preY=b
    this.sizeX=c
    this.sizeY=d
    this.velocityX=e
    this.velocityY=f
    this.show=g
    // this.gravity = h; // degree
    this.collided=false
    this.link = h;
    //blocks[blocks.length]=new block(this.x,this.y,this.sizeX,this.sizeY,14,0,0,0)
    blocks[blocks.length]=new block(this.x,this.y,this.sizeX,this.sizeY,14,0,0,0);
    blocks[blocks.length-1].link = this.link;
    blocks[blocks.length-1].collideWith = false;
    blocks[blocks.length-1].fullCollide = false;
  }
  ability(){
    // if(this.collided){
      
  //     //Left X
  //   let newx = [];
  //   let newy = [];
  //   let newxv = [];
  //   let newyv = [];
  //   let newj = [];
  //     if(
  //       ((player1.prex+player1.psx/2)<=(this.x-this.sizeX/2)&&
  //       (player1.px+player1.psx/2)>=(this.x-this.sizeX/2)||
  //       (player1.prex+player1.psx/2)<=(this.preX-this.sizeX/2)&&
  //       (player1.px+player1.psx/2)>=(this.x-this.sizeX/2))&&
  //       (player1.prey+player1.psy/2)>(this.y-this.sizeY/2)&&
  //       (player1.prey-player1.psy/2)<(this.y+this.sizeY/2)
  //       ){
  //        newy[newy.length] = player1.py
  //        newx[newx.length] = this.x-this.sizeX/2-player1.psx/2
  //        newyv[newyv.length] = player1.yvel
  //        newxv[newxv.length] = 0
  //        newj[newj.length] = false
  //   }
  //   if(newx.length>0){
  //     let short = 0
  //     for(var c=0; c<newx.length; c++){
  //       if(dis(newx[c],newy[c],player1.prex,player1.prey)<dis(newx[short],newy[short],player1.prex,player1.prey)){
  //          short = c
  //          }
  //     }
  //     player1.px = newx[short]
  //     player1.py = newy[short]
  //     player1.xvel = newxv[short]
  //     player1.yvel = newyv[short]
  //     if(newj[short]){
  //       player1.jumps = player1.maxJumps
  //     }
  //   }
  //   //Right X
  //   newx = [];
  //   newy = [];
  //   newxv = [];
  //   newyv = [];
  //   newj = [];
  //     if(
  //       ((player1.prex-player1.psx/2)>=(this.x+this.sizeX/2)&&
  //       (player1.px-player1.psx/2)<=(this.x+this.sizeX/2)||
  //       (player1.prex-player1.psx/2)>=(this.preX+this.sizeX/2)&&
  //       (player1.px-player1.psx/2)<=(this.x+this.sizeX/2))&&
  //       (player1.prey+player1.psy/2)>(this.y-this.sizeY/2)&&
  //       (player1.prey-player1.psy/2)<(this.y+this.sizeY/2)
  //       ){
  //        newy[newy.length] = player1.py
  //        newx[newx.length] = this.x+this.sizeX/2+player1.psx/2
  //        newyv[newyv.length] = player1.yvel
  //        newxv[newxv.length] = 0
  //        newj[newj.length] = false
  //     }
  //   if(newx.length>0){
  //     let short = 0
  //     for(var c=0; c<newx.length; c++){
  //       if(dis(newx[c],newy[c],player1.prex,player1.prey)<dis(newx[short],newy[short],player1.prex,player1.prey)){
  //          short = c
  //          }
  //     }
  //     player1.px = newx[short]
  //     player1.py = newy[short]
  //     player1.xvel = newxv[short]
  //     player1.yvel = newyv[short]
  //     if(newj[short]){
  //       player1.jumps = player1.maxJumps
  //     }
  //   }
  //   //Upper Y
  //   newx = [];
  //    newy = [];
  //   newxv = [];
  //   newyv = [];
  // newj = [];
  //     if(
  //       ((player1.prey+player1.psy/2)<=(this.y-this.sizeY/2)&&
  //       (player1.py+player1.psy/2)>=(this.y-this.sizeY/2)||
  //       (player1.prey+player1.psy/2)<=(this.preY-this.sizeY/2)&&
  //       (player1.py+player1.psy/2)>=(this.y-this.sizeY/2))&&
  //       (player1.px+player1.psx/2)>(this.x-this.sizeX/2)&&
  //       (player1.px-players.psx/2)<(this.x+this.sizeX/2)
  //       ){
  //        newx[newx.length] = player1.px
  //        newy[newy.length] = this.y-this.sizeY/2-player1.psy/2
  //        newxv[newxv.length] = player1.xvel
  //        newyv[newyv.length] = 0
  //        newj[newj.length] = true
  //     }
  //   if(newx.length>0){
  //     let short = 0
  //     for(var c=0; c<newx.length; c++){
  //       if(dis(newx[c],newy[c],player1.prex,player1.prey)<dis(newx[short],newy[short],player1.prex,player1.prey)){
  //          short = c
  //          }
  //     }
  //     if(newj[short]){
  //       player1.jumps = player1.maxJumps
  //     }
  //                     player1.px = newx[short]
  //     player1.py = newy[short]
  //       if(player1.yvel>=5){
  //          for(var u = 0; u<3; u++){
  //           bulletsP[bulletsP.length] = new bulletP(player1.px+random(-5,5),player1.py+12,player1.px+cos(random(-180,0)*PI/180)*10-player1.xvel*2,player1.py+12+sin(random(-180,0)*PI/180)*10,random(1,4));
  //          }
  //          }
  //       if(abs(player1.xvel)>=2&&frameCount%floor(random(3,8))==0){
  //       for(var u = 0; u<1; u++){
  //         bulletsP[bulletsP.length] = new bulletP(player1.px+random(-5,5),player1.py+12,player1.px-this.xvel,this.py-random(-2,3),random(1,5));
  //     }
  //     }
  //     player1.xvel = newxv[short]
  //     player1.yvel = newyv[short]
  //   }
  //    newx = [];
  //    newy = [];
  //   newxv = [];
  //   newyv = [];
  // newj = [];
  //   //Lower Y
  //     if(
  //       ((player1.prey-player1.psy/2)>=(this.y+this.sizeY/2)&&
  //       (player1.py-player1.psy/2)<=(this.y+this.sizeY/2)||
  //       (player1.prey-player1.psy/2)>=(this.preY+this.sizeY/2)&&
  //       (player1.py-player1.psy/2)<=(this.y+this.sizeY/2))&&
  //       (player1.px+player1.psx/2)>(this.x-this.sizeX/2)&&
  //       (player1.px-player1.psx/2)<(this.x+this.sizeX/2)
  //       ){
  //        newx[newx.length] = player1.px
  //        newy[newy.length] =this.y+this.sizeY/2+player1.psy/2
  //        newxv[newxv.length] = player1.xvel
  //        newyv[newyv.length] = 0
  //        newj[newj.length] = false
  //     }
  //  if(newx.length>0){
  //     let short = 0
  //     for(var c=0; c<newx.length; c++){
  //       if(dis(newx[c],newy[c],player1.prex,player1.prey)<dis(newx[short],newy[short],player1.prex,player1.prey)){
  //          short = c
  //          }
  //     }
  //     player1.px = newx[short]
  //     player1.py = newy[short]
  //     player1.xvel = newxv[short]
  //     player1.yvel = newyv[short]
  //     if(newj[short]){
  //       player1.jumps = player1.maxJumps
  //     }
  //   }
    // }
  }
  move(){
    this.preX=this.x
    this.preY=this.y
    this.x+=this.velocityX
    this.y+=this.velocityY
  }
  display(){
    //print(this.x)
    imageMode(CENTER)
    // image(this.show,this.x,this.y,this.sizeX,this.sizeY)
    rect(this.x,this.y,this.sizeX,this.sizeY)
  }
  collide(){
    if(this.collided==false){
      //Interaction with blocks(array of class block)
    //A system taking the possible new x and y positions, but only choosing the closest one, or right one.
    //Left X
    let newx = [];
    let newy = [];
    let newxv = [];
    let newyv = [];
    let newj = [];
    for(var i=0; i<blocks.length; i++){
      let bl = blocks[i];
      if(
        ((this.preX+this.sizeX/2)<=(bl.bx-bl.bsx/2)&&
        (this.x+this.sizeX/2)>=(bl.bx-bl.bsx/2)||
        (this.preX+this.sizeX/2)<=(bl.prebx-bl.bsx/2)&&
        (this.x+this.sizeX/2)>=(bl.bx-bl.bsx/2))&&
        (this.preY+this.sizeY/2)>(bl.by-bl.bsy/2)&&
        (this.preY-this.sizeY/2)<(bl.by+bl.bsy/2)
        ){
         newy[newy.length] = this.y
         newx[newx.length] = bl.bx-bl.bsx/2-this.sizeX/2
         newyv[newyv.length] = this.velocityY
         newxv[newxv.length] = 0
         newj[newj.length] = false
        //blocks[blocks.length]=new block(this.x,this.y,this.sizeX,this.sizeY,14,0,0,0)
      }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.preX,this.preY)<dis(newx[short],newy[short],this.preX,this.preY)){
           short = c
           }
      }
      this.x = newx[short]
      this.y = newy[short]
      this.velocityX = newxv[short]
      this.velocityY = newyv[short]
      if(newj[short]){
        this.jumps = this.maxJumps
      }
      let linkI = blocks.findIndex(hold=>hold.link==this.link);
      if(linkI != -1){
        blocks[linkI].collideWith = true;
        blocks[linkI].fullCollide = true;
      }
        
    }
    //Right X
    newx = [];
    newy = [];
    newxv = [];
    newyv = [];
    newj = [];
    for(var i=0; i<blocks.length; i++){
      let bl = blocks[i];
      if(
        ((this.preX-this.sizeX/2)>=(bl.bx+bl.bsx/2)&&
        (this.x-this.sizeX/2)<=(bl.bx+bl.bsx/2)||
        (this.preX-this.sizeX/2)>=(bl.prebx+bl.bsx/2)&&
        (this.x-this.sizeX/2)<=(bl.bx+bl.bsx/2))&&
        (this.preY+this.sizeY/2)>(bl.by-bl.bsy/2)&&
        (this.preY-this.sizeY/2)<(bl.by+bl.bsy/2)
        ){
         newy[newy.length] = this.y
         newx[newx.length] = bl.bx+bl.bsx/2+this.sizeX/2
         newyv[newyv.length] = this.velocityY
         newxv[newxv.length] = 0
         newj[newj.length] = false
      }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.preX,this.preY)<dis(newx[short],newy[short],this.preX,this.preY)){
           short = c
           }
      }
      this.x = newx[short]
      this.y = newy[short]
      this.velocityX = newxv[short]
      this.velocityY = newyv[short]
      if(newj[short]){
        this.jumps = this.maxJumps
      }
      let linkI = blocks.findIndex(hold=>hold.link==this.link);
        if(linkI != -1){
        blocks[linkI].collideWith = true;
        blocks[linkI].fullCollide = true;
      }
    }
    //Upper Y
    newx = [];
     newy = [];
    newxv = [];
    newyv = [];
  newj = [];
    for(var i=0; i<blocks.length; i++){
        let bl = blocks[i];
      if(
        ((this.preY+this.sizeY/2)<=(bl.by-bl.bsy/2)&&
        (this.y+this.sizeY/2)>=(bl.by-bl.bsy/2)||
        (this.preY+this.sizeY/2)<=(bl.preby-bl.bsy/2)&&
        (this.y+this.sizeY/2)>=(bl.by-bl.bsy/2))&&
        (this.x+this.sizeX/2)>(bl.bx-bl.bsx/2)&&
        (this.x-this.sizeX/2)<(bl.bx+bl.bsx/2)
        ){
         newx[newx.length] = this.x
         newy[newy.length] = bl.by-bl.bsy/2-this.sizeY/2
         newxv[newxv.length] = this.velocityX
         newyv[newyv.length] = 0
         newj[newj.length] = true
        blocks[i].broken = true;
      }
    }
    if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.preX,this.preY)<dis(newx[short],newy[short],this.preX,this.preY)){
           short = c
           }
      }
      if(newj[short]){
        this.jumps = this.maxJumps
      }
                      this.x = newx[short]
      this.y = newy[short]
        if(this.velocityY>=5){
           for(var u = 0; u<3; u++){
            bulletsP[bulletsP.length] = new bulletP(this.x+random(-5,5),this.y+12,this.x+cos(random(-180,0)*PI/180)*10-this.velocityX*2,this.y+12+sin(random(-180,0)*PI/180)*10,random(1,4));
           }
           }
        if(abs(this.velocityX)>=2&&frameCount%floor(random(3,8))==0){
        for(var u = 0; u<1; u++){
          bulletsP[bulletsP.length] = new bulletP(this.x+random(-5,5),this.y+12,this.x-this.velocityX,this.y-random(-2,3),random(1,5));
      }
      }
      let linkI = blocks.findIndex(hold=>hold.link==this.link);
        if(linkI != -1){
        blocks[linkI].collideWith = true;
        blocks[linkI].fullCollide = true;
      }
      this.velocityX = newxv[short]
      this.velocityY = newyv[short]
    }
     newx = [];
     newy = [];
    newxv = [];
    newyv = [];
  newj = [];
    //Lower Y
    for(var i=0; i<blocks.length; i++){
      let bl = blocks[i];
      if(
        ((this.preY-this.sizeY/2)>=(bl.by+bl.bsy/2)&&
        (this.y-this.sizeY/2)<=(bl.by+bl.bsy/2)||
        (this.preY-this.sizeY/2)>=(bl.preby+bl.bsy/2)&&
        (this.y-this.sizeY/2)<=(bl.by+bl.bsy/2))&&
        (this.x+this.sizeX/2)>(bl.bx-bl.bsx/2)&&
        (this.x-this.sizeX/2)<(bl.bx+bl.bsx/2)
        ){
         newx[newx.length] = this.x
         newy[newy.length] = bl.by+bl.bsy/2+this.sizeY/2
         newxv[newxv.length] = this.velocityX
         newyv[newyv.length] = 0
         newj[newj.length] = false
      }
    }
   if(newx.length>0){
      let short = 0
      for(var c=0; c<newx.length; c++){
        if(dis(newx[c],newy[c],this.preX,this.preY)<dis(newx[short],newy[short],this.preX,this.preY)){
           short = c
           }
      }
     let linkI = blocks.findIndex(hold=>hold.link==this.link);
        if(linkI != -1){
        blocks[linkI].collideWith = true;
        blocks[linkI].fullCollide = true;
      }
      this.x = newx[short]
      this.y = newy[short]
      this.velocityX = newxv[short]
      this.velocityY = newyv[short]
    }
    }
    
  }
}