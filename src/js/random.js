'use strict';

const { alpha, symbols } = require('./characters.json');

const generateRandom = () => {
  const getRandom = (max, min = 0) => Math.floor(Math.random() * max + min);

  return {
    number: () => getRandom(10),
    lowercase: () => alpha[getRandom(alpha.length)],
    /* Used standard funtion to point `this` to the Object returned by generateRandom */
    uppercase: function () {
      return this.lowercase().toUpperCase();
    },
    symbol: () => symbols[getRandom(symbols.length)],
  };
};

module.exports = generateRandom();
