class Person {
    constructor({ name, age, gender, interests }) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    formatInterests() {
      if (this.interests.length === 0) {
        return "I have no interests.";
      }
      if (this.interests.length === 1) {
        return `My interest is ${this.interests[0]}.`;
      }
      if (this.interests.length === 2) {
        return `My interests are ${this.interests[0]} and ${this.interests[1]}.`;
      }
      return `My interests are ${this.interests.slice(0, -1).join(", ")} and ${this.interests[this.interests.length - 1]}.`;
    }
  
    hello() {
      const interestsFormatted = this.formatInterests();
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and ${interestsFormatted}`;
    }
  }
  
  module.exports = {Person};
  