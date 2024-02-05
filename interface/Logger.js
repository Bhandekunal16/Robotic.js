const Timestamp = require("./time");
const Color = require("./color");
const time = new Timestamp();
const color = new Color();

/**
 * class that contain logger operation
 */
class Logger {
  constructor() {
    this.time = time.main();
  }

  /**
   * @param {*} services
   * @function - create a custom theme for the logger
   */
  new(services) {
    services.forEach((service) => {
      const string = `${color.green}${new Date().toLocaleDateString()} [NODE] ${
        this.time
      } ${color.yellow} [SERVICE] ${color.green} ${service.toUpperCase()} `;
      console.log(string);
    });
  }

  /**
   * @param {any} message
   * @function - create a default log message for success
   */
  log(message) {
    const string = `${color.green}  [NODE] : ${color.white} ${message}`;
    console.log(string);
  }

  /**
   * @param {any} message
   * @param {any} optionalContain
   * @function - create a default log message for success
   */
  warn(message, optionalContain) {
    const optional = optionalContain == undefined ? "" : optionalContain;
    const string = `${color.yellow}  [NODE] : WARN ${color.white} ${message} ${optional}`;
    console.log(string);
  }

  /**
   * @param {any} message
   * @function - create a default log message for error
   */
  error(message, optionalContain) {
    const optional = optionalContain == undefined ? "" : optionalContain;
    const string = `${color.red}  [NODE] : ERROR ${message} ${optional}`;
    console.log(string);
  }

  /**
   * @param {*} array - need the array as input.
   * @function - create a custom theme for the logger
   */
  array(array) {
    array.forEach((array) => {
      const string = `${
        color.green
      }${new Date().toLocaleDateString()} [NODE] - ${this.time}-${
        color.yellow
      }${array.toUpperCase()} `;
      console.log(string);
    });
  }
}

module.exports = Logger;
