function validate(str){
    let space = str.match(/\s/g)
    if(str.length === 0 || space != null){
        return false
    }
    return true
}

function add(){
    let username = document.getElementById('username').value
    if(validate(username)){
        window.localStorage.setItem('username',username)
        change()
    }else{
        alert('username is empty or username have whitespace')
    }
}

function check(){
    if(window.localStorage.getItem('username') != null){
        return true
    }
    return false
}

function change(){
    if(check()){
        document.getElementById('login').innerHTML = 'Selamat bermain , '+window.localStorage.getItem('username')+'<br><button onclick="logout()">Logout</button>' 
    }
}

function logout(){
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('history')
    window.location.reload()
}