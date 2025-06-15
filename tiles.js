

//Level Editor
function levelEditor(){
  
  if(levelEdit){
    if(keyIsDown(49)){
      preFrame[0] = true;
      let div = 9;
      let outward = 70;
      let offer = 360/9*4.5*PI/180;
      let targ = -1;
      
      for(let i=0; i<div; i++){
      if(dis(mouserH.x+sin(-2*PI/div*i+offer)*outward,mouserH.y+cos(-2*PI/div*i+offer)*outward,mouser.x,mouser.y)<=20){
        targ = i;
      }
      }
      push();
      stroke(255,100);
      line(mouser.x,mouser.y,mouserH.x,mouserH.y);
      translate(mouserH.x,mouserH.y);
      stroke(255,200);
      ellipse(0,0,10,10);
      translate(0,-outward);
      if(targ==0){
        scale(1.2,1.2);
      }
      translate(0,outward);
      rect(0,-outward,30,30,5);
      if(targ==0){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      rotate(2*PI/div);
      
      translate(0,-outward);
      if(targ==1){
        scale(1.2,1.2);
      }
      translate(0,outward);
      rect(0,-outward,30,15,5);
      if(targ==1){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==2){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinSpike(0,-outward,200);
      if(targ==2){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==3){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinCheck(0,-outward,30,200);
      if(targ==3){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==4){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinTurret(0,-outward,0,200);
      if(targ==4){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==5){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinPortal(0,-outward,200);
      if(targ==5){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==6){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinSign(0,-outward,200);
      if(targ==6){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==7){
        scale(1.2,1.2);
      }
      translate(0,outward);
      rect(0+random(-1,1),-outward+random(-1,1),30,30,5);
      if(targ==7){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==8){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinLaser(0,-outward,200,200);
      if(targ==8){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      pop();
    }else if(preFrame[0] == true){
      let div = 9;
      let outward = 70;
      let offer = 360/9*4.5*PI/180;
      for(let i=0; i<div; i++){
        
            if(dis(mouserH.x+sin(-2*PI/div*i+offer)*outward,mouserH.y+cos(-2*PI/div*i+offer)*outward,mouser.x,mouser.y)<=20){
           placeT = i+1;
              if(placeT>=5){
                placeT++;
              }
        }
      }
      preFrame[0] = false;
    ///START BOUNDRIEEEE
    }
    if(keyIsDown(50)){
      preFrame[1] = true;
      let div = 9;
      let outward = 70;
      let offer = 360/9*4.5*PI/180;
      let targ = -1;
      for(let i=0; i<div; i++){
      if(dis(mouserH.x+sin(-2*PI/div*i+offer)*outward,mouserH.y+cos(-2*PI/div*i+offer)*outward,mouser.x,mouser.y)<=20){
        targ = i;
      }
      }
      push();
      stroke(255,100);
      line(mouser.x,mouser.y,mouserH.x,mouserH.y);
      translate(mouserH.x,mouserH.y);
      stroke(255,200);
      ellipse(0,0,10,10);
      translate(0,-outward);
      if(targ==0){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinCam(0,-outward,200);
     // rect(0,-outward,30,30,5);
      if(targ==0){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      rotate(2*PI/div);
      
      translate(0,-outward);
      if(targ==1){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinPlot(0,-outward,200);
      if(targ==1){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==2){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinSpike(0,-outward,200);
      if(targ==2){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==3){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinCheck(0,-outward,30,200);
      if(targ==3){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==4){
        scale(1.2,1.2);
      }
      translate(0,outward);
      image(playerSprite[2][0],0,-outward,60,60)
      //thinTurret(0,-outward,0,200);
      if(targ==4){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==5){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinPortal(0,-outward,200);
      if(targ==5){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==6){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinSign(0,-outward,200);
      if(targ==6){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==7){
        scale(1.2,1.2);
      }
      translate(0,outward);
      rect(0+random(-1,1),-outward+random(-1,1),30,30,5);
      if(targ==7){
        translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      
      rotate(2*PI/div);
      translate(0,-outward);
      if(targ==8){
        scale(1.2,1.2);
      }
      translate(0,outward);
      thinLaser(0,-outward,200,200);
      if(targ==8){
       translate(0,-outward);
        scale(1/(1.2),1/(1.2));
        translate(0,outward);
      }
      pop();
    }else if(preFrame[1] == true){
      let div = 9;
      let outward = 70;
      let offer = 360/9*4.5*PI/180;
      for(let i=0; i<div; i++){
        
            if(dis(mouserH.x+sin(-2*PI/div*i+offer)*outward,mouserH.y+cos(-2*PI/div*i+offer)*outward,mouser.x,mouser.y)<=20){
           placeT = i+11;
        }
      }
      preFrame[1] = false;
    }
    
      
      
      
    if(keyIsDown(48)){
      placeT=5;
    }
    let offx = 5
    let offy = 5
    let positionx = floor((mouser.x-offx)/30)*30+15+offx;
    let positiony = floor((mouser.y-offy)/30)*30+15+offy;
    //-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
  //Placing true start position
    if(placeT==5){
      push();
    let offx = 5
    let offy = 5
    let positionx = floor((mouser.x-offx)/30)*30+15+offx;
    let positiony = floor((mouser.y-offy)/30)*30+15+offy;
    translate(positionx,positiony)
    strokeWeight(3);
    for(let i=0; i<12; i++){
      for(let c=0; c<12; c++){
        stroke(255,10+50-dis(mouser.x,mouser.y,positionx-150+i*30,positiony-150+c*30)/3);
        rect(-150+i*30,-150+c*30,30,30);
      }
    }
    pop();
    noStroke();
    fill(255,60);
    rect(positionx,positiony,30,30);
    push();
      fill(255,10)
      stroke(255,100)
      translate(positionx,positiony);
      ellipse(0,0,50,50);
      rotate(frameCount*PI/180*5);
      rect(0,0,30,30,5);
    pop();
    if(mouseIsPressed){
      player1.startx = positionx;
      player1.starty = positiony;
      player1.checkx = positionx;
      player1.checky = positiony;
    }
   }
    
    if(placeT!=5){
    if(keyIsDown(32)){
      dragPlace();
      selEdit = -1;
    }else{
      if(placing){
        let anchorCenter = createVector((positionx+anchor.x)/2,(positiony+anchor.y)/2);
        let currentBlock = blocks.findIndex(blocks => blocks.bx == anchorCenter.x&&blocks.by == anchorCenter.y);

        if(editMode == "place"){
          if(currentBlock==-1){
          //A bit of flooring by unit helps get a grid lock
          blocks[blocks.length] = new block(anchorCenter.x,anchorCenter.y,abs(ansize.x),abs(ansize.y),placeT,nextRot,nextDelay,nextRange)
          sortBlocks();
          }
        }
        placing = false;
        ansize = createVector(0,0);
      }
      placing = false;
      let at = -1;
      for(let i=0; i<blocks.length; i++){
        if(rectHit(mouser.x,mouser.y,blocks[i].bx,blocks[i].by,0,0,blocks[i].bsx,blocks[i].bsy)&&(keyIsDown(16)||blocks[i].type!=11)){
          at = i;
        }
      }
      if(at>=0){
        stroke(255,100);
        fill(255,30);  
        rect(blocks[at].bx,blocks[at].by,blocks[at].bsx,blocks[at].bsy,20);
      }
      if(selEdit!=at&&selEdit>=0){     
        stroke(255,100);
        fill(255,50);
        rect(blocks[selEdit].bx,blocks[selEdit].by,blocks[selEdit].bsx,blocks[selEdit].bsy,20);
      }
      if(selEdit>=0){
        stroke(255,100)
        fill(255,40)
        let state = [20,20,20,20,20];
        if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
         state[0] = 25;
        }
        if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
         state[1] = 25;
        }
        if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
         state[2] = 25;
        }
        if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
         state[3] = 25;
        }
        if(dis(blocks[selEdit].bx,blocks[selEdit].by,mouser.x,mouser.y)<=12){
         state[4] = 25;
        }
  ellipse(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,state[0],state[0]);
  ellipse(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,state[1],state[1]);
  ellipse(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2,state[2],state[2]);
  ellipse(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2,state[3],state[3]);
  ellipse(blocks[selEdit].bx,blocks[selEdit].by,state[4],state[4]);
      }
      
      if(mouseIsPressed){
          if(selEdit>=0){
            if(lock==-1){
if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx-blocks[selEdit].bsx/2+15,blocks[selEdit].by-blocks[selEdit].bsy/2+15);
  lock = 1;
}
            //top left
if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx+blocks[selEdit].bsx/2-15,blocks[selEdit].by+blocks[selEdit].bsy/2-15);
  lock = 3;
}
            if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx+blocks[selEdit].bsx/2-15,blocks[selEdit].by-blocks[selEdit].bsy/2+15);
  lock = 2;
}
            if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx-blocks[selEdit].bsx/2+15,blocks[selEdit].by+blocks[selEdit].bsy/2-15);
  lock = 4;
}
  if(dis(blocks[selEdit].bx,blocks[selEdit].by,mouser.x,mouser.y)<=12){
      lock = 5;  
    }
            }
    if(lock!=-1&&lock!=5){
      gate = false;
     let anchorCenter = createVector((positionx+anchor.x)/2,(positiony+anchor.y)/2);
    ansize = createVector((positionx-anchor.x)+30,(positiony-anchor.y)+30);
      if(ansize.x<=0){
         ansize.x-=60;
      }
      if(ansize.y<=0){
         ansize.y-=60;
       }
      if(ansize.x!=0&&ansize.y!=0){
          noStroke();
          fill(255,50)
          rect(anchorCenter.x,anchorCenter.y,ansize.x,ansize.y,5);
          noFill();
          stroke(255,120);
          strokeWeight(3)
          //display edges&center
          ellipse(anchorCenter.x-ansize.x/2,anchorCenter.y-ansize.y/2,10,10);
          ellipse(anchorCenter.x+ansize.x/2,anchorCenter.y-ansize.y/2,10,10);
          ellipse(anchorCenter.x-ansize.x/2,anchorCenter.y+ansize.y/2,10,10);
          ellipse(anchorCenter.x+ansize.x/2,anchorCenter.y+ansize.y/2,10,10);
          ellipse(anchorCenter.x,anchorCenter.y,10,10);
          
        }
  }
    if(lock==5){
      if(blocks[selEdit].bsx%60==0){
        offx = 20;
        positionx = floor((mouser.x-offx)/30)*30+15+offx;
      }
     if(blocks[selEdit].bsy%60==0){
        offy = 20;
        positiony = floor((mouser.y-offy)/30)*30+15+offy;
      }
      blocks[selEdit].bx = positionx;
      blocks[selEdit].by = positiony; 
      offx = 5
     offy = 5
     positionx = floor((mouser.x-offx)/30)*30+15+offx;
     positiony = floor((mouser.y-offy)/30)*30+15+offy;
    }
    if(lock!=-1){
      push();
      translate(positionx,positiony)
    strokeWeight(3);
      noFill();
      for(let i=0; i<12; i++){
      for(let c=0; c<12; c++){
        stroke(255,10+50-dis(mouser.x,mouser.y,positionx-150+i*30,positiony-150+c*30)/3);
        rect(-150+i*30,-150+c*30,30,30);
      }
    }
      pop();
    }
}
  }else{
if(lock!=-1&&lock!=5&&selEdit<blocks.length&&selEdit>=0){
   let anchorCenter = createVector((positionx+anchor.x)/2,(positiony+anchor.y)/2);
    ansize = createVector((positionx-anchor.x)+30,(positiony-anchor.y)+30);
      if(ansize.x<=0){
         ansize.x-=60;
      }
      if(ansize.y<=0){
         ansize.y-=60;
       }
  //holder delay and range for turret
  let holder3 = [blocks[selEdit].delay,blocks[selEdit].range];
  //hold rotation
  let holder2 = blocks[selEdit].rotation;
  //hold type
  let holder = blocks[selEdit].type;
      if(keyIsDown(49)){
        holder=1;
      }
      if(keyIsDown(50)){
        holder=2;
      }
      if(keyIsDown(51)){
        holder=3;
      }
  //blocks[selEdit].blockSprite.remove();
  blocks.splice(selEdit,1);
   blocks[blocks.length] = new block(anchorCenter.x,anchorCenter.y,abs(ansize.x),abs(ansize.y),holder,holder2,holder3[0],holder3[1])
  selEdit = blocks.length-1;
}
    lock = -1;
  }
    }
  }
    //-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
  if(keyIsDown(16)){
    noStroke();
    fill(255,50)
    rect(positionx,positiony,30,30,2);
  }
  }
}
//Pressing
function mousePressed(){
  if(levelEdit){
    
    let at = -1;
    for(let i=0; i<blocks.length; i++){
      if(rectHit(mouser.x,mouser.y,blocks[i].bx,blocks[i].by,0,0,blocks[i].bsx,blocks[i].bsy)&&(keyIsDown(16)||blocks[i].type!=11)){
        at = i;
      }
    }
    if(selEdit>=0){
    if(lock==-1){
if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2,mouser.x,mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx-blocks[selEdit].bsx/2+15,blocks[selEdit].by-blocks[selEdit].bsy/2+15);
  lock = 1;
}
            //top left
if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx+blocks[selEdit].bsx/2-15,blocks[selEdit].by+blocks[selEdit].bsy/2-15);
  lock = 3;
}
            if(dis(blocks[selEdit].bx-blocks[selEdit].bsx/2,blocks[selEdit].by+blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx+blocks[selEdit].bsx/2-15,blocks[selEdit].by-blocks[selEdit].bsy/2+15);
  lock = 2;
}
            if(dis(blocks[selEdit].bx+blocks[selEdit].bsx/2,blocks[selEdit].by-blocks[selEdit].bsy/2, mouser.x, mouser.y)<=12){
    anchor = createVector(blocks[selEdit].bx-blocks[selEdit].bsx/2+15,blocks[selEdit].by+blocks[selEdit].bsy/2-15);
  lock = 4;
}
  if(dis(blocks[selEdit].bx,blocks[selEdit].by,mouser.x,mouser.y)<=12){
      lock = 5;  
    }
            }
    }
  if(lock==-1){
    selEdit = at;
  }
  }
      if(dis(mouseX,mouseY,950,50)<=50){
       bar = !bar; 
      }

}
function keyPressed() {
        //restarter
    // if(keyIsDown(82)&&!keyIsDown(16)){
  if(keyIsDown(82)){
      if(playerEdit){
        player1.restarter();
      }else{
         player1.respawn();
      }
    }
  // if(keyIsDown(71)){
  //   player1.skinx = floor(random(0,15))
  // player1.skiny = floor(player1.skinx/5);
  //   player1.skinx = floor(random(0,15))
  // }
  //   if(keyIsDown(220)){
  //   levelEdit = !levelEdit;
  // }
  // if(keyIsDown(66)){
  //   camP = !camP;
  //   zoom = 100;
  // }
  if(levelEdit){
    if(keyIsDown(13)){
      blocks.sort((a, b) => a.compareTo(b))
    }
    if(keyIsDown(49)||keyIsDown(50)){
      mouserH=mouser;
    }
    if(keyIsDown(73)){
      player1.showable = !player1.showable;
    }
    if(selEdit>=0){
      if(keyIsDown(87)){
        blocks[selEdit].rotation = nextRot;
        blocks[selEdit].range = nextRange;   
        blocks[selEdit].delay = nextDelay;
      }
    }
    if(keyIsDown(69)){
      let build = "";
       for(let i=0; i<blocks.length; i++){  
         build+=buildChange(blocks[i].bx)+buildChange(blocks[i].by)+buildChange(blocks[i].bsx)+buildChange(blocks[i].bsy)+buildChange(blocks[i].type)+buildChange(blocks[i].rotation)+buildChange(blocks[i].delay)+buildChange(blocks[i].range)+"C";
        
       }
      levelCode=build;
      buildLevel();
      blocks.sort((a, b) => a.compareTo(b))
    }
    if(keyIsDown(192)){
      playerEdit = !playerEdit;
    }
    if(selEdit>=0){
      if(keyIsDown(8)){
         // blocks[selEdit].blockSprite.remove();
        blocks.splice(selEdit,1);
        selEdit = -1;  
      }
    }
    if(selEdit>=0){
      if(keyIsDown(70)){
        blocks[selEdit].rotation+=90;
        console.log(blocks[selEdit].rotation)
      }
    }else{
      if(keyIsDown(82)||keyIsDown(70)){
        nextRot+=90;
        nextRot=nextRot%360;
      }
    }
    if(selEdit>=0){
       if(blocks[selEdit].type==6){
         if(keyIsDown(16)){
           if(keyIsDown(38)){
              blocks[selEdit].delay++;
          }
           if(keyIsDown(40)){
              blocks[selEdit].delay--;
          }
           if(keyIsDown(37)){
              blocks[selEdit].range--;
          }
           if(keyIsDown(39)){
              blocks[selEdit].range++;
          }
           if(keyIsDown(82)){
             blocks[selEdit].range = 5;
             blocks[selEdit].delay = 0;
           }
         }
       }
      if(blocks[selEdit].type==7||blocks[selEdit].type==15||blocks[selEdit].type==1){
         if(keyIsDown(16)){
           if(keyIsDown(38)){
              blocks[selEdit].delay++;
          }
           if(keyIsDown(40)){
               blocks[selEdit].delay--;
          }
           if(keyIsDown(37)){
               blocks[selEdit].delay--;
          }
           if(keyIsDown(39)){
               blocks[selEdit].delay++;
          }
         }
       }
      if(blocks[selEdit].type==8){
         if(keyIsDown(16)){
           if(keyIsDown(38)){
              blocks[selEdit].range++;
          }
           if(keyIsDown(40)){
               blocks[selEdit].range--;
          }
           if(keyIsDown(37)){
               blocks[selEdit].range--;
          }
           if(keyIsDown(39)){
               blocks[selEdit].range++;
          }
         }
       }
      if(blocks[selEdit].type==10||blocks[selEdit].type==11||blocks[selEdit].type==12){
         if(keyIsDown(16)){
           if(keyIsDown(38)){
              blocks[selEdit].range++;
          }
           if(keyIsDown(40)){
               blocks[selEdit].range--;
          }
           if(keyIsDown(37)){
               blocks[selEdit].delay--;
          }
           if(keyIsDown(39)){
               blocks[selEdit].delay++;
          }
         }
       }
      //change sign
      if(keyIsDown(81)){
        if(blocks[selEdit].type==8){
          let holder = "";
          holder+=prompt("Add sign text here.");
          blocks[selEdit].delay = str(holder);
        print("Sign text has been changed.");
        }
      }
    }
     if(keyIsDown(16)&&selEdit==-1){
        if(keyIsDown(38)){
             nextDelay++;
          }
           if(keyIsDown(40)){
             nextDelay--;
          }
           if(keyIsDown(37)){
             nextRange--;
          }
           if(keyIsDown(39)){
             nextRange++;
          }
      }
    if(keyIsDown(88)&&selEdit!=-1){
      nextDelay = blocks[selEdit].delay;
      nextRange = blocks[selEdit].range;
    }
    if(keyIsDown(67)&&selEdit!=-1){
      copyBlock=blocks[selEdit];
      copied=true;
    }
    if(copied){
    if(keyIsDown(86)){
      blocks[blocks.length]= new block(copyBlock.bx,copyBlock.by,copyBlock.bsx,copyBlock.bsy,copyBlock.type,copyBlock.rotation,copyBlock.delay,copyBlock.range);
      let offx = 5
    let offy = 5
    let positionx = floor((mouser.x-offx)/30)*30+15+offx;
    let positiony = floor((mouser.y-offy)/30)*30+15+offy;
      blocks[blocks.length-1].bx = positionx;
      blocks[blocks.length-1].by = positiony;
    }
  }
  }
      if(keyIsDown(13)){
      let build = "";
       for(let i=0; i<blocks.length; i++){  
         build+=buildChange(blocks[i].bx)+buildChange(blocks[i].by)+buildChange(blocks[i].bsx)+buildChange(blocks[i].bsy)+buildChange(blocks[i].type)+buildChange(blocks[i].rotation)+buildChange(blocks[i].delay)+buildChange(blocks[i].range)+"C";
        
       }
      copyStringToClipboard(build);
    }
}
function dragPlace(){
  //redeclared for let variables
  if(levelEdit){
    push();
    let offx = 5
    let offy = 5
    let positionx = floor((mouser.x-offx)/30)*30+15+offx;
    let positiony = floor((mouser.y-offy)/30)*30+15+offy;
    translate(positionx,positiony)
    strokeWeight(3);
    for(let i=0; i<12; i++){
      for(let c=0; c<12; c++){
        stroke(255,10+50-dis(mouser.x,mouser.y,positionx-150+i*30,positiony-150+c*30)/3);
        rect(-150+i*30,-150+c*30,30,30);
      }
    }
    pop();
  }
    let offx = 5
    let offy = 5
    let positionx = floor((mouser.x-offx)/30)*30+15+offx;
    let positiony = floor((mouser.y-offy)/30)*30+15+offy;
    let anchorCenter = createVector((positionx+anchor.x)/2,(positiony+anchor.y)/2);
    //Placing with mouse
    if(mouseIsPressed){
      if(placing == false){
        anchor = createVector(positionx,positiony);
        placing = true;
        //
      }else{
        ansize = createVector((positionx-anchor.x)+30,(positiony-anchor.y)+30);
        if(ansize.x<=0){
          ansize.x-=60;
        }
        if(ansize.y<=0){
          ansize.y-=60;
        }
        if(ansize.x!=0&&ansize.y!=0){
          noStroke();
          fill(255,50)
          rect(anchorCenter.x,anchorCenter.y,ansize.x,ansize.y,5);
          noFill();
          stroke(255,120);
          strokeWeight(3)
          //display edges&center
          ellipse(anchorCenter.x-ansize.x/2,anchorCenter.y-ansize.y/2,10,10);
          ellipse(anchorCenter.x+ansize.x/2,anchorCenter.y-ansize.y/2,10,10);
          ellipse(anchorCenter.x-ansize.x/2,anchorCenter.y+ansize.y/2,10,10);
          ellipse(anchorCenter.x+ansize.x/2,anchorCenter.y+ansize.y/2,10,10);
          ellipse(anchorCenter.x,anchorCenter.y,10,10);
          
        }
      }
      
      //  
    }else if(placing == true&&ansize.x!=0&&ansize.y!=0){
        let currentBlock = blocks.findIndex(blocks => blocks.bx == anchorCenter.x&&blocks.by == anchorCenter.y);

        if(editMode == "place"){
          if(currentBlock==-1){
          //A bit of flooring by unit helps get a grid lock
          blocks[blocks.length] = new block(anchorCenter.x,anchorCenter.y,abs(ansize.x),abs(ansize.y),placeT,nextRot,nextDelay,nextRange)
          sortBlocks();
          }
        }
        placing = false;
        ansize = createVector(0,0);
    }else{
     placing = false;
      noStroke();
      //fill(255,200);
      noFill()
      if(placeT == 1||placeT==9){
        rect(positionx,positiony,30,30);
      }
      if(placeT == 2){
        rect(positionx,positiony-7.5,30,15);
      }
      if(placeT == 3){
        thinSpike(positionx,positiony,80);
      }
      if(placeT == 4){
        thinCheck(positionx,positiony,25,60);
      }
      if(placeT == 6){
        thinTurret(positionx,positiony,0,60);
      }
      if(placeT == 7){
        thinPortal(positionx,positiony,60);
      }
      if(placeT == 8){
        thinSign(positionx,positiony,60);
      }
      if(placeT == 10){
      thinLaser(positionx,positiony,0,60);
      }
      if(placeT == 11){
      thinCam(positionx,positiony,60);
      }
      if(placeT == 15){
        image(playerSprite[2][0],positionx,positiony,60,60);
      }
      if(placeT == 16){
        text("G",positionx,positiony,60,60);
      }
    }
}
//-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-
//Compare Blocks function for sorting
function compareBlocks(a, b) {
    return a.compareTo(b);
}
//Sorting blocks and smoothing them
function sortBlocks(){
  let offx = 5
  let offy = 5
  let positionx = floor((mouser.x-offx)/30)*30+15+offx;
  let positiony = floor((mouser.y-offy)/30)*30+15+offy;
  let currentBlock = blocks.findIndex(blocks => blocks.bx == positionx&&blocks.by == positiony);
  blocks.sort((a, b) => a.compareTo(b))
        for(let i=0; i<blocks.length; i++){
          //Usage as what is next to it
          let bl = blocks[i];
          //I used <=
          let holder = [false,false,false,false];
          for(let c2 = 1; c2<=2; c2++){
            if(blocks.findIndex(blocks => blocks.bx == bl.bx-30&&blocks.by == bl.by&&blocks.type == c2)>=0&&!holder[0]){
               blocks[i].sides[0] = c2
              holder[0] = true
            }else if(!holder[0]){
               blocks[i].sides[0] = 0
            }
            if(blocks.findIndex(blocks => blocks.bx == bl.bx+30&&blocks.by == bl.by&&blocks.type == c2)>=0&&!holder[1]){
               blocks[i].sides[2] = c2
              holder[1] = true
            }else if(!holder[1]){
               blocks[i].sides[2] = 0
            }
            if(blocks.findIndex(blocks => blocks.bx == bl.bx&&blocks.by == bl.by-30&&blocks.type == c2)>=0&&!holder[2]){
               blocks[i].sides[1] = c2
              holder[2] = true
            }else if(!holder[2]){
               blocks[i].sides[1] = 0
            }
            if(blocks.findIndex(blocks => blocks.bx == bl.bx&&blocks.by == bl.by+30&&blocks.type == c2)>=0&&!holder[3]){
               blocks[i].sides[3] = c2
              holder[3] = true
            }else if(!holder[3]){
               blocks[i].sides[3] = 0
            }
          }
        }
}
function thinSpike(x,y,w){
  push();
  translate(x,y);
  rotate(nextRot*PI/180);
  strokeWeight(5);
  stroke(255,w);
  noFill();
  beginShape();
  vertex(-7.5,0);
  vertex(-15,15);
  vertex(0,15);
  endShape(CLOSE);
  beginShape();
  vertex(7.5,0);
  vertex(15,15);
  vertex(0,15);
  endShape(CLOSE);
  pop();
}
function thinCheck(x,y,z,w){
  push();
  translate(x,y);
  rotate(nextRot*PI/180)
  strokeWeight(5);
  stroke(255,w);
  rect(0,-5,10,40,5,5,1,1);
  ellipse(0,-20,z,z);
  line(5,-5,15,15);
  line(-5,-5,-15,15);
  pop();
  }
function trueStart(x){
  push();
      fill(255,10)
      stroke(255,x)
      translate(player1.startx,player1.starty);
  scale(0.3,0.3)
    //  ellipse(0,0,50,50);
      rotate(frameCount*PI/180*5);
     // rect(0,0,30,30,5);
    pop();
}
function buildChange(x){
  if(typeof x === "string"&&x!=0){
    return("$"+x+"$")
  }
  if(x>=0){
    return("A"+x);
  }else{
    return("B"+-x)
  }
  
}
function thinTurret(x,y,z,w){
  push();
  translate(x,y);
  rotate(nextRot*PI/180);
  strokeWeight(5);
  stroke(255,w);
  noFill();
  rect(0,0,30,30,3);
  rect(0,20-z/2,15+z,10-z,3);
  rotate(frameCount*PI/180*3);
  rect(0,0,15,15,3);
  pop();
}
function thinPortal(x,y,w){
    push();
    translate(x,y);
    rotate(frameCount*PI/180*5);
    strokeWeight(5);
    stroke(255,w);
    noFill();
    rect(0,0,40,40,5);
    rect(0,0,19,19,5);
    rotate(-frameCount*PI/180*10);
    rect(0,0,30,30,5);
    pop();
}
function thinSign(x,y,w){
  push();
  translate(x,y);
  rotate(nextRot*PI/180)
  noFill();
  stroke(255,w);
  strokeWeight(5)
  rect(0,-10,30,20,3);
  rect(0,7.5,1,15,0.5);
  strokeWeight(2)
  line(-10,-13,-5,-13);
  line(-5,-13,-2,-14);
  line(-2,-14,5,-13);
  line(5,-13,10,-13);
  line(10,-7,5,-8);
  line(5,-8,0,-7);
  line(0,-7,-5,-7);
  line(-5,-7,-10,-8);
  pop();
}
function thinLaser(x,y,z,w){
  push();
  translate(x,y);
   rotate(-nextRot*PI/180)
  strokeWeight(5);
  stroke(255,w);
  noFill();
  rect(0,0,30,30,3);
  line(12,15,7,25);
  line(-12,15,-7,25);
  line(0,15,0,20)
  rotate(frameCount*PI/180*3);
  rect(0,0,15,15,3);
  pop();
}
function thinCam(x,y,w){
  push();
  strokeWeight(5);
  translate(x,y)
  rotate(-nextRot*PI/180)
  noFill();
  stroke(255,w);
  arc(0,13,50,50,-PI+PI/6,-PI/6);
  arc(0,-13,50,50,PI/6,-PI-PI/6);
  ellipse(0,0,10,10);
  pop()
}
function thinPlot(x,y,w){
  push();
  strokeWeight(5);
  translate(x,y)
  rotate(-nextRot*PI/180)
  noFill();
  stroke(255,0,0,w);
  ellipse(0,0,15,15);
  text("_",0,0);
  pop()
}