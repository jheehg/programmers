function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    let reportCnt = {};
    
    report = [...new Set(report)];
    report.forEach(v => {
        let [a,b] = v.split(" ");
        if(!reportCnt[b]) reportCnt[b] = [a];
        else reportCnt[b].push(a);
    });
    for(let prop in reportCnt) {
        if(reportCnt[prop].length >=k ) {
            reportCnt[prop].forEach(v => {
                let idx = id_list.indexOf(v);
                if(idx>-1) ++answer[idx];
            })
        }
    }
    
    return answer;
}