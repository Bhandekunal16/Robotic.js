class UUID {
  randomAlphabet() {
    const consonants = [
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
    return consonants[Math.floor(Math.random() * consonants.length);];
  }

  alphanumeric() {
    let array = "";

    for (let index = 0; index < 4; index++) {
      const uuid =
        this.randomAlphabet().toLocaleUpperCase() +
        this.randomAlphabet() +
        Math.floor(Math.random() * 100);
      array += uuid;
    }

    return array;
  }

  /**
   * @param {number} length - optional parameter if want a specific length of the uuid, default is 10.
   * @function - numeric uuid generation operations
   * @returns - numeric uuid*/
  numeric(length) {
    let number = "";
    let arrayLength = length == undefined ? 10 : length;

    for (let index = 0; index < arrayLength; index++) {
      const element = Math.floor(Math.random() * 10);

      number += element;
    }

    return number;
  }

  /**
   * @function - give the vectorized uuid string.
   * @returns -  returns vectorized uuid string
   */
  vectorized() {
    let value = "";
    for (let index = 0; index < 10; index++) {
      const string = this.randomAlphabet();
      value += string;
    }
    const buffer = Buffer.from(value, "utf-8");
    const hexadecimalString = buffer.toString("hex");
    return hexadecimalString;
  }
}

module.exports = UUID;

