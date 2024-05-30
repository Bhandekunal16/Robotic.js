const NestController = require("./nest.controller");
const NestService = require("./nest.service");
const NestRepository = require("./nest.repository");
const NestModule = require("./nest.module");
const NestDtoCreate = require("./Nest-create-dto");
const controller = new NestController();
const service = new NestService();
const repository = new NestRepository();
const create = new NestDtoCreate();
const Module = new NestModule();
class Nest {
  async create(name) {
    const value = name.split(".")[0];
    Promise.all[
      (controller.create(value),
      service.create(value),
      repository.create(value),
      Module.create(value),
      create.create(value))
    ];
  }
  out() {
    const route = [
      NestController,
      NestService,
      NestRepository,
      NestDtoCreate,
      NestModule,
    ];
    const imports = route.map((elements) => elements.name);

    return imports;
  }
}

module.exports = Nest;
