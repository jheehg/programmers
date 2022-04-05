function solution(lottos, win_nums) {
    let check = 6;
    let zero = 0;
    lottos.forEach(v => {
        if(!win_nums.includes(v)) {
            if(v === 0) zero++;
            check--;
        }
    });
    let max = (check + zero) < 2? 1 : check + zero;
    let min = check < 2? 1: check;
    
    return [7 - max, 7 - min];
}