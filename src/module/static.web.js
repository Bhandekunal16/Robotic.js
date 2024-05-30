const HTML = require("./html");
const Css = require("./css");
const JavaScript = require("./javaScript");
class Web {
  create(name) {
    const value1 = name.split(".")[0] + ".js";
    const value2 = name.split(".")[0] + ".css";
    const value3 = name.split(".")[0] + ".html";
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
