const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");

class Go {
  fileContent = ` package main
                  import "fmt"
      func functionName(parameter1 type1, parameter2 type2) returnType { return returnValue }
      func main() { result := functionName(value1, value2)}`;
  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);

      if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath, { recursive: true });
      else {
        new Logger().log("Folder already present.");
      }

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

module.exports = Go;
