const Timestamp = require("./time");
const Color = require("./color");
const time = new Timestamp();
const color = new Color();

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

  /**
   * @param {any} message
   * @function - create a default log message for success
   */
  log(message) {
    console.log(`${color.green}  [NODE] : ${color.white} ${message}`);
  }

  /**
   * @param {any} message
   * @param {any} optionalContain
   * @function - create a default log message for success
   */
  warn(message, optionalContain) {
    console.log(
      `${color.yellow}  [NODE] : WARN ${color.white} ${message} ${
        optionalContain ?? ""
      }`
    );
  }

  /**
   * @param {any} message
   * @function - create a default log message for error
   */
  error(message, optionalContain) {
    console.log(
      `${color.red}  [NODE] : ERROR ${message} ${optionalContain ?? ""}`
    );
  }

  /**
   * @param {*} array - need the array as input.
   * @function - create a custom theme for the logger
   */
  array(array) {
    array.forEach((array) => {
      console.log(
        `${color.green}${new Date().toLocaleDateString()} [NODE] - ${
          this.time
        }-${color.yellow}${array.toUpperCase()} `
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
