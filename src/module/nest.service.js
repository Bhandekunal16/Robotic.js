const [fs, path, Logger] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
];
class NestService {
  create(name) {
    const fileContent = ` import { Injectable } from '@nestjs/common';
                          import { create${name}Dto } from './dto/create.${name}.dto'
                          @Injectable()
                          export class ${name}Service {
                          private readonly data: string[] = [];
                          findAll(): string[] { return this.data; } }`;
    const [fileName, folderName] = [`${name + ".service.ts"}`, "../../../src"];
    try {
      const folderPath = path.join(__dirname, `${folderName}/${name}`);
      const filePath = path.join(folderPath, fileName);
      !fs.existsSync(folderPath)
        ? fs.mkdirSync(folderPath, { recursive: true })
        : new Logger().log("folder already present.");
      fs.writeFile(filePath, fileContent, (err) => {
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

module.exports = NestService;
