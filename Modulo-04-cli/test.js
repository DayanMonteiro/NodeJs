const { deepEqual, ok } = require("assert");

const database = require("./database");

const DEFAULT_REGISTERED_ITEM = {
  name: "Flash",
  power: "Speed",
  id: 1,
};

// inicializando uma switch de testes
describe("Hero manipulation switch", () => {
  before(async () => {
    await database.register(DEFAULT_REGISTERED_ITEM);
  });
  it("must research a hero using archives", async () => {
    const expected = DEFAULT_REGISTERED_ITEM;
    const [result] = await database.list(expected.id);

    deepEqual(result, expected);
  });

  it("must register a hero using files", async () => {
    const expected = DEFAULT_REGISTERED_ITEM;
    const result = await database.register(DEFAULT_REGISTERED_ITEM);
    const [actual] = await database.list(DEFAULT_REGISTERED_ITEM.id);

    deepEqual(actual, expected);
  });

  it("must remove a hero with id", async () => {
    const expected = true;
    const result = await database.remove(DEFAULT_REGISTERED_ITEM.id);
    deepEqual(result, expected);
  });
});
