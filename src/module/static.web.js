const HTML = require("./html");
const Css = require("./css");
const JavaScript = require("./javaScript");
class Web {
  create(name) {
    const [value1, value2, value3] = [
      name.split(".")[0] + ".js",
      name.split(".")[0] + ".css",
      name.split(".")[0] + ".html",
    ];
    new HTML().create(value3);
    new Css().create(value2);
    new JavaScript().create(value1);
  }
  out() {
    const array = [HTML, Css, JavaScript];
    const out = array.map((elements) => elements.name);
    return out;
  }
}
module.exports = Web;
