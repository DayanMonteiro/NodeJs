const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem de programação atual? ", (language) => {
  if (language === "Javascript") {
    console.log("Isso todo mundo esta aprendendo, vá pra Go ou Python kkkk");
  } else {
    console.log(`A minha linguagem de programação atual é: ${language}`);
  }

  readline.close();
});
