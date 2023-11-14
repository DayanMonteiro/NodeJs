import chalk from "chalk";

const note = 9;

if (note >= 7) {
  console.log(chalk.green.bold("Parabéns você está aprovado!"));
} else {
  console.log(chalk.red("Você precisa fazer a prova de recuperação"));
}
