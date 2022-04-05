function solution(a, b) {
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let diffMon = a - 1;
    let totDay = b - 1;
    for(let i=1; i<=diffMon; i++) {
        if(i % 2 === 1 && i <=7 || i > 7 && i % 2 === 0) totDay +=31;
        else totDay += 30;
    }
    return (diffMon >=2)? day[(totDay-1) % 7] : day[totDay % 7];
}