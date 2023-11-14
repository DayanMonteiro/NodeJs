const service = require("./service");

// Array
Array.prototype.myMap = function (callback) {
  const newArrayMap = [];
  for (let index = 0; index <= this.length - 1; index++) {
    const result = callback(this[index], index);
    newArrayMap.push(result);
  }

  return newArrayMap;
};

async function main() {
  try {
    const result = await service.getPeople(`a`);

    // 0 - Ex forEach
    //  const names = [];
    // result.results.forEach(function (item) {
    //   names.push(item.name);
    // });

    // 1 - Ex map
    // const names = result.results.map(function (peaple) {
    //   return peaple.name;
    // });

    // EX 2 - map
    // const names = result.results.map((peaple) => peaple.name);

    // Ex 3 - myMap
    const names = result.results.myMap(function (peaple, index) {
      return `[${index}] ${peaple.name}`;
    });

    console.log("names", names);
  } catch (error) {
    console.error("Deu ruim!", error);
  }
}

main();
