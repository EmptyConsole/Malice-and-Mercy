class particle extends projectile{
  constructor(a,b,c,d,e,f,g){
    super(a,b,c,d,e);
    this.type = f;
    this.life = g;
    this.maxLife = g;
    if(this.type == 1){
       this.prox+=this.proxv
       this.proy+=this.proyv
       this.proxv/=5.5;
    this.proyv/=5.5;
    this.move();
   this.proxv/=5.5;
    this.proyv/=5.5;
    }
  }
  work(){
    //Kill after time life is how long it lives
    this.life--;
    //dipslay
    this.display1(this.prox,this.proy);
    //move must come after due to display types movement properties
     //inherited class(projectile) moves
    this.move();
  }
  
  display1(x,y){
    this.proxv/=5.5;
    this.proyv/=5.5;
    this.prox+=player1.px-player1.prex;
    this.proy+=player1.py-player1.prey;
    translate(x,y);
    noStroke();
    fill(255,this.life/this.maxLife*50);
    ellipse(0,0,10,10);
    resetMatrix();
  }
  
}
function particlesDisplay(){
  for(var i=particles.length-1; i>=0; i--){
    particles[i].work();
    if(particles[i].life<=0){
      particles.splice(i,1);
    }
  }
}