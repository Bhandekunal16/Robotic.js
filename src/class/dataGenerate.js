const [TypeChecker, Type] = [
  require("./TypeChecker"),
  require("../../global/global"),
];

class DataGenerator {
  #type;
  #checker;
  value;
  #number;
  #captcha_len;

  constructor() {
    this.#type = new Type();
    this.#checker = new TypeChecker();
    this.#number = 10;
    this.#captcha_len = 5;
  }

  create(length, type) {
    try {
      const [checkLength, checkType] = [
        this.#checker.checkNumber(length),
        this.#checker.checkString(type),
      ];
      const lengthValue = checkLength && checkType ? length : 0;
      let value;
      switch (true) {
        case type == "name":
          value = this.#generateRandomName(lengthValue);
          return value;
        case type == "mobileNo":
          value = this.#generateMobileNumber(lengthValue);
          return value;
        case type == "email":
          value = this.#generateRandomEmail(lengthValue);
          return value;
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
        for (let j = 0; j < this.#number; j++) {
          element += Math.floor(Math.random() * this.#number);
        }
        array.push(element);
      }
      return array.length > 0 ? array : new Error(this.error);
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
            this.#type.ovals[Math.floor(Math.random() * this.#captcha_len)];
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
          element += this.#type.consonants[Math.floor(Math.random() * 20)];
        }
        array.push(element + this.#type.emails[Math.floor(Math.random() * 4)]);
      }
      return array.length > 0 ? array : this.error;
    } catch (error) {
      throw error;
    }
  }

  captcha() {
    this.value = "";
    for (let j = 1; j < this.#captcha_len; j++) {
      this.value +=
        this.#type.consonants[
          Math.floor(Math.random() * this.#number)
        ].toLocaleUpperCase() +
        this.#type.ovals[Math.floor(Math.random() * this.#captcha_len)];
    }
    return this.value;
  }
}

module.exports = DataGenerator;
