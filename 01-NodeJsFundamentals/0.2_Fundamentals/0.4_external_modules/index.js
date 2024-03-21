const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const name = args["name"];
const profession = args["profession"];

console.log(name, profession);

console.log(`O nome dele é ${name} e sua profissão é ${profession}`);

// rodar no terminal
//  node index.js --name=Dayan --profession=front-end
