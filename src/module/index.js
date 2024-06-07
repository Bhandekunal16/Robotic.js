const [
  readline,
  TypeScript,
  JavaScript,
  Binary,
  Java,
  Go,
  Python,
  Css,
  HTML,
  Web,
  JSON,
  Nest,
  Map,
  Global,
] = [
  require("readline"),
  require("./typeScript"),
  require("./javaScript"),
  require("./bin"),
  require("./java"),
  require("./go"),
  require("./python"),
  require("./css"),
  require("./html"),
  require("./static.web"),
  require("./package"),
  require("./Nest"),
  require("./map"),
  require("../../global/global"),
];
class Node {
  create(name) {
    try {
      name.includes(".ts") ? new TypeScript().create(name) : null;
      name.includes(".json") ? new JSON().create(name) : null;
      name.includes(".js") ? new JavaScript().create(name) : null;
      name.includes(".bin") ? new Binary().create(name) : null;
      name.includes(".java") ? new Java().create(name) : null;
      name.includes(".go") ? new Go().create(name) : null;
      name.includes(".py") ? new Python().create(name) : null;
      name.includes(".css") ? new Css().create(name) : null;
      name.includes(".html") ? new HTML().create(name) : null;
      name.includes(".web") ? new Web().create(name) : null;
      name.includes(".nest") ? new Nest().create(name) : null;
      name.includes(".map") ? new Map().create(name) : null;
    } catch (error) {
      return new Error(error);
    }
  }

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  getUserInput() {
    this.rl.question(new Global().start, (userInput) => {
      userInput.toLocaleLowerCase() === "exit"
        ? this.rl.close()
        : this.create(userInput);
    });
  }

  output() {
    let elements = new Nest().out();
    let elements1 = new Web().out();
    elements = [...elements, ...elements1];
    return elements;
  }
}
module.exports = Node;
