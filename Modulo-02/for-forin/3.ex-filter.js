const { getPeople } = require("./service");

/*
ex de destructuring
{
  nome: "Dayan",
  idade: 35
}

const {nome} = item
console.log(nome)
*/

Array.prototype.myFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    // 0, "", null, undefined === false
    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await getPeople(`a`);
    // const familyLars = results.filter(function (item) {
    // por padrão retornar um booleado pra informar se deve manter ou remover da lista
    // não encontrou - 1  se encontrou = a posição no array
    // const result = item.name.toLowerCase().indexOf(`lars`) !== -1;
    // return result;
    // })

    const familyLars = results.myFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length);
      return item.name.toLowerCase().indexOf("lars") !== -1;
    });

    const names = familyLars.map((peaple) => peaple.name);
    console.log(names);
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
