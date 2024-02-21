const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

class Maintain {
  log(value) {
    try {
      const newValue = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${date
        .getDate()
        .toString()
        .padStart(2, "0")} - [LOG] ${value}`;
      const folderName = "../../../logs";
      const fileName = `${new Date().toUTCString()}.log`;

      const folderPath = path.join(__dirname, `${folderName}/${fileName}`);

      const filePath = path.join(folderPath, fileName);

      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : logger.log("folder already present.");

      fs.writeFile(filePath, newValue, (err) => {
        err
          ? logger.error("Error creating file:", err)
          : logger.log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports = Maintain;
