// nome

console.log(process.argv);

const args = process.argv.slice(2);

console.log(args);

const name = args[0].split("=")[1];

console.log(name);

const age = args[1].split("=")[1];

console.log(age);

console.log(`O nome dele é ${name} e a sua é ${age} anos!`);

// rodar no terminal
// node index.js nome=Dayan idade=36
