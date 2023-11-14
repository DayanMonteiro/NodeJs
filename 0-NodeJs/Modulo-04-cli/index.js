const { Command } = require("commander");
const Database = require("./database");
const Hero = require("./hero");

async function main() {
  const program = new Command();

  program
    .version("v1")
    .option("-n, --name [value]", "Hero's name")
    .option("-p, --power [value]", "Hero Power")
    .option("-i, --id [value]", "Hero ID")

    .option("-r, --register", "Register a Hero")
    .option("-l, --list", "List Heroes")
    .option("-d, --remove", "Remove a Hero")
    .option("-u, --update [value]", "Update a Hero");

  program.parse(process.argv);

  const options = program.opts();
  const hero = new Hero(options);

  try {
    //cadastrar
    if (options.register) {
      delete hero.id;
      const result = await Database.register(hero);

      if (!result) {
        console.error("Hero was not registered!");
        return;
      }
      console.log("Hero successfully registered");
    }

    // listar;
    if (options.list) {
      const result = await Database.list();
      console.log(result);
      return;
    }

    //remover
    if (options.remove) {
      const result = await Database.remove(hero.id);

      if (!result) {
        console.error("Unable to remove Hero");
        return;
      }
      console.log("Hero removed successfully");
    }

    //atualizar
    if (options.update) {
      const idToUpdate = parseInt(options.update);
      delete hero.id;
      // remover todas as chaves que estiverem com undefined | null
      const data = JSON.stringify(hero);
      const heroUpdate = JSON.parse(data);

      const result = await Database.update(idToUpdate, heroUpdate);
      if (!result) {
        console.error("Unable to update Hero");
        return;
      }
      console.log("Hero updated successfully");
    }
  } catch (error) {
    console.error("deu rum", error);
  }
}

main();
