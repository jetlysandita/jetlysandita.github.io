function go(id) {
    if(check()){
        let td = document.getElementById(id)
        if(td.innerText === ''){
            td.innerText = 'O'
            board[id[0]][id[1]]='O'
            let flag = true
            turn+=1
            let status = cariPemenang(board)
            if(status!=null){
                add_history(status)
            }
            if(turn<5&&status==null){
                while(flag===true){
                    let x = getRandomIntInclusive(0,2)
                    let y = getRandomIntInclusive(0,2)
                    let ai = document.getElementById(x+''+y)
                    if(ai.innerText === ''){
                        ai.innerText = 'X'
                        board[x][y]='X'
                        flag = false
                    }
                }
                status = cariPemenang(board)
                if(status!=null){
                    add_history(status)
                }
            }
        }
    }else{
        alert('Insert username !!!')
    }
}