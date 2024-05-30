const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class HTML {
  create(name) {
    const [fileName, folderName, trimmed] = [
      `${name}`,
      new Type().path,
      name.split(".")[0],
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${trimmed}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log(new Type().alreadyPresent);
      fs.writeFile(filePath, new Type().html, (err) => {
        err
          ? new Error(error)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = HTML;
