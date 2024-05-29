const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");

class Binary {
  fileContent = "1000001";
  create(name) {
    const [fileName, trimmed, folderName] = [
      `${name}`,
      name.split(".")[0],
      "../../../src",
    ];

    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);

      if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath, { recursive: true });
      else new Logger().log("Folder already present.");

      fs.writeFile(filePath, this.fileContent, (err) => {
        if (err) {
          new Logger().error("Error creating file:", err);
          return undefined;
        } else {
          new Logger().log(`File "${fileName}" created successfully.`);
          return fileName;
        }
      });
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}

module.exports = Binary;
