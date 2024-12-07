// // Call();
// const fullName = function(city, country) {
//     console.log(this.firstName + ' ' + this.lastName, city, country);
// }

// const person1 = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// fullName.call(person1, "Oslo", "Norway");

// // Apply();
// const fullName = function(city, country) {
//     console.log(this.firstName + ' ' + this.lastName, city, country);
// }

// const person1 = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// fullName.apply(person1, ["Oslo", "Norway"])
// // 다른건 인수를 넣어줄 때 배열로 넣어주면 된다.

// bind()
function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreetung}`);
    } else {
        console.log(`language: ${this.engGreetung}`);
    }
}

const greeting = {
    korGreetung: '안녕',
    engGreetung: 'Hello',
}

const boundFunc = func.bind(greeting)('eng');
// this에대 이 객체를 바인딩만 시켜주는것
// 변수에다 함수 할당하고, 재 호출해줘야함
// boundFunc("kor");
