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
