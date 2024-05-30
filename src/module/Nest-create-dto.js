const [fs, path, Logger] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
];
class NestDtoCreate {
  create(name) {
    const [fileContent, fileName, folderName] = [
      `export class create${name}Dto { }`,
      `create.${name}.dto.ts`,
      "../../../src",
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${name}/dto/`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("folder already present.");
      fs.writeFile(filePath, fileContent, (err) => {
        err
          ? new Logger().error("Error creating file:", err)
          : new Logger().log(`File "${fileName}" created successfully.`);
      });
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}
module.exports = NestDtoCreate;
