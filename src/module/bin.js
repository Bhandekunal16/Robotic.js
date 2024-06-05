const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class Binary {
  create(name) {
    return new create().create(name, new type().binary);
  }
}
module.exports = Binary;
