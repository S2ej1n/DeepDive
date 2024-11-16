const num1 = 20;
const num2 = 10;

let val;
//간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //나머지 연산자 - 나머지 출력

//Math Object
val = Math.E; //Euler number - 2.718...
val = Math.PI; //파이 - 3.14...
val = Math.round(2.4); //2
val = Math.ceil(2.2); //올림 3
val = Math.floor(2.8); //내림 2
val = Math.abs(-5); //절댓값 5
val = Math.min(2,3,4,5,6,7,8,-1); //작은 숫자 -1
val = Math.max(2,3,4,5,6,7,8); //큰 숫자 8 반환
val = Math.random(); //0과 1 사이의 랜덤 숫자 리턴
val = Math.floor(Math.random() * 3 + 1); //1~20까지의 숫자 랜덤 리턴

console.log(val);