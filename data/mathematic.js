/**
 *class that represents the mathematical operations.
 */
class mathematic {
  /**
   * @param {number || symbol} value - equations like  1 * 1 + 2
   * @function - solve any numeric equation.
   * @returns {number} answer of the equation.
   * */
  algebra(value) {
    try {
      const solution = eval(value);
      return solution;
    } catch (error) {
      return error;
    }
  }

  /**
   * @param {Array} array - Array like  [1, 2, 3000 ....]
   * @function - Add all element addition of array operation..
   * @returns {number} returns addition of all array.
   * */
  arrayAddition(array) {
    const value = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue * 1;
    }, 0);
    console.log(value);
    return value;
  }
}

module.exports = mathematic;
