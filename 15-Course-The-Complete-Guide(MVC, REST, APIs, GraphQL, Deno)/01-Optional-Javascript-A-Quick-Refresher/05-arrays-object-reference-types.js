const person = {
  name: "Dayan",
  age: 36,
  greet() {
    console.log("Hi, I am " + this.name + " my age is " + this.age);
  },
};

const hobbies = ["Play Guitar", "Sing", "Musical Production"];

hobbies.push("Back End Programming");

console.log(hobbies);
