function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favNum = 42;
const instructor = {
    firstName: 'Colt',
    [favNum]: "That is my favorite!"
}
const instructorA = {
    firstName: 'Colt',
    sayHi(){
        return "Hi"
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}
console.log(instructorA(sayBye()));