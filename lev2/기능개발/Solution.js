function solution(progresses, speeds) {
    let answer = [1];
    progresses = progresses.map((v, i) => Math.ceil((100-v) / speeds[i]));
    
    let max = progresses.shift();

    while(progresses.length > 0) {
        let n = progresses.shift();
        if(n <= max) {
            ++answer[answer.length-1];
        } else {
            max = n;
            answer.push(1);
        }
    }

    return answer;
}