const name = "Dayan";
let age = 36;
const hasHobbies = true;

age = 37;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    " age is " +
    userAge +
    " and the user has bobbies " +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
