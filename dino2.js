//keyboard event
document.body.onkeydown = function(e){
  if(e.keyCode === 87){
    dino.alt = 'walk' 
  }
  if(e.keyCode === 82){
    dino.alt = 'run' 
  }
  if(e.keyCode === 32){
    temp = dino.alt
    dino.alt = 'jump'
  }
}
//change image
function dino2do(){
  number[0] = Number(number[0])
  if(dino.alt==='walk'){

    if(number[0] >= 10){
      number[0] = 1
    }else{
      number[0] = number[0] + 1
    }

    dino.src = dino.alt + '/' + number[0] + '.png'

  }else if(dino.alt === 'run'){

    if(number[0] >=8){
      number[0] = 1
    }else{
      number[0] = number[0] + 1
    }

    dino.src = dino.alt + '/' + number[0] + '.png'

  }else if(dino.alt==='jump'){

    if(number[0] >=12){
      dino.alt=temp
      number[0]=1
    }else{
      number[0] = number[0] + 1
    }

    dino.src = dino.alt + '/' + number[0] + '.png'

  }
}