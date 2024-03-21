var name = "Dayan";
var age = 36;
var hasHobbies = true;

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
