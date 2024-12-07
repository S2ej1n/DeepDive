// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(function (item, index, array) {
//     console.log(item, index, array, this);
//     return (item * 2);
// }, { a: 'a'});

// console.log(map1);

const array = [1, 2, 3, 4];

const sum = array.reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
});

console.log(sum); // 10

/*
initialValue가 제공된 경우:

accumulator는 initialValue로 초기화됩니다.
순회는 배열의 **첫 번째 요소(index 0)**부터 시작합니다.
이 경우, currentIndex는 0부터 시작합니다.
initialValue가 제공되지 않은 경우:

accumulator는 배열의 **첫 번째 요소(index 0)**로 초기화됩니다.
순회는 배열의 **두 번째 요소(index 1)**부터 시작합니다.
따라서, 이 경우 currentIndex는 1부터 시작합니다.
*/