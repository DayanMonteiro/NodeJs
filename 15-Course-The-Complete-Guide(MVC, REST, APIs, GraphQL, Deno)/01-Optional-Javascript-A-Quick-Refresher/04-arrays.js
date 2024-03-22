const person = {
  name: "Dayan",
  age: 36,
  greet() {
    console.log("Hi, I am " + this.name + " my age is " + this.age);
  },
};

const hobbies = ["Play Guitar", "Sing", "Musical Production"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);
