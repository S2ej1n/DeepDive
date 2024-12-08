// let x = 0;
// const numberUp = () => x += 1;
// // 함수 외부의 값을 변경시켜서 사이드이펙트가 있음.

// console.log(numberUp()); // 1
// console.log(x); // 1

let x = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp(x)); // 1
console.log(x); // 0