const person = {
  name: "Dayan",
  age: 36,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Play Guitar", "Sing", "Musical Production", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
