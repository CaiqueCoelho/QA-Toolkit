const chai = require('chai');

// expect
const expect = chai.expect;

// should
const should = chai.should();

// Assert - TDD style
const assert = chai.assert; // no chaining possible

// expect API examples
let a = 1, b = 1;
expect(a).to.be.equals(b, "a and b are not equal");
a.should.be.equals(b);
assert.equal(a,b, "a and b are not equal");

// object/string/boolen
function myObj() {
  return {
    a: 100,
    b: 'Hello'
  };
}

x = new myObj(), y = new myObj();
expect(x).to.be.an('object');
// expect(x).to.be.equals(y, 'x and y are not equal');

// deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'x and y are not equal');
x.should.be.deep.equals(y, 'x and y are not equal');
x.should.be.an('object').and.to.be.deep.equals(y, 'x and y are not equal');
// arrays
assert.deepEqual(x, y, "x and y are not equal");

let numbers = [1, 2, 3, 0]
expect(numbers).to.be.an('array').that.includes(3);
numbers.should.be.an('array').that.includes(3);
assert.isArray(number, "numbers is not an array");
