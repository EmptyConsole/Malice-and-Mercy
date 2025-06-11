var throwable = [1,2,3,4,5];
function kbTypePressing(){
 // print(player1.able) 
  // if(kb.presses('q')&&!kb.pressing('shift')&&throwable.findIndex(hold=>hold==player1.abil[player1.slot])!=-1 && player1.able&&bombs.length==0&&player1.gravLine.stage==3){
  if(kb.presses('q')&&throwable.findIndex(hold=>hold==player1.abil[player1.slot])!=-1 && player1.able&&bombs.length==0&&player1.gravLine.stage==3){
    // print("thrown")
    
    // if(kb.presses('q')&&!kb.pressing('shift')&&throwable.findIndex(hold => hold==player1.abil[player1.slot])!=-1){
    if(player1.abil[player1.slot]!=2){
      if(player1.abil[player1.slot]==1){
      bombs[bombs.length] = new bomb(player1.px,player1.py,0,0,player1.abil[player1.slot],15,15,110);
      }else{
        bombs[bombs.length] = new bomb(player1.px,player1.py,0,0,player1.abil[player1.slot],10,10,110);
        
      }
    player1.take()
      for(let i=0; i<bombs.length; i++){
      bombs[i].throws();
    }
    }
    if(player1.abil[player1.slot]==2){
      player1.gravLine.time = 0;
    }
      player1.size=0.225;
  }
  // }else if(kb.presses('q')&&!kb.pressing('shift') &&player1.abil[player1.slot]==6 ){
  //   //deleting old arrow
  //   if(arrows.length>0){
  //   var num=blocks.findIndex(hold =>hold.link == ((arrows[arrows.length-1].link) ?? -20));
  //   if(num != -1){
  //    blocks.splice(num,1)
  //  arrows.splice(0,1)
  //   }
  // }
  //   //creating new arrow
  //   arrows[arrows.length]=new arrow(player1.px,player1.py,50,20,10*player1.direction,0,"image",arrows.length);
  // }
  if(kb.presses('1')){
    player1.slot = 0;
  }
  if(kb.presses('2')){
    player1.slot = 1;
  }
  if(kb.presses('3')){
    player1.slot = 2;
  }
  // if(kb.presses(']')){
  //   player1.inDark = !player1.inDark;
  // }
  if(kb.presses("Alt")){
    // print("reset")
    reset()
  }
}