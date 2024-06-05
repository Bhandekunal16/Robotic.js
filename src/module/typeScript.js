const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class TypeScript {
  create(name) {
    return new create().create(name, new type().typescript);
  }
}
module.exports = TypeScript;
