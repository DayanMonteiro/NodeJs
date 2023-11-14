const service = require("./service");

async function main() {
  try {
    const result = await service.getPeople("a");
    const names = [];

    // 0 - Exemplo com For
    console.time("tempo com for");

    for (let i = 0; i <= result.results.length - 1; i++) {
      const people = result.results[i];
      names.push(people.name);
    }

    console.timeEnd("tempo com for");

    // 1 - Exemplo com for in
    console.time("tempo com forin");

    for (let i in result.results) {
      const people = result.results[i];
      names.push(people.name);
    }

    console.timeEnd("tempo com forin");

    // 2 - Exemplo com forof
    console.time("tempo com forof");
    for (people of result.results) {
      names.push(people.name);
    }

    console.timeEnd("tempo com forof");

    console.log(`names`, names);
  } catch (error) {
    console.error("erro interno", error);
  }
}

main();
