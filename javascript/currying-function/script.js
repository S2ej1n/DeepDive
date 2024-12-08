// const sum = (x, y) => x + y;

// const curriedSum = x => y => x + y;

// console.log(sum(10, 20));
// console.log(curriedSum(10)); // 함수가 출력될거임.
// console.log(curriedSum(10)(20)); //30

// -----------------------------------------------------------------
// const makeFood = (ingredient1) => {
//     return (ingredient2) => {
//         return (ingredient3) => {
//             return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
//         }
//     }
// }

// // 이렇게 세개 다 넣어야 햄버거 완성 - 하나 빼먹으면 결과 안나옴
// const hamburger = makeFood("Bread")("Ham")("Tomato");
// console.log(hamburger);

// // 좀 더 깔끔하게는 이렇게 작성 가능
// const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
//     `${ingredient1}, ${ingredient2}, ${ingredient3}`;

// const newHamburger = cleanerMakeFood("Bread")("Ham")("Tomato");
// console.log(newHamburger);

// ----------------------------------------------------------------

// function log(date, importance, message) {
//     alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
// }

// // log(new Date(), "DEBUG", "some debug");

// // 위의꺼를 커링으로 바쭤주기 위해서 curry함수를 사용할수있다.
// function curry(f) { 
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return f(a, b, c);
//             }
//         };
//     };
// }

// const curriedLog = curry(log);
// curriedLog(new Date())("DEBUG")("some debug");

// 근데 위의 저 방식을 사용하면 인수가 추가될때 마다 계속 리턴값 추가추가해줘야됨.
// 그래서 이런 문제 해결하려고 ‘다이나믹하게 쿼리함수’ 만들어서 쓸 수 있음.

// 이거 쓰면 매개변수가 몇개이든 쿼리 함수로 바꿔줄 수 있다.
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

const sum = (x, y, z, j, a) => x + y + z + j + a;

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5)); // 15