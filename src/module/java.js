const [fs, path, Logger, Global] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class Java {
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
      fs.writeFile(filePath, new Global().java, (err) => {
        err
          ? new Error(err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Error(error);
    }
  }
}

module.exports = Java;
