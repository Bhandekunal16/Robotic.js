const response = require("./src/class/response");
import Response from "./class/response";

const Res: Response = new response();

function main() {
  return Res.created("new");
}

console.log(main());
