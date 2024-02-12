const express = require("express");
const bodyParser = require("body-parser");
const Color = require("./interface/color");
const Logger = require("./interface/Logger");
const Node = require("./module/index");
const FIle = require("./data/File");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const port = process.env.LOCALHOST;

const logger = new Logger();
const node = new Node();

app.get("/", async (req, res) => {
  const query = "hello world";
  res.send(query);
});

const routes = [Node, Color, Logger];
let imports = routes.map((elements) => elements.name);

app.listen(port, () => {
  logger.log("***************");
  logger.new(imports);
  logger.log([Node.name] + ' size ' + new FIle("./module/index.js").size());
  logger.log([Color.name] + ' size ' + new FIle("./interface/color.js").size());
  logger.log([Logger.name] + ' size ' + new FIle("./interface/Logger.js").size());
  logger.log(`Node app is successfully created on http://localhost: ${port}.`);
  logger.log("***************");
  node.getUserInput();
  
});
