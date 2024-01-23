const Calc = require('./test-module-1');

// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports:
const calc1 = new Calc();
console.log(calc1.add(2, 5));

// export:
const calc2 = require('./test-module-2');
console.log(calc2.multiply(2, 5));

const { add, multiply, divide } = require('./test-module-2');
console.log(multiply(2, 3));

// caching:
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();