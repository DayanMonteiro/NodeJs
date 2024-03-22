const person = {
  name: "Dayan",
  age: 36,
};
const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ["Play Guitar", "Sing", "Musical Production"];
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
