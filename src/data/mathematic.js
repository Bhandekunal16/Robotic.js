const TypeChecker = require("../class/TypeChecker");
const type = new TypeChecker();

class mathematic {
  algebra(value) {
    return eval(value);
  }

  arrayAddition(array) {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue * 1;
    }, 0);
  }

  absolute(value) {
    return Math.abs(value);
  }

  power(value1, value2) {
    const number = type.checkNumber(value1);
    const number2 = type.checkNumber(value2);
    let array = [value1, value2];

    return number && number2
      ? Math.pow(value1, value2)
      : `type error : only type number accepted wrong type at position ${
          number ? "" : array.findIndex((element) => element === value1) + 1
        } ${
          number2 ? "" : array.findIndex((element) => element === value2) + 1
        }`;
  }

  squareRoot(value) {
    const number = type.checkNumber(value);
    return number
      ? Math.sqrt(value)
      : `type error : only type number accepted.`;
  }
}

module.exports = mathematic;
