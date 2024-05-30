const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
class Map {
  create(name) {
    const trimmed = name.split(".")[0];
    const [fileName, fileContent, folderName] = [
      `${trimmed}.js`,
      `class ${trimmed} {} module.exports = ${trimmed};`,
      "../../../src",
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("folder already present.");
      fs.writeFile(filePath, fileContent, (err) => {
        err
          ? new Logger().error("Error creating file:", err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}
module.exports = Map;
