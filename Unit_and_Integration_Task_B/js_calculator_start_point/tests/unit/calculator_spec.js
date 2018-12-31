var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });

  it('it should start with a default of 0', function(){
    const actual = calculator.runningTotal;
    const expected = 0;

    assert.equal(actual, expected);
  });

  it('it should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);

    const actual = calculator.runningTotal;
    const expected = 5;

    assert.equal(actual, expected);
  });

  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);

    const actual = calculator.runningTotal;
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);

    const actual = calculator.runningTotal;
    const expected = 15;

    assert.equal(actual, expected);
  });

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);

    const actual = calculator.runningTotal;
    const expected = 3;

    assert.equal(actual, expected);
  });

  it('it should concate several number clicks, accept "6", "9", "0" as 690', function(){
    calculator.numberClick(6);
    calculator.numberClick(9);
    calculator.numberClick(0);

    const actual = calculator.runningTotal;
    const expected = 690;

    assert.equal(actual, expected);
  });

  it('it should concate several operations ((5 + 5 - 3) * 4 / 2 = 14)', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(4);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    const actual = calculator.runningTotal;
    const expected = 14;

    assert.equal(actual, expected);
  });

  it('it should clear the running total without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick()
    calculator.numberClick(6);
    calculator.operatorClick('=');

    const actual = calculator.runningTotal;
    const expected = 11;

    assert.equal(actual, expected);
  });

});
