const [fs, path, Logger, Global] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Java {
  fileContent = `public class MyClass {
    public static ReturnType myFunction(ParameterType1 parameter1, ParameterType2 parameter2) { return returnValue;}
    public static void main(String[] args) {
        ReturnType result = myFunction(value1, value2);}}`;
  create(name) {
    const [fileName, folderName, trimmed] = [
      `${name}`,
      new Global().path,
      name.split(".")[0],
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new Global().alreadyPresent);
      fs.writeFile(filePath, this.fileContent, (err) => {
        err
          ? new Error(error)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Error(error);
    }
  }
}

module.exports = Java;
