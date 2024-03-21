const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "name",
      message: "Qual o seu nome?",
    },
    {
      name: "age",
      message: "Qual a sua idade?",
    },
  ])
  .then((answers) => {
    const name = answers.name;
    const age = answers.age;

    if (!answers.name || !answers.age) {
      throw new Error("O nome e a idade são obrigatórios");
    }

    console.log(
      chalk.bgYellow.black(`O nome do usuário é ${name} e ele tem ${age} anos.`)
    );
  })
  .catch((err) => console.log(err));
