// // 얕은 복사 shallow copy
// const aArray = [1, 2, 3];

// // 1. spread operator를 이용한 얕은 복사
// const bArray = [...aArray, 4];
// console.log('aArray', aArray);
// console.log('bArray', bArray);
// console.log('aArray === bArray', aArray === bArray);

// // 2. Object.assign()을 이용한 얕은 복사
// const cArray = Object.assign([], bArray);
// console.log('cArray', cArray);
// console.log('bArray === cArray', bArray === cArray);
// // 값은 같더라도 참조하는 위치가 다르므로 false임

// // 중첩이된 배열이나 객체 Nested Arrays and Objects
// cArray.push([5, 6, 7]); // 1,2,3,4에 추가
// console.log('cArray', cArray); // 1,2,3,4,[5,6,7]
// const dArray = [...cArray, 10];
// console.log('dArray', dArray); // 1,2,3,4,[5,6,7],10
// dArray[4].push(8);

// console.log('cArray', cArray);
// console.log('dArray', dArray);
// // 그런데 d array에 넣어줬는데, c array에도 들어가있음.
// /* 얕은복사 - depth가 1까지만 (첫번째 깊이만 복사가 됨.)
// 깊이 하나에 [] 더 들어가면 (중첩이 된 부분) 복사가 안됨. */

// --------------------------------------------------------

// 얕은 동결
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

// Object.freeze(aObject);
// aObject.a = "c";
// console.log('aObject', aObject); // 얕은 동결을 해서 변경되지 않았음.

// aObject.cObject.a = 3;
// console.log('aObject', aObject); // 깊이가 깊은곳은 변경되었음.
// // 여기는 동결이 안됨. 얕은 동결이라.

// ----------------------------------------------------------------

// 깊은 복사deep copy 
// 1) json.parse(json.stringify())을 이용한 깊은 복사
// const newAObject = JSON.parse(JSON.stringify(aObject));
// console.log('aObject', aObject);
// console.log('newAObject', newAObject);
// aObject.cObject.a = 3;

// console.log('aObject', aObject);
// console.log('newAObject', newAObject);
// 얘는 똑같이 변하지 않았음.

// 2) nested spread operator을 이용한 깊은 복사
const newAObject = { ...aObject, cObject: { ...aObject.cObject } }
// 전체랑, {중첩이 된 부분까지} 얕은 복사 해버림.

console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newAObject', newAObject);