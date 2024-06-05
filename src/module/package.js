const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class JSON {
  create(name) {
    return new create().create(name, new type().package);
  }
}
module.exports = JSON;
