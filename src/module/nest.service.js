const create = require("../data/create");
class NestService {
  create(name) {
    const fileContent = ` import { Injectable } from '@nestjs/common';
                          import { create${name}Dto } from './dto/create.${name}.dto'
                          @Injectable()
                          export class ${name}Service {
                          private readonly data: string[] = [];
                          findAll(): string[] { return this.data; } }`;
    const fileName = `${name + ".service.ts"}`;
    return new create().create(fileName, fileContent);
  }
}
module.exports = NestService;
