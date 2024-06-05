const create = require("../data/create");
class NestRepository {
  create(name) {
    const fileContent = ` import { Injectable } from '@nestjs/common';
    import { create${name}Dto } from './dto/create.${name}.dto';
    @Injectable()
    export class ${name}Repository { private readonly data: string[] = [];
    findAll(): string[] { return this.data; } }`;
    const fileName = `${name + ".repository.ts"}`;
    return new create().create(fileName, fileContent);
  }
}
module.exports = NestRepository;
