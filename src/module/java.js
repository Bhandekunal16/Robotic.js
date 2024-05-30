const [fs, path, Logger] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
];
class Java {
  fileContent = `public class MyClass {
    public static ReturnType myFunction(ParameterType1 parameter1, ParameterType2 parameter2) { return returnValue;}
    public static void main(String[] args) {
        ReturnType result = myFunction(value1, value2);}}`;
  create(name) {
    const [fileName, folderName, trimmed] = [
      `${name}`,
      "../../../src",
      name.split(".")[0],
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("Folder already present.");
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

module.exports = Java;
