const path = require("path");

// absolute path
console.log(path.resolve("test.txt"));

// form path
const midFolder = "relatorios";
const fileName = "dayan.txt";

const finalPath = path.join("/", "files", midFolder, fileName);

console.log(finalPath);
