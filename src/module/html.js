const [create, type] = [
  require("../data/create"),
  require("../../global/global"),
];
class HTML {
  create(name) {
    return new create().create(name, new type().html);
  }
}

module.exports = HTML;
