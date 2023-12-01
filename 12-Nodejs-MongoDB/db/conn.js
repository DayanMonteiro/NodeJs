const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017/testemongodb";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectando ao MongoDB");
  } catch (err) {
    console.log("Ocorreu um erro:" + err);
  }
}

run();

module.exports = client;
