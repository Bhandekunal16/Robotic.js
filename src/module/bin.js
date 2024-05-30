const [fs, path, Logger, global] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Binary {
  fileContent = new global().binary;
  create(name) {
    const [fileName, trimmed, folderName] = [
      `${name}`,
      name.split(".")[0],
      new global().path,
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new global().alreadyPresent);
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
module.exports = Binary;
