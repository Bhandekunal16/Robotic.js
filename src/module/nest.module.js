const create = require("../data/create");
class NestModule {
  create(name) {
    const fileContent = ` import { Module } from '@nestjs/common';
                          import { ${name}Controller } from './${name}.controller';
                          import { ${name}Service } from './${name}.service';
                          @Module({ controllers: [${name}Controller], providers: [${name}Service], }) 
                          export class ${name}Module {}`;
    const fileName = `${name + ".module.ts"}`;
    return new create().create(fileName, fileContent);
  }
}
module.exports = NestModule;
