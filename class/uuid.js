/** class contains the uuid generating  operations.*/
class UUID {
  /**
   * @function -random alphabet generator function, used to generate random alphabets for uuids.
   * @returns - returns a random alphabetic character from 'a'-'z'.
   */
  randomAlphabet() {
    /** @type {Array<string>}*/
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

    /** @type {number}*/
    const randomIndex = Math.floor(Math.random() * consonants.length);

    return consonants[randomIndex];
  }

  /**
   * @function- generate alphanumeric UUID operation
   * @returns - alphanumeric UUID string*/
  alphanumeric() {
    /** @type {string}*/
    let array = "";

    for (let index = 0; index < 4; index++) {
      /** @type {string}*/
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
    /** @type {string}*/
    let number = "";
    let arrayLength = length == undefined ? 10 : length;

    for (let index = 0; index < arrayLength; index++) {
      /** @type {number}*/
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
    /** @type {string}*/
    let value = "";
    for (let index = 0; index < 10; index++) {
      const string = this.randomAlphabet();
      value += string;
    }

    /** @type {Buffer}*/
    const buffer = Buffer.from(value, "utf-8");

    /** @type {string}*/
    const hexadecimalString = buffer.toString("hex");
    return hexadecimalString;
  }
}

module.exports = UUID;
