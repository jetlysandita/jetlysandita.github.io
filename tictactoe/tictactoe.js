function cariPemenang(board) {
    // Write your code here
    let obj={
        XXX:'X',
        OOO:'O'
    }
    let hasil = {}
    for(let i=0;i<board.length;i++){
        let horizontal=''
        let vertical=''
        let diagonal=''
        for(let j=0;j<board[i].length;j++){
            horizontal+=board[i][j]
            vertical+=board[j][i]
            if(i===0){
                diagonal+=board[j][j]
            }else{
                diagonal+=board[j][board[i].length-1-j]
            }
        }
        if(obj[horizontal]!=null||obj[vertical]!=null||obj[diagonal]!=null){
            return obj[horizontal]!=null?obj[horizontal]:obj[vertical]!=null?obj[vertical]:obj[diagonal]
        }
    }
    if(turn===5){
        return 'DRAW'
    }
}