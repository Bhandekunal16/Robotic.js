class Type {
  constructor() {
    /** @type string */
    this.binary = "1000001";
    /** @type string */
    this.path = "../../../src";
    /** @type string */
    this.alreadyPresent = "Folder already present.";
    /** @type string */
    this.css = `body, h1, p { margin: 0; padding: 0;}
    body { font-family: 'Arial', sans-serif; background-color: #f0f0f0; color: #333; }
    .container { width: 80%; margin: 0 auto; }
    header { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}
    nav { background-color: #3498db; padding: 1em;}
    nav a { color: #ecf0f1; text-decoration: none; margin-right: 1em; }
    main { padding: 1em; }
    footer { background-color: #2c3e50; color: #ecf0f1; padding: 1em; text-align: center;}`;
    /** @type string */
    this.go = ` package main
                  import "fmt"
      func functionName(parameter1 type1, parameter2 type2) returnType { return returnValue }
      func main() { result := functionName(value1, value2)}`;
    /** @type string */
    this.html = `<!DOCTYPE html> <html lang="en">
      <head> <title>Your Page Title</title> <link rel="stylesheet" href="styles.css"> </head>
      <body>
        <header> <h1>Your Website</h1> <p>Welcome to your website!</p> </header>
        <nav> <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li> </ul> </nav>
        <main>  <section id="home"> <h2>Home</h2> <p>This is the home section of your website.</p> </section>
                <section id="about"> <h2>About Us</h2> <p>Learn more about our company and values.</p> </section>
                <section id="services"> <h2>Our Services</h2> <p>Discover the services we offer to our clients.</p> </section> </main>
        <footer> <p>&copy; 2024 Your Website. All rights reserved.</p> </footer> </body></html>`;
    /** @type string */
    this.start = 'Enter something (type "exit" to stop): ';
    /** @type string */
    this.java = `public class MyClass {
      public static ReturnType myFunction(ParameterType1 parameter1, ParameterType2 parameter2) { return returnValue;}
      public static void main(String[] args) {
          ReturnType result = myFunction(value1, value2);}}`;
    /** @type string */
    this.javascript = `function main(){ try{ }catch(error){ return {res: error , status: false, msg: 'error'}}}`;
    /** @type string */
    this.package = `{ "name": "", "version": "1.0.0", "description": "", "main": "main.js",
    "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "start": "", "build": "" },
    "author": "", "license": "ISC","dependencies": { } }`;
    /** @type string */
    this.python = `def function_name(parameter1, parameter2):
    return return_value
    result = function_name(value1, value2)`;
    /** @type string */
    this.typescript = `
  const main = () => {try{ } catch(error){ return {res: error, status: false, msg: 'error'} }}`;
    /** @type Array<string> */
    this.emails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@example.com"];
    /** @type Array<string> */
    this.ovals = ["a", "e", "i", "o", "u"];
    /** @type string */
    this.error =
      "type error : check the type of the length of the array it is not a number.";
    /** @type Array<string> */
    this.consonants = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  }
}

module.exports = Type;
