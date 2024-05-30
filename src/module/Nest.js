const [NestController, NestService, NestRepository, NestModule, NestDtoCreate] =
  [
    require("./nest.controller"),
    require("./nest.service"),
    require("./nest.repository"),
    require("./nest.module"),
    require("./Nest-create-dto"),
  ];
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
