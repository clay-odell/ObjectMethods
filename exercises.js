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
function createAnimal (species, verb, noise) {
    return {
        species,
        [verb](){
        return noise;
    }
  }
}
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

