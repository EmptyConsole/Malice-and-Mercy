var startS = 1;
var startSV = 0;
var startS2 = 1;
var startSV2 = 0;
var offUp = 0;
var offUpV = 0;
function screenZero(){
  offUp+=offUpV;
  translate(0,offUp);
    push();
    fill(255);
    stroke(255)
    strokeWeight(3);
    textSize(120)
    text("UNDERCURRENT",500,200);
    translate(500,320);
    if(rectHit(mouseX,mouseY,500,320,0,0,400,120)){
      startSV += (1.1-startS)/15;
    }else{
      startSV += (1-startS)/15;
    }
    startSV/=1.2;
    startS+=startSV;
    push();
    scale(startS,startS);
    translate(-500,-320);
    noFill();
    stroke(255);
    strokeWeight(10);
    rect(500,320,400,120,20);
    fill(255)
    strokeWeight(5)
    textSize(100)
    text("PLAY",500,350);
    resetMatrix();
    translate(0,offUp);
    //extra
    if(rectHit(mouseX,mouseY,500,450,0,0,300,80)){
      startSV2 += (1.1-startS2)/10;
    }else{
      startSV2 += (1-startS2)/10;
    }
    startSV2/=1.3;
    startS2+=startSV2;
    translate(500,450);
    scale(startS2,startS2)
    translate(-500,-450);
    noFill();
    stroke(255);
    strokeWeight(10);
    rect(500,450,300,80,20);
    fill(255)
    strokeWeight(5)
    textSize(60);
    text("EXTRAS",500,470);
    pop();
}