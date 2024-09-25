const Type = require("../../global/global");

class UUID {
  #type;

  constructor() {
    this.#type = new Type();
  }

  #randomAlphabet() {
    return this.#type.consonants[
      Math.floor(Math.random() * this.#type.consonants.length)
    ];
  }

  alphanumeric() {
    let array = "";
    for (let index = 0; index < 4; index++) {
      const uuid =
        this.#randomAlphabet().toLocaleUpperCase() +
        this.#randomAlphabet() +
        Math.floor(Math.random() * 100);
      array += uuid;
    }
    return array;
  }

  numeric(length) {
    let number = "";
    let arrayLength = length == undefined ? 10 : length;
    for (let index = 0; index < arrayLength; index++) {
      number += Math.floor(Math.random() * 10);
    }
    return number;
  }

  vectorized() {
    const valueArray = new Array(10);
    for (let i = 0; i < 10; i++) {
      valueArray[i] = this.#randomAlphabet();
    }
    const value = valueArray.join("");
    return Buffer.from(value, "utf-8").toString("hex");
  }
}

module.exports = UUID;

console.log(new UUID().vectorized());
