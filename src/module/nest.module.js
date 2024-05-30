const [fs, path, Logger, Type] = [
  require("fs"),
  require("path"),
  require("../interface/Logger"),
  require("../../global/global"),
];
class NestModule {
  create(name) {
    const fileContent = ` import { Module } from '@nestjs/common';
                          import { ${name}Controller } from './${name}.controller';
                          import { ${name}Service } from './${name}.service';
                          @Module({ controllers: [${name}Controller], providers: [${name}Service], }) 
                          export class ${name}Module {}`;
    const fileName = `${name + ".module.ts"}`;
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
  }
}
module.exports = NestModule;
