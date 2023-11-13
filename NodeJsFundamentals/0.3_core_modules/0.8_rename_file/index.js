const fs = require("fs");

const fileOld = "file.txt";
const newFile = "newfile.txt";

fs.rename(fileOld, newFile, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`O arquivo ${fileOld} foi renomeado para ${newFile}!`);
});
