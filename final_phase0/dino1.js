//kill or revive
function dead() {
  content.alt = content.alt === 'idle' ? 'dead' : 'idle'
  pointer = pointer === 'crosshair' ? 'help' : 'crosshair'
  content.style.cursor = pointer
}
function dino1do(){
  //idle or dead
  if(content.alt==='idle'){
    number[0] = Number(number[0])
    if(number[0] === 10){
        number[0] = 1
    }else{
        number[0] = number[0] + 1
    }
    content.src = content.alt + '/' + number[0] + '.png'
  }else if(content.alt==='dead'){
    for(var i = 1;i < 8;i++){
        content.src = content.alt + '/' + i + '.png'
    }
  }
}