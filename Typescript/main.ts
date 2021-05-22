export {}

let isBeginner: boolean = true;
// let total: number = 0;
let name: string = 'Madan Rijal'

// console.log(`I am ${name} and i have${total} money`)

// enum variable types

enum Color {red=1,blue,purple,green=10};

let c:Color = Color.green
console.log("my color is:",c)
// We can specify an object as type in typescritp
interface Person {
    firstName: string,
    lastName: string,
    age: number,

}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
    console.log("the my age",person.age)
}

let obj = {
    firstName: "Madn Rijal ",
    lastName: "fuckin boy",
    age: 89
}

fullName(obj)


// let count = 'sohans';
// count = 'madan did you mean Madan'
// console.log("The name",count)
let bbt = 20;
const myTotal = function(a) {

    const total = a + bbt
    console.log("The total is",total)
}
console.log("The bbt outside the function",bbt)
myTotal(10)
// console.log("M,y total value",total)