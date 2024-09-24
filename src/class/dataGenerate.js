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
      const [array, number] = [[], 10];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 0; j < number; j++) {
          element += Math.floor(Math.random() * number);
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
      const [array, num1, num2, num3] = [[], 20, 5, 4];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 1; j < num3; j++) {
          element +=
            this.#type.consonants[Math.floor(Math.random() * num1)] +
            this.#type.ovals[Math.floor(Math.random() * num2)];
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
      const [num1, num2] = [20, 4];
      for (let index = 0; index < length; index++) {
        let element = "";
        for (let j = 1; j < 7; j++) {
          element += this.#type.consonants[Math.floor(Math.random() * num1)];
        }
        array.push(
          element + this.#type.emails[Math.floor(Math.random() * num2)]
        );
      }
      return array.length > 0 ? array : this.error;
    } catch (error) {
      throw error;
    }
  }

  captcha() {
    this.value = "";
    const [num1, num2] = [10, 5];
    for (let j = 1; j < captcha; j++) {
      this.value +=
        this.#type.consonants[
          Math.floor(Math.random() * num1)
        ].toLocaleUpperCase() +
        this.#type.ovals[Math.floor(Math.random() * num2)];
    }
    return this.value;
  }
}

module.exports = DataGenerator;
