'use strict';

const generateRandom = require('./random');

test('Generate random number', () => {
  expect(typeof generateRandom.number()).toBe('number');
  expect(generateRandom.number()).toBeLessThanOrEqual(9);
  expect(generateRandom.number()).toBeGreaterThanOrEqual(0);
});

test('Generate random letter', () => {
  expect(typeof generateRandom.lowercase()).toBe('string');
  expect(typeof generateRandom.uppercase()).toBe('string');
  expect(generateRandom.lowercase()).toEqual(expect.stringMatching(/[a-z]/));
  expect(generateRandom.uppercase()).toEqual(expect.stringMatching(/[A-Z]/));
});

test('Generate random symbol', () => {
  expect(typeof generateRandom.symbol()).toBe('string');
});
