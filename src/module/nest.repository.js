const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
class NestRepository {
  create(name) {
    try {
      const fileContent = ` import { Injectable } from '@nestjs/common';
                            import { create${name}Dto } from './dto/create.${name}.dto';
                            @Injectable()
                            export class ${name}Repository { private readonly data: string[] = [];
                            findAll(): string[] { return this.data; } }`;
      const fileName = `${name + ".repository.ts"}`;
      const folderName = "../../../src";
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
    } catch (error) {
      new Logger().error(error);
      return error;
    }
  }
}

module.exports = NestRepository;
