function solution(numbers, hand) {
    const keypad = [
        [1,4,7,'*'],
        [2,5,8,0],
        [3,6,9,'#']
    ]
    var answer = '';
    let left = '*', right = '#';
    for(let i=0; i<numbers.length; i++) {
        if(keypad[0].indexOf(numbers[i]) > -1) { 
            answer += 'L';
            left = numbers[i];
        } else if(keypad[2].indexOf(numbers[i]) > -1) {
            answer += 'R';
            right = numbers[i];
        } else { // 중간자리
            let lidx = keypad[0].indexOf(left);
            let ridx = keypad[2].indexOf(right);
            let midx = keypad[1].indexOf(numbers[i]); 
            if(lidx < 0) {
                lidx = keypad[1].indexOf(left);  
                lidx = Math.abs(lidx-midx);
            } else {
                lidx = Math.abs(lidx-midx) + 1;
            }
            if(ridx < 0) {
                ridx = keypad[1].indexOf(right);
                ridx = Math.abs(ridx-midx);
            } else {
                ridx = Math.abs(ridx-midx) + 1;
            }   
            
            if(lidx > ridx) {
                answer += 'R';
                right = numbers[i];
            } else if(lidx < ridx) {
                answer += 'L';
                left = numbers[i];
            } else {
                if(hand === 'right') {
                    answer += 'R';
                    right = numbers[i];
                } else {
                    answer += 'L';
                    left = numbers[i];
                }
            }          
        } 

    }
    return answer;
}