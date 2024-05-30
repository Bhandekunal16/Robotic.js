const fs = require("fs");
const path = require("path");
const Logger = require("../interface/Logger");
const logger = new Logger();

class NestModule {
  create(name) {
    const fileContent = ` import { Module } from '@nestjs/common';
                          import { ${name}Controller } from './${name}.controller';
                          import { ${name}Service } from './${name}.service';
                          @Module({ controllers: [${name}Controller], providers: [${name}Service], }) 
                          export class ${name}Module {}`;
    const fileName = `${name + ".module.ts"}`;
    const folderName = "../../../src";
    try {
      const folderPath = path.join(__dirname, `${folderName}/${name}`);
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
module.exports = NestModule;
