function makeIterator(numbers) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < numbers.length ?
            {value: numbers[nextIndex++], done: false} :
            {value: undefined, done: true}
        }
    }
}

// 숫자 배열 생성
// const numbersArray = [1,2,3];

// // const numbersIterator = makeIterator(numbersArray);

// // 이렇게도 할 수 있다.
// const numbersIterator = numbersArray[Symbol.iterator]()

// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());

// const numbersIterable = [1,2,3];
// const numbersNotIterable = { a:1, b:2 };
// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);
// for ( const n of numbersNotIterable ){
//     console.log(n);
// }

// const set = new Set([1,2,3,4]);
// console.log('set', set);

// const map = new Map([['a',1], ['b',2]])
// console.log('map', map);

// console.log(set[Symbol.iterator]().next()); // 이렇게하면 이터레이터가됨.
// console.log(map[Symbol.iterator]().next());

//----------------------------------------------------------------
// // 제너레이터 함수
// function* sayNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// // 제너레이터 함수의 반환이 제너레이터
// const number = sayNumbers();

// console.log(number.next());
// console.log(number.next());
// console.log(number.next());
// console.log(number.next());

function* generatorFunctions() {
    yield 1;
}

const generator = generatorFunctions();

// 이것과 이거는 같다.
// generator = generator[Symbol.iterator]();

console.log(generator.next());