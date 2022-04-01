function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0; i<completion.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
    return participant[participant.length-1];
/*
    Map객체를 이용해서 푸는 방법
    
    let answer = new Map();
    for(let i = 0; i<participant.length; i++) {
        let p = answer.get(participant[i]);
        if(!p) answer.set(participant[i], 1);
        else answer.set(participant[i], p + 1);
    }
    
    for(let i = 0; i<completion.length; i++) {
        answer.set(completion[i], answer.get(completion[i]) - 1); 
    }
    
    for(let key of answer) {
        if(key[1] === 1) return key[0];
    }
*/
}