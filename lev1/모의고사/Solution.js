function solution(answers) {  
    function countAnswer(pattern) {
        let n=0, i=0, j=0, cnt = 0;
        while(i+j < answers.length) {
            if(i>pattern.length-1) {
                i = 0;
                j = pattern.length * ++n;
            }
            if(answers[i+j] === pattern[i]) cnt++;
            i++;
        }
        return cnt;
    }
    const result = [
        countAnswer([1,2,3,4,5]),
        countAnswer([2,1,2,3,2,4,2,5]),
        countAnswer([3,3,1,1,2,2,4,4,5,5])
    ];

    let max = Math.max(...result);
    let answer = [];
    result.forEach((v, i) => {
        if(v === max) answer.push(i+1);
    })
    return answer;
}