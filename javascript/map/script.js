const array1 = [1, 4, 9, 16];

const map1 = array1.map(function (item, index, array) {
    console.log(item, index, array, this);
    return (item * 2);
}, { a: 'a'});

console.log(map1);