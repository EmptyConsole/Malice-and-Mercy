class projectile{
  constructor(a,b,c,d,e){
    //x and y
    this.prox = a;
    this.proy = b;
    //x and y velocities
    this.proxv = c;
    this.proyv = d;
    //gravity strength
    this.prog = e;
  }
  move(){
    //adding gravity
    this.proyv+=this.prog;
    //moving with velocities
    this.prox+=this.proxv;
    this.proy+=this.proyv;
  }
  testZone(){
    fill(255,0,255,100)
    stroke(255,0,255);
    ellipse(this.prox,this.proy,20,20);
  }
}
class directional_projectile{
  constructor(a,b,c,d,e){
    //x and y projectile
    this.prox = a;
    this.proy = b;
    //x and y target
    this.proxt = c;
    this.proyt = d;
    //speed to move at
    this.speed = e;
  }
  move(){
    let hyp = dis(this.prox,this.proy,this.proxt,this.proyt);
    this.proxt+=(this.proxt-this.prox)/hyp*this.speed;
    this.proyt+=(this.proyvt-this.proy)/hyp*this.speed;
    this.prox+=(this.proxt-this.prox)/hyp*this.speed;
    this.proy+=(this.proyvt-this.proy)/hyp*this.speed;
  }
  testZone(){
    fill(255,0,255,100)
    stroke(255,0,255);
    ellipse(this.prox,this.proy,20,20);
  }
}