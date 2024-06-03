const http = require("http");
const { parse } = require("url");
const { StringDecoder } = require("string_decoder");

const [Color, Logger, Node, Response, Config] = [
  require("./src/interface/color"),
  require("./src/interface/Logger"),
  require("./src/module/index"),
  require("./src/class/response"),
  require("./config"),
];

new Config().loadEnv(".env");

const PORT = process.env.LOCALHOST || 3000;

const requestHandler = (req, res) => {
  const parsedUrl = parse(req.url, true);
  const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const decoder = new StringDecoder("utf-8");
  let buffer = "";

  req.on("data", (chunk) => {
    buffer += decoder.write(chunk);
  });

  req.on("end", () => {
    buffer += decoder.end();

    if (path === "" && method === "get") {
      const query = new Response().success("hello world!");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(query));
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  });
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  const logger = new Logger();
  const routes = [Node, Color, Logger, Response];
  const imports = routes.map((element) => element.name);

  logger.log("*".repeat(100));
  logger.new(imports);
  logger.log(`Node app is successfully created on http://localhost:${PORT}.`);
  logger.log("*".repeat(100));
  new Node().getUserInput();
});
