const [fs, path, Logger, Global] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class JavaScript {
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
      fs.writeFile(filePath, new Global().javascript, (err) => {
        err
          ? new Logger().error(err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}
module.exports = JavaScript;
