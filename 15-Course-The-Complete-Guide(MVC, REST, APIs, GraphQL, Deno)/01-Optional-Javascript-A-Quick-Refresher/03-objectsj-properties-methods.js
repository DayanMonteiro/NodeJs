const person = {
  name: "Dayan",
  age: 36,
  greet() {
    console.log("Hi, I am " + this.name + " my age is " + this.age);
  },
  // other syntax
  // greet: function () {
  //   console.log("Hi, I am " + this.name + " my age is " + this.age);
  // },
};

person.greet();
