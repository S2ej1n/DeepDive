// let val;

// // Number to String
// val = String(111);
// val = String(8 + 4);

// // Boolean to String
// val = String(false);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([1, 2, 3, 4, 5]);

// // toString()
// val = (5).toString();

// // String to number
// val = Number('1');
// val = Number(true); //number로 변경시 1
// val = Number(false); //number로 변경시 0
// val = Number(null); //number로 변경시 0
// val = Number([1,2,3]); //number로 변경시 NaN : Not a Number

// // 소수점 아래를 없애고싶다.
// val = parseInt('111.40');
// // 소수점을 남기고 싶다
// val = parseFloat('111.40');

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum); //23출력
console.log(typeof sum); //타입이 string으로 나옴 => 자동으로 변경이 된것.