class Person {
    constructor({ name, age, gender, interests = [] }) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    formatInterests() {
      const { interests } = this;
  
      if (interests.length === 0) {
        return "no interests";
      }
      if (interests.length === 1) {
        return `my interest is ${interests[0]}`;
      }
      if (interests.length === 2) {
        return `my interests are ${interests[0]} and ${interests[1]}`;
      }
      
      return `my interests are ${interests.slice(0, -1).join(", ")} and ${interests[interests.length - 1]}`;
    }
  
    hello() {
      const interestsFormatted = this.formatInterests();
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and ${interestsFormatted}.`;
    }
  }
  
  // Export the Person class so it can be used in other files
  export default Person;