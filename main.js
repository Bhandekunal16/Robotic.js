const express = require("express");
const bodyParser = require("body-parser");
const Color = require("./interface/color");
const Logger = require("./interface/Logger");
const Node = require("./module/index");

const app = express();
app.use(bodyParser.json());
const port = 3004;

const color = new Color();
const logger = new Logger();
const node = new Node();

app.get("/", async (req, res) => {
  const query = "hello world";
  res.send(query);
});

const routes = [Node, Color, Logger];
let imports = routes.map((elements) => elements.name);

app.listen(port, async () => {
  logger.log("***************");
  logger.new(imports);
  logger.log(`Node app is successfully created on http://localhost: ${port}.`);
  logger.log("***************");
  node.getUserInput();
});
