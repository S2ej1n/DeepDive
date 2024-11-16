let foo = 42
foo = 'bar'
foo = true
console.log(typeof foo);

// 원시 타입
// 문자열 String
const name = "han";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null - 소문자로 해줘야함.
const car = null;
// undefined
let anything; //아무것도 할당 안해주면 undefined 할당됨
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
    province : '경기도',
    city: '성남시'
}

console.log(typeof address);
console.log(typeof hobbies);
//배열도 결국에는 object의 하나의 형태이므로 typeof를 사용할 경우 object를 리턴한다.
//그러면 배열인거 어떻게 체크하는가?
console.log(Array.isArray(hobbies)); // true 출력