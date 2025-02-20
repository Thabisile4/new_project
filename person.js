class Person {
    constructor({ name, age, gender, interests }) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {
        return `Hello, my name is ${this.name}. My gender is ${this.gender}, and I am ${this.age} years old. My interests are ${this.interests.join(", ")}.`;
    }
}

// Exporting the class
export default Person;

// Example usage
const person = new Person({
    name: "Ryan",
    age: 30,
    gender: "male",
    interests: ["being a hardarse", "agile", "SSD hard drives"],
});

const greeting = person.hello();
console.log(greeting);