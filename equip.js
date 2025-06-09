var lastHover = -1;
var buttons=[]
var abilities=["Bomb","Alteration","Blows up a radius upon\ncontact!",
               "Anti-Grav","Alteration","Reverses gravity within a\ncolumn upon contact!",
               "Build","Alteration","Summons blocks in a radius\nupon contact!",
               "Black-Hole","Alteration","Attracts nearby objects\nand the player!",
               "Time-Warp","Alteration","Slows objects within a\nradius upon contact!",
               "Ascension","Effect","Gives a higher jump while held!",
               "Reverse","Effect","Reverse the player's\nposition through the last\nfew seconds!",
               "Speed-Up","Effect","Increases the player's\nmovement speed for a\nfew moments!",
               "Sticky","Effect","Sticks the player to\nnearby walls, toggled!",
               "Float","Effect","Decreases falling gravity\nwhile held!"];
//ALTERATION:
//"Bomb","Alteration","Blows up a radius upon\ncontact!"
//"Anti-Grav","Alteration","Reverses gravity within a\npcolumn upon contact!"
//"Build","Alteration","Summons blocks in a radius\nupon contact!"
//"Black-Hole","Alteration","Attracts nearby objects\nand the player!"
//"Time-Warp","Alteration","Slows objects within a radius upon contact!"

//EFFECT:
//"Ascension","Effect","Gives a higher jump while held!"
//"Reverse","Effect","Reverse the player's position through the last few seconds!"
//"Speed-Up","Effect","Increases the player's movement speed for a few moments!"
//"Sticky","Effect","Sticks the player to nearby walls, toggled!"
//"Float","Effect","Decreases gravity while held!"

//ARTIFACT:
//"Thunder","Artifact","Paths of lighting appear next to you for a few moments!"
//"Stasis","Artifact","Teleports the player to the stasis upon recall!"
//"Rancid","Artifact","Uses a random ability!"
//"Shockwave","Artifact","Releases a powerful shockwave, knocking back nearby objects!"
//"Recycle","Artifact","Removes all effects on the player, removes any alterations!"

//EXTRA:
//"Flight","Helper","Toggles Flight. We do not recommend using Helper Abilities unless you are struggling on a level!"
//"Phase","Helper","Toggles Phasing. We do not recommend using Helper Abilities unless you are struggling on a level!"
//"Guide","Helper","Toggles Path Guide. We do not recommend using Helper Abilities unless you are struggling on a level!"
//"Invincibility","Helper","Toggles Invincibility. We do not recommend using Helper Abilities unless you are struggling on a level!"
//"Camera","Helper","Toggles Camera Zoom. We do not recommend using Helper Abilities unless you are struggling on a level!"
var plays = new button(750,490,275,120,1,0.1,1.5,1.4,0);
var selecter = 0;
var selectedB = [];
function equipScreen(){
  background(10);
  resetMatrix()
  //image(testEquip,500,300,1000,600)
  //rect(width/3*2+width/6,0+height/2,width/3,height)
  push();
  textSize(60);
  textAlign(CENTER,CENTER);
  fill(255);
  noStroke();
  //textStyle(BOLD);
  text("ABILITY SELECT",500,60)
  fill(120)
  pop();
  angleMode(RADIANS)
    //20 spacing, object, 20 spacing
  //if hovered over, the square gets bigger by 10 
  //the base square is 100x100 for testing purposes
  // var spacing=20
  // var size=100
  push();
  fill(20)
  stroke(255);
  strokeWeight(5);
  rect(750,245,380,250,5);
  pop();
  for(var i=0;i<buttons.length;i++){
    push();
  buttons[i].work();
  fill(20)
  stroke(255);
  strokeWeight(5);
  translate(buttons[i].x,buttons[i].y);
  scale(buttons[i].size,buttons[i].size);
  rotate(sin(frameCount/20)/5);
 ellipse(0,0,buttons[i].sizeX,buttons[i].sizeY,5);
    image(tileFull[5+buttons[i].type][0],0,0,40,40)
  pop();
    if(buttons[i].clicked){
      let will = false;
      if(player1.abil[selecter]==-1){
         will = true;
      }
      player1.abil[selecter] = buttons[i].type;
      if(will){
        selecter++;
        selecter=min(2,selecter);
      }
    }
  }
  //lastHover = max(buttons.findIndex(hold => hold.hover),lastHover);
  hoverers();
  //selecter
  for(let i=0; i<3; i++){
    selectedB[i].work();
    push();
    fill(20)
    stroke(255);
    strokeWeight(5);
    translate(selectedB[i].x,selectedB[i].y);
    scale(selectedB[i].size,selectedB[i].size);
    if(selecter==i){
      fill(20);
      noStroke();
      ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
      strokeWeight(15);
      stroke(255,50);
      noFill();
      ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
      strokeWeight(20);
      ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
      stroke(255);
      strokeWeight(5);
      noFill();
      ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
    }else{
      ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
    }
    rotate(-sin(frameCount/20)/5);
    textSize(55);
    fill(255);
    noStroke();
    if(player1.abil[i]<=-1){
      text("?",0,17);
    }else{
      image(tileFull[5+player1.abil[i]][0],0,0,40,40)
    }
    pop();
    if(selectedB[i].clicked){
      selecter = i;
    }
  }
  push();
  noStroke();
  fill(255);
  textSize(50);
  textAlign(LEFT,CENTER)
  text("SELECTED",330,532);
  pop();
  plays.work();
  push();
  fill(20);
  stroke(255);
  strokeWeight(5);
  translate(plays.x,plays.y);
  scale(plays.size,plays.size);
  rect(0,0,plays.sizeX,plays.sizeY,5);
  fill(255);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(80);
  text("START",0,5)
  pop();
  if(plays.clicked){
    screen = 1;
    next = floor(random(1,4));
  }
}
function hoverers(){
    lastHover = buttons.findIndex(hold => hold.hover);
  if(lastHover!=-1){
    let type = buttons[lastHover].type-1;
    push();
    fill(20)
    stroke(255);
    strokeWeight(5);
    translate(625,185);
    ellipse(0,0,buttons[lastHover].sizeX,buttons[lastHover].sizeY);
    rotate(-sin(frameCount/20)/5);
    image(tileFull[5+type+1][0],0,0,40,40)
    pop();
    push();
    noStroke();
    fill(255);
    textSize(45);
    textAlign(LEFT,TOP)
    text(abilities[type*3],685,145);
    textSize(20);
    text(abilities[type*3+1],685,195);
    //text("Hover over an ability\nand click to select it!",685,215);
    textSize(25);
    text(abilities[type*3+2],585,245);
    pop();
  }else{
    push();
    fill(20)
    stroke(255);
    strokeWeight(5);
    translate(625,185);
    ellipse(0,0,buttons[0].sizeX,buttons[0].sizeY);
    rotate(-sin(frameCount/20)/5);
    textAlign(CENTER,CENTER);
    textSize(55);
    fill(255);
    noStroke();
    text("?",0,3);
    pop();
    push();
    noStroke();
    fill(255);
    textSize(45);
    textAlign(LEFT,TOP)
    text("Select!!!",685,145);
    textSize(20);
    text("Unknown",685,195);
    //text("Hover over an ability\nand click to select it!",685,215);
    textSize(25);
    text("Hover over an ability and\nclick to select it!",585,245);
    pop();
  }
}
function startEquip(){
 var spacing=25
  var size=70
  var amount=3
  var currentX=63
  var currentY=150
  for(let c = 0; c<4; c++){
    for(var i=0;i<5;i++){
      buttons[buttons.length]=new button(currentX,currentY,size,size,1,0.1,1.5,1.4,(buttons.length%10)+1);
      currentX+=spacing*4.3;
    }
    currentX-=spacing*4.3*5;
    currentY+=spacing*3.8;
  }
  for(let i=0; i<3; i++){
    selectedB[i] =new button(70+i*100,530,size,size,1,0.1,1.5,1.4,(i%3)+1);
  }
}
// // function equipScreen(){
//   //20 spacing, object, 20 spacing
//   //if hovered over, the square gets bigger by 10
//   //the base square is 100x100 for testing purposes
//   var spacing=20
//   var size=100
//   var amount=3
//   background(0)
//   var currentX=size/2+spacing*3/2
//   var currentY=size/2+spacing*3/2
//   for(var i=0;i<amount;i++){
//     if(currentX>width-size/2+spacing){
//       currentX=size/2+spacing*3/2
//       currentY+=size+spacing*2
//     }
//     noFill()
//     stroke(255)
//     strokeWeight(5)
//     if(mouseX>=currentX-size/2 && mouseX<=currentX+size/2 && mouseY>=currentY-size/2 && mouseY<=currentY+size/2){
//       // print("yes")
//       rect(currentX,currentY,size+spacing,size+spacing,5)
//     }else{
//       rect(currentX,currentY,size,size,5)
//     }
    
//     currentX+=size+spacing*2
//   }
// }