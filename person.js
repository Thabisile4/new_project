class Person {
    constructor({ name, age, gender, interests }) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    hello() {
        return `Hello, my name is ${this.name}. I am ${this.age} years old, identify as ${this.gender}, and I enjoy ${this.interests.join(", ")}.`;
    }
}

// Example usage
const person = new Person({
    name: "Ryan",
    age: 30,
    gender: "male",
    interests: ["being a hardarse", "agile", "SSD hard drives"],
});

const greeting = person.hello();
console.log(greeting);