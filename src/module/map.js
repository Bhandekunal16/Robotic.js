const [fs, path, Logger, Global] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Map {
  create(name) {
    const trimmed = name.split(".")[0];
    const [fileName, fileContent, folderName] = [
      `${trimmed}.js`,
      `class ${trimmed} {} module.exports = ${trimmed};`,
      new Global().path,
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new Global().alreadyPresent);
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
