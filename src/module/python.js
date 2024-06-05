const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class Python {
  create(name) {
    return new create().create(name, new type().python);
  }
}
module.exports = Python;
