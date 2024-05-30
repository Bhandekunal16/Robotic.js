const [fs, path, Logger, type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Binary {
  create(name) {
    const [fileName, trimmed] = [name.toString(), name.split(".")[0]];
    try {
      const folderPath = path.join(__dirname, `${new type().path}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new type().alreadyPresent);
      fs.writeFile(filePath, new type().binary, (err) => {
        err
          ? new Error(err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = Binary;
