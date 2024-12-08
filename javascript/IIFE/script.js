// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()

// (function () {
//     var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다.
// console.log(aName)
// // throws "Uncaught ReferenceError: aName is not defined"

// var result = (function () {
//     var name = "Barry";
//     return name;
// })();
// // 함수 자체가 리턴이 되는게 아니라, 결과값이 바로 리턴이됨.
// console.log(result);
// // "Barry"

const score = (() => {
    let count = 0;
    return {
        current: () => {return count},
        increment: () => {count++},
        reset: () => {count = 0}
    }
})()

console.log(typeof score);
console.log(score);
console.log(score.current());
score.increment();
console.log(score.current()); //1로 증가함

// 사용하려면
// console.log(score().current());
// score().increment();
// console.log(score().current()); //0
// 다시 호출해서 초기화됨 -> 0
// 난 1로 올리고싶은데.. -> 그때 즉시 실행 함수 사용하면 됨.

const increment = (() => {
    let counter = 0;
    const number = (num) =>
        console.log(`it is ${num} number`);
    return () => {counter++; number(counter);}
})();

console.log(increment);
increment();
increment();