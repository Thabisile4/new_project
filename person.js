const person = new Person({
  name: "Ryan",
  age: 30,
  gender: "male",
  interests: ["being a hardarse", "agile", "SSD hard drives"],
});

const greeting = person.hello();
console.log(greeting);
