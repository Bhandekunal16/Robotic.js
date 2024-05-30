const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class TypeScript {
  create(name) {
    const [fileName, trimmed] = [name.toString(), name.split(".")[0]];
    try {
      const folderPath = path.join(__dirname, `${new Type().path}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new Type().alreadyPresent);
      fs.writeFile(filePath, this.fileContent, (err) => {
        err
          ? new Error(err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = TypeScript;
