const create = require("../data/create");
class NestController {
  create(name) {
    const fileContent = `import { Controller, Get, Post, Body, Param } from '@nestjs/common';
    import { create${name}Dto } from './dto/create.${name}.dto';
    import { ${name}Service } from './${name}.service';
    @Controller('${name}')
    export class ${name}Controller {
    constructor(private readonly ${name}Service: ${name}Service) {}
    @Post(@Body() body: create${name}Dto)
    findAll(): string[] { return this.${name}Service.findAll();}}`;
    const fileName = `${name + ".controller.ts"}`;
    return new create().create(fileName, fileContent);
  }
}

module.exports = NestController;
