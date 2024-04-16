"use strict";
exports.__esModule = true;
var response = require("./src/class/response");
var Res = new response();
function main() {
    return Res.created("new");
}
console.log(main());
