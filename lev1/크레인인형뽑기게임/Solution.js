function solution(board, moves) {
    let answer = 0;
    let basket = [];
    
    board = board.filter(v => v.find(e => e > 0));
    
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {
            let idx = moves[i]-1;
            if(board[j][idx] > 0) {
                let picked = board[j].splice(idx, 1, 0);
                if(basket.length > 0) {
                    if(basket[basket.length-1] === picked[0]) {
                        basket.pop();
                        answer += 2;
                        break;
                    }
                }
                basket.push(...picked);
                break;
            }
        }
    }
    return answer;
}