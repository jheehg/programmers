function solution(price, money, count) {

    for(let i=1; i<=count; i++) {
        money -= price * i;
    }
    
    // 다른 사람 풀이 참고
    // 등차수열의 합 = (첫번째 수 + 마지막 수) * 수열의 개수 / 2
    // money = money - ((price + (price * count)) * count / 2);

    return money >= 0? 0 : money * -1;
}