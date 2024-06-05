const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class Java {
  create(name) {
    return new create().create(name, new type().java);
  }
}

module.exports = Java;
