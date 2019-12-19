//dino 1
let content = document.getElementById('dino')
//set default
content.src = 'idle/'+'1.png'
//get number only dino 1 url
let current = (content.src).split('/')
let number = (current[current.length-1]).split('.')

//default pointer
let pointer = 'crosshair'
//default temp
let temp = ''
let tid
let dinoplay = false
//always run for interval millisecond
function play(){
    if(dinoplay){
        dinoplay = false
        clearInterval(tid)
    }else{
        tid = setInterval(() => {
            //dino 1
            dino1do()
            //dino2
            dino2do()
        }, 100);
        dinoplay = true
    }
}
    
    