function buildLevel(){
  blocks = [];
  let builder = "";
  let strings = false;
  for(let c = 0; c<levelCode.length; c++){
    builder+=levelCode[c];
    if(levelCode[c]=="$"){
      strings = !strings;
    }
    if(c!=0){
    if(levelCode[c]=="C"&&!strings){
       blocks[blocks.length] = readCode(builder);
      builder = "";
    }
  }
  }
}
function readCode(code){
  let num = [];
  let build = "";
  let charge = [];
  let started = false;
  let stringed = false;
  for(let i=0; i<code.length; i++){
    if(code[i]!="A"&&code[i]!="B"&&code[i]!="C"||stringed){
      build+=code[i];
    }
    if(!stringed){
    if(code[i]=="A"){
      charge[charge.length] = 1;
      if(started){
        num[num.length] = int(build);
        build = "";
      }
      started = true;
    }
    if(code[i]=="B"){
      charge[charge.length] = -1;
      if(started){
        num[num.length] = int(build);
        build = "";
      }
      started = true;
    }
    if(code[i]=="C"){
      if(started){
        num[num.length] = int(build);
        build = "";
      }
    }
    }
    if(code[i]=="$"){
      if(stringed==true){
        num[num.length] = build;
        charge[charge.length] = 1;
        build = "";
      }else{
        num[num.length] = build;
        build = "";
        started = false;
      }
      stringed=!stringed;
    }
  }
  for(let i=0; i<num.length; i++){
    if(Number.isInteger(num[i])){
      num[i]*=charge[i];
    }else{
      num[i] = num[i].replace("$","")
    }
  }
  return(new block(num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7]));
}