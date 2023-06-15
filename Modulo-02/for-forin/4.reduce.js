//somar o peso dos personagens
const { getPeople } = require("./service");

async function main() {
  try {
    const { results } = await getPeople(`a`);
    const weights = results.map((item) => parseInt(item.height));

    console.log("Pesos: ", weights);

    const total = weights.reduce((previous, next) => {
      return previous + next;
    });

    console.log("Total: ", total);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
