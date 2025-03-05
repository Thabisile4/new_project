class Person {
    constructor(name, age, gender, interests) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    formatInterests() {
      const { interests } = this;
  
      if (interests.length === 0) {
        return "I have no interests.";
      }
      if (interests.length === 1) {
        return `My interest is ${interests[0]}.`;
      }
      if (interests.length === 2) {
        return `My interests are ${interests[0]} and ${interests[1]}.`;
      }
  
      return `My interests are ${interests.slice(0, -1).join(", ")} and ${interests[interests.length - 1]}.`;
    }
  
    hello() {
      const interestsFormatted = this.formatInterests();
      return `Hello, my name is ${this.name}, my gender is ${this.gender} and I am ${this.age} years old. ${interestsFormatted}`;
    }
  }
  
  module.exports = {Person};