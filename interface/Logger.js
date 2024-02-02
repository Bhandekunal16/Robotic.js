const Timestamp = require("./time");
const Color = require("./color");

/**
 * @type {Timestamp}
 */
const time = new Timestamp();

/**
 * @type {Timestamp}
 */
const color = new Color();

/**
 * class that contain logger operation
 */
class Logger {
  constructor() {
    /**
     * @private
     */
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
   * @param {any} body
   * @function - create a default log message for success
   */
  log(body) {
    const string = `${color.green}  [NODE] : ${color.white} ${body}`;
    console.log(string);
  }

  /**
   * @param {any} body
   * @param {any} optionalContain
   * @function - create a default log message for success
   */
  warn(message, optionalContain) {
    /**
     * @type {string}
     */

    const optional = optionalContain == undefined ? "" : optionalContain;
    const string = `${color.yellow}  [NODE] : WARN ${color.white} ${message} ${optional}`;
    console.log(string);
  }

  /**
   * @param {any} body
   * @function - create a default log message for error
   */
  error(body, optionalContain) {
    /**
     * @type {string}
     */

    const optional = optionalContain == undefined ? "" : optionalContain;
    const string = `${color.red}  [NODE] : ERROR ${body}`;
    console.log(string);
  }

  /**
   * @param {*} services - need the array as input.
   * @function - create a custom theme for the logger
   */
  array(services) {
    services.forEach((service) => {
      const string = `${color.green}${new Date().toLocaleDateString()} [NODE] ${
        this.time
      } ${color.yellow} [NODE] : ${color.green} ${service.toUpperCase()} `;
      console.log(string);
    });
  }
}

module.exports = Logger;
