// const sym1 = Symbol();
// const sym2 = Symbol();
// const sym3 = Symbol('hi');

// console.log(sym1) // Symbol()
// console.log(sym1 === sym2); // false
// console.log(sym3.description); // hi


let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}

// carA.id = 300;
// 원래 있던 id의 값을 overrride 하게 됨

const idSym = Symbol('id');
carA[idSym] = 300;
// 이렇게해주면됨.

console.log(Object.getOwnPropertyNames(carA));

for( const key in carA ) {
    console.log(key);
}

// 이걸 해야 심볼을 볼 수 있음.
console.log(Object.getOwnPropertySymbols(carA));

// console.log(carA);