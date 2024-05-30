const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

class Java {
  fileContent = `public class MyClass {
    // Function definition
    public static ReturnType myFunction(ParameterType1 parameter1, ParameterType2 parameter2) {
        // Function body
        // Perform operations using parameters
        // ...

        // Return a value of ReturnType
        return returnValue;
    }
    // Main method for testing
    public static void main(String[] args) {
        // Example usage of the function
        ReturnType result = myFunction(value1, value2);
        // Perform actions with the result if needed
        // ...
    }
}
`;

  create(name) {
    const fileName = `${name}`;
    const folderName = "../../../src";
    const trimmed = name.split(".")[0];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      if (!fs.existsSync(folderPath))
        fs.mkdirSync(folderPath, { recursive: true });
      else logger.log("Folder already present.");
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

module.exports = Java;
