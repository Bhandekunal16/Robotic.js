class Global {
  constructor() {
    this.binary = "1000001";
    this.path = "../../../src";
    this.alreadyPresent = "Folder already present.";
    this.css = `body, h1, p { margin: 0; padding: 0;}
    body { font-family: 'Arial', sans-serif; background-color: #f0f0f0; color: #333; }
    .container { width: 80%; margin: 0 auto; }
    header { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}
    nav { background-color: #3498db; padding: 1em;}
    nav a { color: #ecf0f1; text-decoration: none; margin-right: 1em; }
    main { padding: 1em; }
    footer { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}`;
    this.go = ` package main
                  import "fmt"
      func functionName(parameter1 type1, parameter2 type2) returnType { return returnValue }
      func main() { result := functionName(value1, value2)}`;
  }
}

module.exports = Global;
