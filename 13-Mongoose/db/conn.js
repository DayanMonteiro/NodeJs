const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/testemongodb");

  console.log("Conectou ao MongoDB com Mongoose!");
}

main().catch((err) => console.log("erro na conecção com mongoose" + err));

module.exports = mongoose;
