const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class Go {
  create(name) {
    return new create().create(name, new type().go);
  }
}
module.exports = Go;
