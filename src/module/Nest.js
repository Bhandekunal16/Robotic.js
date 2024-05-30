const NestController = require("./nest.controller");
const NestService = require("./nest.service");
const NestRepository = require("./nest.repository");
const NestModule = require("./nest.module");
const NestDtoCreate = require("./Nest-create-dto");
class Nest {
  async create(name) {
    const value = name.split(".")[0];
    Promise.all[
      (new NestController().create(value),
      new NestService().create(value),
      new NestRepository().create(value),
      new NestModule().create(value),
      new NestDtoCreate().create(value))
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
    return route.map((elements) => elements.name);
  }
}
module.exports = Nest;
