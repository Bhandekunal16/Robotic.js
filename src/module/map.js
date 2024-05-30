const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Map {
  create(name) {
    const trimmed = name.split(".")[0];
    const [fileName, fileContent] = [
      `${trimmed}.js`,
      `class ${trimmed} {} module.exports = ${trimmed};`,
    ];
    try {
      const folderPath = path.join(__dirname, `${new Type().path}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new Type().alreadyPresent);
      fs.writeFile(filePath, fileContent, (err) => {
        err
          ? new Error(err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = Map;
