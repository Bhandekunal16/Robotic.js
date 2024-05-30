const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class NestDtoCreate {
  create(name) {
    const [fileContent, fileName, folderName] = [
      `export class create${name}Dto { }`,
      `create.${name}.dto.ts`,
      new Type().path,
    ];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${name}/dto/`);
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
module.exports = NestDtoCreate;
