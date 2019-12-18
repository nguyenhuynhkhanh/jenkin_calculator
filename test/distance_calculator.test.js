var calculator = require('../distance_calculator.js');
var assert = require('assert');
describe('distance calculator', () => {
  describe('distance', () => {
    it ('should return 10 when left < right', () => {
      assert.equal(10, calculator.distance(5, 10));
    });
    it ('should return 20 when left > right', () => {
      assert.equal(10, calculator.distance(18, 10));
    });
  });
});
