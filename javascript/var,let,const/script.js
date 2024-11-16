//선언과 할당을 여러번 할 수 있음.
// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// var greeting = 'how sare you?';
// console.log(greeting);
//let과 const가 나오며 잘 사용하지 않게되었다.

//중복선언 불가, 재 할당 가능
// let greeting = 'hello';
// console.log(greeting);

// greeting = 'hi';
// console.log(hi);

// const greeting = 'hello';
// console.log(greeting);

// var 함수 레벨 스코프
// function func() {
//     if (true){
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a); //a가 출력이 잘 된다. 왜? 함수 안이니까.
// }
// console.log(a); //함수 밖이면 참조 불가. 

// let,const 블록 레벨 스코프
// function func() {
//     if (true){
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a); //출력이 안된다. 참조 범위를 넘어섬(if 바깥이므로)
// }

// func();

console.log(greeting);
var greeting = 'hello'; //undefined 가 출력
//let 은 에러 메세지출력됨.

func();

function func(){
    console.log('hoisting test');
}