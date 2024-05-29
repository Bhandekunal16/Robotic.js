const TypeChecker = require("./TypeChecker");
const typeChecker = new TypeChecker();

/**class that contain methods that generate random data*/
class DataGenerator {
  constructor() {
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
    this.ovals = ["a", "e", "i", "o", "u"];
    this.emails = ["@gmail.com", "@yahoo.com", "@hotmail.com", "@example.com"];
  }

  create(length, type) {
    const [checkLength, checkType] = [
      typeChecker.checkNumber(length),
      typeChecker.checkString(type),
    ];
    const lengthValue = checkLength && checkType ? length : 0;
    try {
      let value;
      switch (true) {
        case type == "name":
          value = this.generateRandomName(lengthValue);
          return value;
        case type == "mobileNo":
          value = this.generateMobileNumber(lengthValue);
          return value;
        case type == "email":
          value = this.generateRandomEmail(lengthValue);
          return value;
        default:
          break;
      }
    } catch (error) {
      return error;
    }
  }

  generateMobileNumber(length) {
    try {
      const [array, name] = [[], []];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 0; j < 10; j++) {
          element += Math.floor(Math.random() * 10);
        }
        name.push(element);
        array.push(...name);
      }
      return array.length > 0
        ? array
        : {
            res: "type error : check the type of the length of the array it is not a number.",
            status: false,
          };
    } catch (error) {
      return error;
    }
  }
  
  generateRandomName(length) {
    try {
      let array = [];

      for (let index = 0; index < length; index++) {
        let name = [];
        let element = "";

        for (let j = 1; j < 4; j++) {
          element +=
            this.consonants[Math.floor(Math.random() * 20)] +
            this.ovals[Math.floor(Math.random() * 5)];
        }

        name.push(element);
        array.push(...name);
      }
      return array.length > 0
        ? array
        : {
            res: "type error : check the type of the length of the array it is not a number.",
            status: false,
          };
    } catch (error) {
      return error;
    }
  }

  /**
   * @function - generate various random email
   * @param {number} length - how many data you want to generate.
   * @returns {string[]} generate array that contain dummy data.*/
  generateRandomEmail(length) {
    try {
      let array = [];

      for (let index = 0; index < length; index++) {
        let name = [];
        let element = "";
        for (let j = 1; j < 7; j++) {
          element += this.consonants[Math.floor(Math.random() * 20)];
        }
        name.push(element + this.emails[Math.floor(Math.random() * 4)]);
        array.push(...name);
      }
      return array.length > 0
        ? array
        : {
            res: "type error : check the type of the length of the array it is not a number.",
            status: false,
          };
    } catch (error) {
      return error;
    }
  }

  /**
   * @function - captcha generating operations
   * @return - eight digit random captcha code.*/
  captcha() {
    let element = "";

    for (let j = 1; j < 5; j++) {
      element +=
        this.consonants[Math.floor(Math.random() * 10)].toLocaleUpperCase() +
        this.ovals[Math.floor(Math.random() * 5)];
    }

    return element;
  }
}

module.exports = DataGenerator;
