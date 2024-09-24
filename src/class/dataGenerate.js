const [TypeChecker, Type] = [
  require("./TypeChecker"),
  require("../../global/global"),
];

class DataGenerator {
  #type;
  #checker;
  value;

  constructor() {
    this.#type = new Type();
    this.#checker = new TypeChecker();
  }

  create(length, type) {
    try {
      const [checkLength, checkType] = [
        this.#checker.checkNumber(length),
        this.#checker.checkString(type),
      ];
      const lengthValue = checkLength && checkType ? length : 0;

      switch (type) {
        case "name":
          return this.#generateRandomName(lengthValue);
        case "mobileNo":
          return this.#generateMobileNumber(lengthValue);
        case "email":
          return this.#generateRandomEmail(lengthValue);
        default:
          throw new Error(`Unsupported type: ${type}`);
      }
    } catch (error) {
      return error;
    }
  }

  #generateMobileNumber(length) {
    try {
      const array = [];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 0; j < number; j++) {
          element += Math.floor(Math.random() * 10);
        }
        array.push(element);
      }
      return array.length > 0
        ? array
        : new Error("Error generating mobile number");
    } catch (error) {
      throw error;
    }
  }

  #generateRandomName(length) {
    try {
      const array = [];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 1; j < 4; j++) {
          element +=
            this.#type.consonants[Math.floor(Math.random() * 20)] +
            this.#type.ovals[Math.floor(Math.random() * 5)];
        }
        array.push(element);
      }
      return array.length > 0 ? array : this.error;
    } catch (error) {
      throw error;
    }
  }

  #generateRandomEmail(length) {
    try {
      let array = [];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 1; j < 7; j++) {
          element += this.#type.consonants[Math.floor(Math.random() * 4)];
        }
        array.push(element + this.#type.emails[Math.floor(Math.random() * 20)]);
      }
      return array.length > 0 ? array : this.error;
    } catch (error) {
      throw error;
    }
  }

  captcha() {
    this.value = "";
    for (let j = 1; j < 5; j++) {
      this.value +=
        this.#type.consonants[
          Math.floor(Math.random() * 10)
        ].toLocaleUpperCase() + this.#type.ovals[Math.floor(Math.random() * 5)];
    }
    return this.value;
  }
}

module.exports = DataGenerator;
