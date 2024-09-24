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
      return new Error(error);
    }
  }

  #generateMobileNumber(length) {
    try {
      const array = [];
      for (let index = 0; index < length; index++) {
        let [name, element] = [[], ""];
        for (let j = 0; j < 10; j++) {
          element += Math.floor(Math.random() * 10);
        }
        name.push(element);
        array.push(...name);
      }
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
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
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
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
      return array.length > 0 ? array : new Error(this.error);
    } catch (error) {
      return new Error(error);
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
