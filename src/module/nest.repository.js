const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class NestRepository {
  create(name) {
    try {
      const fileContent = ` import { Injectable } from '@nestjs/common';
                            import { create${name}Dto } from './dto/create.${name}.dto';
                            @Injectable()
                            export class ${name}Repository { private readonly data: string[] = [];
                            findAll(): string[] { return this.data; } }`;
      const fileName = `${name + ".repository.ts"}`;

      try {
        const folderPath = path.join(__dirname, `${new Type().path}/${name}`);
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
    } catch (error) {
      return new Error(error);
    }
  }
}
module.exports = NestRepository;
