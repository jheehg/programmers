function solution(nums) {
    let result = new Array(nums.length+1);
    let lmt = nums.length/2;
    
    for(let i=lmt; i<result.length; i++) {    
        if(i === lmt) {
            let check = nums.slice(0,i);
            let dup = check.filter((v,i,s) => s.indexOf(v) !== i);
            result[i] = check.length - dup.length;
                
        } else {
            if(nums.slice(0, i-1).includes(nums[i-1])) {
                result[i] = result[i-1];
            } else {
                if(result[i-1] < lmt) result[i] = result[i-1]+1;
                else result[i] = result[i-1];
            }
        }
        
    }
    return result[nums.length];

    /*
    Set을 이용해서 중복제거 후 고를 수 있는 종류 확인하는 방법

    let result = new Set(nums);
    return (result.size < nums.length/2)? result.size : nums.length/2;
    */
}

