const { readFile } = require("fs");

const { promisify } = require("util");

const readFileAsync = promisify(readFile);

// outra forma de obter dados do json
// const dataJson = require('./hero.json')

class Database {
  constructor() {
    this.NAME_FILE = "hero.json";
  }

  async getDataFile() {
    const file = await readFileAsync(this.NAME_FILE, "utf8");
    return JSON.parse(file.toString());
  }

  writeFile() {}

  async list(id) {
    const data = await this.getDataFile();
    const filteredData = data.filter((item) => (id ? item.id === id : true));
    return filteredData;
  }
}

module.exports = new Database();
