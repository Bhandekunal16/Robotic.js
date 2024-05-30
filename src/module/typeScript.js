const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

class TypeScript {
  fileContent = `
  const main = () => {try{ } catch(error){ return {res: error, status: false, msg: 'error'} }}`;
  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("folder already present.");
      fs.writeFile(filePath, this.fileContent, (err) => {
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

module.exports = TypeScript;
