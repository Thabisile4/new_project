class Person {
  constructor({ name, age, gender, interests }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // Helper function to format the interests string
  formatInterests() {
    if (this.interests.length === 0) {
      return "no interests";
    }
    if (this.interests.length === 1) {
      return this.interests[0];
    }
    if (this.interests.length === 2) {
      return `${this.interests[0]} and ${this.interests[1]}`;
    }
    return `${this.interests.slice(0, -1).join(", ")} and ${this.interests[this.interests.length - 1]}`;
  }

  // Main hello function
  hello() {
    const interestsFormatted = this.formatInterests();
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my interests are ${interestsFormatted}.`;
  }
}
