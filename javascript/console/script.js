console.log('안녕하세요');
console.log(123);
console.log(true);
var greeting = '안녕하세요.';
console.log(greeting);
console.log({a:"a", b:"b"});

//테이블로 나온다
console.table({a:"a", b:"b"})

//에러를 보여주어야 한다
console.error('Error!');

//경고를 할때
console.warn('Warning!');

//1,2,3,4,5를 출력하는데 얼마의 시간이 걸리는지를 출력해줌
console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello');

//출력된 콘솔들을 모두 지우고싶다
console.clear();