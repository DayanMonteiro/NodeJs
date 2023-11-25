const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "nodejs", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com o MYSQL!");
} catch (error) {
  console.error("Não foi possível conectar:", error);
}

exports.default = sequelize;
