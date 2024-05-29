const [express, bodyParser, Color, Logger, Node, Response] = [
  require("express"),
  require("body-parser"),
  require("./src/interface/color"),
  require("./src/interface/Logger"),
  require("./src/module/index"),
  require("./src/class/response"),
];
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
const port = process.env.LOCALHOST;

app.get("/", async (req, res) => {
  const query = new Response().success("hello world!");
  res.send(query);
});

const routes = [Node, Color, Logger, Response];
let imports = routes.map((elements) => elements.name);

app.listen(port, () => {
  new Logger().log("***************");
  new Logger().new(imports);
  new Logger().log(
    `Node app is successfully created on http://localhost: ${port}.`
  );
  new Logger().log("***************");
  new Node().getUserInput();
});
