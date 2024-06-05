const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class Css {
  create(name) {
    return new create().create(name, new type().css);
  }
}

module.exports = Css;
