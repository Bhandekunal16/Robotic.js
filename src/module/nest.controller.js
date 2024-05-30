const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class NestController {
  create(name) {
    try {
      const fileContent = `import { Controller, Get, Post, Body, Param } from '@nestjs/common';
                          import { create${name}Dto } from './dto/create.${name}.dto';
                          import { ${name}Service } from './${name}.service';
                          @Controller('${name}')
                          export class ${name}Controller {
                          constructor(private readonly ${name}Service: ${name}Service) {}
                          @Post(@Body() body: create${name}Dto)
                          findAll(): string[] { return this.${name}Service.findAll();}}`;
      const [fileName, folderName] = [
        `${name + ".controller.ts"}`,
        new Type().path,
      ];
      try {
        const folderPath = path.join(__dirname, `${folderName}/${name}`);
        const filePath = path.join(folderPath, fileName);
        !fs.existsSync(folderPath)
          ? fs.mkdirSync(folderPath, { recursive: true })
          : new Logger().log(new Type().alreadyPresent);
        fs.writeFile(filePath, fileContent, (err) => {
          err
            ? new Error(err)
            : new Logger().log(
                `File "${fileName}" created successfully`
              );
        });
      } catch (error) {
        return new Error(error);
      }
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = NestController;
