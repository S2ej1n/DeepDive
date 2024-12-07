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
