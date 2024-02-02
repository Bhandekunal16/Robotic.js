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
}

module.exports = UUID;
