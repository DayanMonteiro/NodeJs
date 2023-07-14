const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

// outra forma de obter dados do json
// const dataJson = require('./hero.json')

class Database {
  constructor() {
    this.NAME_FILE = "hero.json";
  }

  async getDataFiles() {
    const file = await readFileAsync(this.NAME_FILE, "utf8");
    return JSON.parse(file.toString());
  }

  async writeFiles(data) {
    await writeFileAsync(this.NAME_FILE, JSON.stringify(data));
    return true;
  }

  async register(hero) {
    const data = await this.getDataFiles();
    const id = hero.id <= 2 ? hero.id : Date.now();

    const heroWithId = {
      id,
      ...hero,
    };

    const finalData = [...data, heroWithId];
    const result = await this.writeFiles(finalData);
    return result;
  }

  async list(id) {
    const data = await this.getDataFiles();
    const filteredData = data.filter((item) => (id ? item.id === id : true));
    return filteredData;
  }

  async remove(id) {
    if (!id) {
      return await this.writeFiles([]);
    }
    const data = await this.getDataFiles();
    const index = data.findIndex((item) => item.id === parseInt(id));
    if (index === -1) {
      throw Error("the informed hero does not exist");
    }
    data.splice(index, 1);
    return await this.writeFiles(data);
  }
}

module.exports = new Database();
