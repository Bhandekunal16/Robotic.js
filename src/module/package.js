const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();
class JSON {
  fileContent = `{ "name": "", "version": "1.0.0", "description": "", "main": "main.js",
                    "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "start": "", "build": "" },
                    "author": "", "license": "ISC","dependencies": { } }`;
  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);

      const filePath = path.join(folderPath, fileName);

      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : logger.log("folder already present.");

      fs.writeFile(filePath, this.fileContent, (err) => {
        err
          ? logger.error("Error creating file:", err)
          : logger.log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      logger.error(error);
      return error;
    }
  }
}

module.exports = JSON;
