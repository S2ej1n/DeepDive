let user = {
    name: 'John',
    age: 45
}

console.log(user.name);
console.log(user.hasOwnProperty('email'));
// 없는데 에러가 안나고 false가 뜸. 있으면 true라고 뜸.