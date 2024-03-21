// external
const minimist = require("minimist");

// internal
const addition = require("./addition").addition;

const args = minimist(process.argv.slice(2));

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

addition(a, b);

// rodar no terminal
//  node index.js --a=5 --b=2
