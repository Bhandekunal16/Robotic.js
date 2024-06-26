const [HTML, Css, JavaScript] = [
  require("./html"),
  require("./css"),
  require("./javaScript"),
];
class Web {
  create(name) {
    new HTML().create(name.split(".")[0] + ".js");
    new Css().create(name.split(".")[0] + ".css");
    new JavaScript().create(name.split(".")[0] + ".html");
  }
  out() {
    const array = [HTML, Css, JavaScript];
    return array.map((elements) => elements.name);
  }
}
module.exports = Web;
