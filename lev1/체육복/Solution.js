function solution(n, lost, reserve) {
    // 체육복을 가져온 학생
    var answer = n - lost.length;
    
    // 여벌의 체육복을 가져온 학생 중 도난을 당한 학생 수
    let dup = reserve.filter(v => lost.includes(v));
    reserve = reserve.filter(v => !dup.includes(v));
    lost = lost.filter(v => !dup.includes(v));
    
    answer += dup.length;

    lost.sort();
    reserve.sort();
    
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(reserve[j] !== -1 && (reserve[j] - 1 === lost[i] || reserve[j] + 1 === lost[i])) {
                answer++;
                reserve[j] = -1;
                break;
            }
        }
    }
    return answer;
}
