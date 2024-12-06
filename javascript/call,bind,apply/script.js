// Call();
const fullName = function(city, country) {
    console.log(this.firstName + '' + this.lastName, city, country);
}

const person1 = {
    firstName: 'John',
    lastName: 'Smith'
}

fullName.call(person1, "Oslo", "Norway");