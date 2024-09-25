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
      array +=
        this.#randomAlphabet().toLocaleUpperCase() +
        this.#randomAlphabet() +
        Math.floor(Math.random() * 100);
    }
    return array;
  }

  numeric(length) {
    let number = length == undefined ? new Array(10) : new Array(length);
    for (let i = 0; i < number.length; i++) {
      number[i] = Math.floor(Math.random() * 10);
    }
    return number.join("");
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

console.log(new UUID().alphanumeric());
