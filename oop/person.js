// Prototypal inheritance 

class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age 
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}


const me = new Person('Lasse', 'Ojala', 45, ['Reading', 'Skiing'])
me.setName('Aleksis Pyy')
console.log(me.getBio())

const person2 = new Person('Lancy', 'Turner', 51)
console.log(person2.getBio())


// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age 
//     this.likes = likes
// }

// Person.prototype.getBio = function() {
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

// const me = new Person('Lasse', 'Ojala', 45, ['Reading', 'Skiing'])
// me.setName('Aleksis Pyy')
// console.log(me.getBio())

// const person2 = new Person('Lancy', 'Turner', 51)
// console.log(person2.getBio())

