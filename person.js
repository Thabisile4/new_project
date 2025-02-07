class Person {
    constructor({ name, age, gender, interests }) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    hello() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and I am interested in ${this.interests.join(", ")}.`;
    }
  }
  
  export default Person;
  