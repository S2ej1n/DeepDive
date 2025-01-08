// const sym1 = Symbol();
// const sym2 = Symbol();
// const sym3 = Symbol('hi');

// console.log(sym1) // Symbol()
// console.log(sym1 === sym2); // false
// console.log(sym3.description); // hi


// let carA = {
//     id: 1,
//     name: 'morning',
//     brand: 'kia',
//     price: 1000
// }

// // carA.id = 300;
// // 원래 있던 id의 값을 overrride 하게 됨

// const idSym = Symbol('id');
// carA[idSym] = 300;
// // 이렇게해주면됨.

// console.log(Object.getOwnPropertyNames(carA));

// for( const key in carA ) {
//     console.log(key);
// }

// // 이걸 해야 심볼을 볼 수 있음.
// console.log(Object.getOwnPropertySymbols(carA));

// console.log(carA);

// const RED = 'red';
// const ORANGE = 'orange';
// const YELLOW = 'yellow';
// // const BLUE = 'blue';
// const BLUE = Symbol('blue');
// const dog = 'blue';

// function getImportantLevel(color) {
//     switch (color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`)
//     }
// }

// console.log(getImportantLevel(BLUE)); // not important
// console.log(getImportantLevel(dog)); // not important
// // 이런 실수 방지 위해 심볼 사용한다.

const length = Symbol('length');

class Car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'sonata');
myCars.add('genesis','gv88')

for (const car in myCars) {
    console.log(car, myCars[car]);
}