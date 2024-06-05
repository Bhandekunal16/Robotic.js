const create = require("../data/create");

class Map {
  create(name) {
    const trimmed = name.split(".")[0];
    const [fileName, fileContent] = [
      `${trimmed}.js`,
      `class ${trimmed} {} module.exports = ${trimmed};`,
    ];
    return new create().create(fileName, fileContent);
  }
}
module.exports = Map;
