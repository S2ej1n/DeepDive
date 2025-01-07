class Person {
    constructor(name, email, birthday){
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday);
    }

    // 클래스 문법 사용 - 함수 자체가 프로토타입에 들어감.
    // 프로토타입에 인트로듀스가 들어감.
    introduce() {
        return `Hello my name is ${this.name}`;
    }

    static multipleNumbers(x,y) {
        return x * y;
    }
}

const john = new Person('john', 'john@example.com','10-3-98');
console.log(john);

// introduce사용하려면
john.introduce();

// 클래스 자체에 있는 멀티플넘버스를 사용하려면.
Person.multipleNumbers(1,2)