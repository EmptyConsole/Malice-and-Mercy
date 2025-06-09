//unload particles to reduce increasing lag
function unload(){
  for(var i = bullets.length-1; i>=0; i--){
    if(bullets[i].life<=0){
      bullets.splice(i,1);
    }
  }
  for(var i = bulletsP.length-1; i>=0; i--){
    if(bulletsP[i].size<=0){
      bulletsP.splice(i,1);
    }
  }
  for(var i = blockP.length-1; i>=0; i--){
    if(blockP[i].size<=0){
      blockP.splice(i,1);
    }
  }
  for(var i = blocks.length-1; i>=0; i--){
    
  }
}