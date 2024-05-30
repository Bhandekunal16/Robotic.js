const [fs, path, Logger] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
];
class Binary {
  fileContent = "1000001";
  create(name) {
    const [fileName, trimmed, folderName] = [
      `${name}`,
      name.split(".")[0],
      "../../../src",
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("Folder already present.");
      fs.writeFile(filePath, this.fileContent, (err) => {
        if (err) {
          new Logger().error(err);
        } else {
          new Logger().log(`File "${fileName}" created successfully.`);
          return fileName;
        }
      });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = Binary;
