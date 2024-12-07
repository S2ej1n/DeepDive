// // What is closure?
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// // console.log('New Function: ' + newFunction);
// newFunction('inside');

let a = 'a';

function functionB() {
    let a = 'c';
    console.log(a,b,c); // c is accessible here
}

function functionA() {
    let b = 'b';
    functionB()
    console.log(a, b); // a is accessible here
}
functionA();

// 이걸 closure로 해결할수있다.