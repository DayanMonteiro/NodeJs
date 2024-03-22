const name = "Dayan";
let age = 36;
const hasHobbies = true;

age = 37;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    " age is " +
    userAge +
    " and the user has bobbies " +
    userHasHobby
  );
};

const add = (a, b) => a + b;

const addRandom = () => 10 + 20;

console.log("add = ", add(age, 5));

console.log("addRandom", addRandom());

console.log("summarizeUser = ", summarizeUser(name, age, hasHobbies));
