const { deepEqual, ok } = require("assert");

const database = require("./database");

const DEFAULT_REGISTERED_ITEM = {
  name: "Flash",
  power: "Speed",
  id: 1,
};

// inicializando uma switch de testes
describe("Hero manipulation switch", () => {
  it("must research a hero using archives", async () => {
    const expected = DEFAULT_REGISTERED_ITEM;
    const [result] = await database.list(expected.id);

    deepEqual(result, expected);
  });

  // it("must register a hero using files", async () => {
  //   const expected = DEFAULT_REGISTERED_ITEM;

  //   ok(null, expected);
  // });
});
