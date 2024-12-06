// Call();
const fullName = function() {
    console.log(this.firstName + '' + this.lastName);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
}

fullName.call(person1);