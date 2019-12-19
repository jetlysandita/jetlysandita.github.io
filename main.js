$(document).ready(function(){
    //dino 1
    let content = document.getElementById('dino')
    //set default
    content.src = 'idle/'+'1.png'
    //get number only dino 1 url
    let current = (content.src).split('/')
    let number = (current[current.length-1]).split('.')
    //dino 2
    let dino2 = document.getElementById('dino2')
    //set default
    dino2.src = 'walk/'+'1.png'
    //get number only dino 2 url
    let current2 = (dino2.src).split('/')
    let number2 = (current2[current2.length-1]).split('.')
    //default pointer
    let pointer = 'crosshair'
    //default temp
    let temp = ''
    //always run for interval millisecond
    setInterval(() => {
        //dino 1
        dino1do()
        //dino2
        dino2do()
    }, 100);
})
    