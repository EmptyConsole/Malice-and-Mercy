class timeLine{
  constructor(a,b){
   this.time = a;
    this.tLine = b;
    this.stage = 0;
    this.trueSum = 0;
    for(let i=0; i<this.tLine.length; i++){
      this.trueSum+=this.tLine[i];
    }
  }
  work(){
    this.time++;
    let sum = 0;
    for(let i=0; i<this.tLine.length; i++){
      sum+=this.tLine[i];
      if(this.time<=sum){
        this.stage = i;
        break;
      }
    }
    //can be optimized or smaller with reduce, but im too lazy to implement it, should be most efficient
    if(this.time>this.trueSum){
      this.stage=this.tLine.length;
    }
  }
}


//Skin for Mouse
function mouseSkin(){
  if(player1.showable){
  push();
  translate(mouser.x,mouser.y);
  scale(1/(zoom/100),1/(zoom/100));
  translate(-mouser.x,-mouser.y);
  translate(mouser.x,mouser.y);
  rotate(PI/4)
  strokeWeight(3);
  noFill();
  stroke(255, 153, 28);
  rect(0,0,13,13,4);
  rotate(PI/4+frameCount)
  fill(255,153,28);
  rect(0,0,1,1,0.5);
  pop();
  if(keyIsDown(16)&&levelEdit){
      push();
  translate(mouser.x,mouser.y);
  rotate(nextRot*PI/180);
  stroke(255)
  line(0,-50,0,-40);
  strokeWeight(10)
  line(0,50,0,40);
  pop();
       push();
       strokeWeight(10)
       stroke(0);
       fill(255,0,0);
       textSize(20)
       text(nextRange,mouser.x+25,mouser.y);
       text(nextDelay,mouser.x-25,mouser.y);
       pop();
    }
  }
}
//Char Converter
function ischar(x){
  var is =0;
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for(var i=0; i<letters.length; i++){
    if(x==letters[i]){
       is = i
    }
  }
  if(x=="up"){
    return 38
  }
  if(x=="down"){
    return 40
  }
  if(x=="left"){
    return 37
  }
  if(x=="right"){
    return 39
  }
  is+=65;
  return is
}
//Char Array Converter
function ischars(x){
  var holder = [];
  for(var i=0; i<x.length; i++){
    holder[i] = ischar(x[i])
  }
  return holder
}
//Distance Function
function dis(atx1,aty1,atx2,aty2){
  //Pythagorean Theorom
  //Thanks Pythagorus
  return sqrt(pow(atx1-atx2,2)+pow(aty1-aty2,2));
}
//Rectangular Collisions Detection
function rectHit(x,y,x2,y2,xs,ys,xs2,ys2){
  return(abs(x-x2)<xs/2+xs2/2&&abs(y-y2)<ys/2+ys2/2);
}

//applies filter to rectanuglar region, not CENTER aligned
function applyFilterToRegion(x, y, w, h, filterType, intensity) {
  // Create an offscreen buffer
  let pg = createGraphics(w, h);

  // Copy the desired region to the buffer
  pg.image(get(x, y, w, h), 0, 0);

  // Apply the filter to the buffer
  pg.filter(filterType, intensity);

  // Draw the buffer back to the main canvas
  image(pg, x, y);
}
function copyStringToClipboard(str) {
  // Replace literal newlines with escaped \n
  const escapedStr = str.replace(/\n/g, '\\n');
  
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = escapedStr;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
  console.log("Copied To Clipboard!");
}
function gridCreate(widths, heights) {
  var grider = [];
  for (var i = 0; i < widths; i++) {
    grider[i] = [];
  }
  for (let i = 0; i < widths; i++) {
    for (let u = 0; u < heights; u++) {
      grider[i][u] = 0;
    }
  }
  return grider;
}
function rayCast(x1,y1,x2,y2,x3,y3,x4,y4){
  if(x2<x1){
    //to make sure the first line is in order by x value
    return rayCast(x2,y2,x1,y1,x3,y3,x4,y4)
  }else if(x4<x3){
    //to make sure the second line is in order by x value
    return rayCast(x1,y1,x2,y2,x4,y4,x3,y3)
  }else{
    var x;
  var y;
    //drawing the lines
  // line(x1,y1,x2,y2)
  // line(x3,y3,x4,y4)
  
    //checking for straight up
    if(x1==x2 && x3==x4){
     // return {works:false, x:undefined, y:undefined}
       return {works:false, x:undefined, y:undefined}
    }else  if(x1==x2){
      //solve for the y
      y=(y3-y4)/(x3-x4)*(x1-x3)+y3
      
      if(y3>y4){
        if(y>=y4 && y<=y3 && y>=y1 && y<=y2){
        //  stroke("black")
          //fill("black")
  //         line(x1,0,x1,400)
  // line(0,y,400,y)
 // ellipse(x1,y,15)
          return {works:true, x:x1, y:y}
        }else{
          return {works: false, x:x1,y:y}
        }
      }else{
        if(y>=y3 && y<=y4 && y>=y1 && y<=y2){
      //    stroke("black")
       //   fill("black")
  //         line(x1,0,x1,400)
  // line(0,y,400,y)
  //ellipse(x1,y,15)
          return {works:true, x:x1, y:y}
        }else{
          return {works: false, x:x1,y:y}
        }
      }
      
    }else if(x3==x4){
      //solve for the y
      y=(y1-y2)/(x1-x2)*(x3-x1)+y1
      
      if(y1>y2){
        if(y>=y2 && y<=y1 && y>=y3 && y<=y4){
         // stroke("black")
         // fill("black")
  //         line(x3,0,x3,400)
  // line(0,y,400,y)
 // ellipse(x3,y,15)
          return {works:true, x:x3, y:y}
        }else{
          return {works: false, x:x3,y:y}
        }
      }else{
        if(y>=y1 && y<=y2 && y>=y3 && y<=y4){
     //     stroke("black")
     //     fill("black")
  //         line(x3,0,x3,400)
  // line(0,y,400,y)
  //ellipse(x3,y,15)
          return {works:true, x:x3, y:y}
        }else{
          return {works: false, x:x3,y:y}
        }
      }
      
    }else{
       //checking if the slope is the same
  if(((y1-y2)*(x3-x4)-(y3-y4)*(x1-x2))==0){
    return {works:false, x:undefined, y:undefined}
  }else{
    //finding x using system of equations
  x=((y3-y1)*(x1-x2)*(x3-x4)+x1*(y1-y2)*(x3-x4)-x3*(y3-y4)*(x1-x2))/((y1-y2)*(x3-x4)-(y3-y4)*(x1-x2))
    
    //solving for y
  y=(y1-y2)/(x1-x2)*(x-x1)+y1
  
    //making sure the point is on both lines
    if(x>=x1 && x<=x2 && x>=x3 && x<=x4){
      //stroke("black")
        //  fill("black")
  //     line(x,0,x,400)
  // line(0,y,400,y)
  //ellipse(x,y,15)
  return {works:true, x:x, y:y}
    }else{
      return {works:false, x:x, y:y}
    }
  }
  }
    }
  return {works:false, x:undefined, y:undefined}
}
function arrays2DEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false; // Different row count
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length !== arr2[i].length) return false; // Different column count
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false; // Any mismatch
    }
  }

  return true; // All elements match
}
function arrays2DGet2(arr1,x,y){
  let builder = [
    [arr1[x][y],arr1[x][y+1]],
    [arr1[x+1][y],arr1[x+1][y+1]]
  ];
  return builder;
}
function copy2DArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i].slice();  // Create a copy of each row using slice
  }
  return newArr;
}

function createLightning(x,y,countX,countY){
  var output=[]
  for(var i=0; i<countX; i++){
    var pointsX=[]
    var pointsY=[]
    for(var j=0; j<countY;j++){
      if(pointsX.length==0){
        pointsX[pointsX.length]=x-25+50*i/countX
        pointsY[pointsY.length]=y
      }else{
        var testX=pointsX[pointsX.length-1]+random(-20,20)
        // while(testX<x-35 || testX>x+35){
          // testX=pointsX[pointsX.length-1]+random(-5,5)
        // }
        pointsX[pointsX.length]=testX
        pointsY[pointsY.length]=pointsY[pointsY.length-1]-random(45,60)
        line(pointsX[pointsX.length-1],pointsY[pointsY.length-1],pointsX[pointsX.length-2],pointsY[pointsY.length-2])
      }
    }
    output[output.length]=[pointsX,pointsY]
  }
  return output
}

function oldLightning(list){
  for(var i=0;i<list.length;i++){
    for(var j=0;j<list[i][0].length;j++){
      if(j != 0){
        line(list[i][0][j],list[i][1][j],list[i][0][j-1],list[i][1][j-1])
      }
    }
  }
}

function reset(){
  player1 = new player(4,1.3,2,0.5,9,1,500,300,21,28,0,0,["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","w","a","s","d"],"rgb(149,255,241)"); //    drag-^ grav -^.maxj-^
  cameray = 0;
  camerax = 0;
  blocks = [];
  //block particle
blockP = [];
//turrent shoots
bullets = [];
//bullet trail/particle
bulletsP = [];
//If you are allowed to edit the level
levelEdit =false;

//LevelEdit Modes
lock = -1;
zoom = 170;
shake = 0;
levelCode = levels[0];
currentLevel = 0;
  buildLevel()
}