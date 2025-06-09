function interface(){
  resetMatrix();
  for(let i=0; i<3; i++){
    if(player1.abil[i]>=1){
      push();
      translate(40+60*i,40);
      rotate(sin(frameCount/20)/5);
      if(player1.slot==i){
        scale(1.3+sin(frameCount/20)/10,1.3+sin(frameCount/20)/10);
        rotate(2*-sin(frameCount/20)/5);
      }else{
        scale(0.9+sin(frameCount/20)/20,0.9+sin(frameCount/20)/20);
      }
      image(tileFull[5+player1.abil[i]][0],0,0,40,40);
      pop();
  }
  }
  /*
  push();
  translate(30+player1.slot*45,30);
  rotate(frameCount/60)
  beginShape();
  for(let i=0; i<10; i++){
   // curveVertex(sin(2*PI/10*i)*(20+10*noise(frameCount/60+5*i)),cos(2*PI/10*i)*(20+10*noise(frameCount/60+5*i)))
  }
  endShape(CLOSE);
  //ellipse(0,0,30,30)
  pop();
  */
}
