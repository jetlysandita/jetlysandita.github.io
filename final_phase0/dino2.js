//keyboard event
document.body.onkeydown = function(e){
  if(e.keyCode === 87 || e.keyCode === 82){
      dino2.alt = dino2.alt === 'run' ? 'walk' : 'run'
  }
  if(e.keyCode === 32){
      temp = dino2.alt
      dino2.alt = 'jump'
  }
}
//change image
function dino2do(){
  number2[0] = Number(number2[0])
  if(dino2.alt==='walk'){

    if(number2[0] >= 10){
      number2[0] = 1
    }else{
      number2[0] = number2[0] + 1
    }

    dino2.src = dino2.alt + '/' + number2[0] + '.png'

  }else if(dino2.alt === 'run'){

    if(number2[0] >=8){
      number2[0] = 1
    }else{
      number2[0] = number2[0] + 1
    }

    dino2.src = dino2.alt + '/' + number2[0] + '.png'

  }else{

    if(number2[0] >=12){
      dino2.alt=temp
      number2[0]=1
    }else{
      number2[0] = number2[0] + 1
    }

    dino2.src = dino2.alt + '/' + number2[0] + '.png'

  }
}