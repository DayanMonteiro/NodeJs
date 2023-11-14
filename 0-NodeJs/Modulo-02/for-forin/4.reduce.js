//somar o peso dos personagens
const { getPeople } = require("./service");

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
  for (let index = 0; index <= this.length - 1; index++) {
    finalValue = callback(finalValue, this[index], this);
  }
  return finalValue;
};

async function main() {
  try {
    const { results } = await getPeople(`a`);
    const weights = results.map((item) => parseInt(item.height));

    console.log("Pesos: ", weights);

    // const total = weights.reduce((previous, next) => {
    //   return previous + next;
    // }, 0);

    const myList = [
      ["Dayan", "Monteiro"],
      ["ReactJs", "NodeJs"],
    ];

    const total = myList
      .myReduce((previous, next) => {
        return previous.concat(next);
      }, [])
      .join(", ");

    console.log("Total: ", total);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
