function solution(n, arr1, arr2) {
    let maps = new Array(n);
    for(let i=0; i<maps.length; i++) {
        maps[i] = new Array(n);
        let mark1 = arr1[i].toString(2).padStart(n, '0');
        let mark2 = arr2[i].toString(2).padStart(n, '0');
        for(let j = 0; j<maps[i].length; j++) {
            maps[i][j] = (mark1[j] | mark2[j])? '#' : ' ';
        }
    }
    /*
    처음부터 toString(2)으로 변환하지 않고 아래와 같이 하면 좀 더 간단하게 결과를 얻을 수 있음.
    for(let i=0; i<maps.length; i++) {
        maps[i] = (arr1[i] | arr2[i]).toString(2).padStart(n, 0).replace(/1/g, '#').replace(/0/g, ' ');
    }
    */
    
    return  maps.map(v => v.join(''));
}