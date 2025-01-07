// function Person(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
//     // this.calculateAge = function() {
//     //     const diff = Date.new() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // 프로토타입에다 넣어주는것. => 함수는 재사용이 가능하니까.
// Person.prototype.calculateAge = function() {
//     const diff = Date.new() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


function Person(name, email, birthday) {
    // person이라는 새로운 객체를 만들게 됨
    const pereson = Object.create(PersonsPrototype);
    pereson.name = name;
    pereson.email = email;
    pereson.birthday = new Date(birthday);
    return pereson;
}

const PersonsPrototype = {
    calculateAge() {
        const diff = Date.new() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// new 키워드
const john = new Person('John', 'john@example.com', '7-10-91');
const han = new Person('han', 'han@example.com', '2-11-91');
console.log(john);
console.log(han);