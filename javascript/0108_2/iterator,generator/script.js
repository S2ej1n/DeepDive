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
const numbersArray = [1,2,3];

// const numbersIterator = makeIterator(numbersArray);

// 이렇게도 할 수 있다.
const numbersIterator = numbersArray[Symbol.iterator]()

console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());
console.log(numbersIterator.next());