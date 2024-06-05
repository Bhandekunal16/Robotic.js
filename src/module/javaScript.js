const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class JavaScript {
  create(name) {
    return new create().create(name, new type().javascript);
  }
}
module.exports = JavaScript;
