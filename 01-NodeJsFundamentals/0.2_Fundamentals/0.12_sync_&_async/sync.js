const fs = require("fs");

console.log("Início");

fs.writeFileSync("file.txt", "oi");

console.log("Fim");
