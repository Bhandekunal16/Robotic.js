const create = require("../data/create");
class NestDtoCreate {
  create(name) {
    const [fileContent, fileName] = [
      `export class create${name}Dto { }`,
      `create.${name}.dto.ts`,
    ];
    return new create().create(fileName, fileContent);
  }
}
module.exports = NestDtoCreate;
