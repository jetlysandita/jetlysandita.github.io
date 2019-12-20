function add_history(str){
    if(str==='O'){
        str = 'WIN'
    }
    if(str==='X'){
        str = 'LOSE'
    }
    let history = window.localStorage.getItem('history')
    if(history == null){
        window.localStorage.setItem('history',str)
    }else{
        window.localStorage.setItem('history',history + ',' + str)
    }
    alert(str)
    window.location.reload()
}

function history(){
    if(window.localStorage.getItem('history') != null){
        let table = document.getElementById('history').getElementsByTagName('tbody')[0]
        let data = window.localStorage.getItem('history').split(',')
        for(var i = 0; i < data.length; i++){
        let tr = table.insertRow(-1)
        let td = tr.insertCell(-1)
        td.innerText = i+1
        td = tr.insertCell(-1)
        td.innerText = data[i]
        } 
    }
}