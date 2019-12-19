//kill or revive
function dead() {
  content.alt = content.alt === 'dead' ? 'idle' : 'dead'
  content.src = content.alt + '/' + content.alt + '.gif'
  pointer = pointer === 'crosshair' ? 'help' : 'crosshair'
  content.style.cursor = pointer
}
//keyboard event
document.body.onkeydown = function(e){
  let temp
  if(e.keyCode === 87){
    content.alt = 'walk' 
  }
  if(e.keyCode === 82){
    content.alt = 'run' 
  }
  if(e.keyCode === 32){
    temp = content.alt
    content.alt = 'jump'
  }
  content.src = content.alt + '/' + content.alt + '.gif'
  if(e.keyCode === 32){
    setTimeout(()=>{
      content.alt = temp
      content.src = content.alt + '/' + content.alt + '.gif'
    },1000)
  }
}
