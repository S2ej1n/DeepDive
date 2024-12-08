const sum = (x, y) => x + y;

const curriedSum = x => y => x + y;

console.log(sum(10, 20));
console.log(curriedSum(10)); // 함수가 출력될거임.
console.log(curriedSum(10)(20)); //30