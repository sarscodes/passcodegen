'use strict';

const { alpha, symbols } = require('./characters.json');

const generateRandom = () => {
  return {
    number: () => Math.floor(Math.random() * 10),
    lowercase: () => alpha[Math.floor(Math.random() * alpha.length)],
    /* Used standard funtion to point `this` to the Object returned by generateRandom */
    uppercase: function () {
      console.log(this);
      return this.lowercase().toUpperCase();
    },
    symbol: () => symbols[Math.floor(Math.random() * symbols.length)],
  };
};

module.exports = generateRandom();
