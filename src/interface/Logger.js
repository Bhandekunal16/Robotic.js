const Timestamp = require("./time");
const Color = require("./color");

class Logger {
  constructor() {
    this.time = time.main();
  }

  new(services) {
    services.forEach((service) => {
      console.log(
        `${new Color().green}${new Date().toLocaleDateString()} [NODE] ${
          this.time
        } ${new Color().yellow} [SERVICE] ${
          new Color().green
        } ${service.toUpperCase()} `
      );
    });
  }

  log(message) {
    console.log(
      `${new Color().green}  [NODE] : ${new Color().white} ${message}`
    );
  }

  warn(message, optionalContain) {
    console.log(
      `${new Color().yellow}  [NODE] : WARN ${new Color().white} ${message} ${
        optionalContain ?? ""
      }`
    );
  }

  error(message, optionalContain) {
    console.log(
      `${new Color().red}  [NODE] : ERROR ${message} ${optionalContain ?? ""}`
    );
  }

  array(array) {
    array.forEach((array) => {
      console.log(
        `${new Color().green}${new Date().toLocaleDateString()} [NODE] - ${
          this.time
        }-${new Color().yellow}${array.toUpperCase()} `
      );
    });
  }

  // /**
  //  * @param {Array} array - need the array as input.
  //  * @function - create a custom theme for the logger
  //  */
  // size(array) {
  //   array.forEach((array) => {
  //     console.log(
  //       `${color.green}${new Date().toLocaleDateString()} [NODE] ${this.time} ${
  //         color.yellow
  //       } [${array.name}] ${new FIle(array.path).size()}`
  //     );
  //   });
  // }
}

module.exports = Logger;
